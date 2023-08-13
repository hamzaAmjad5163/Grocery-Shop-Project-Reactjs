import React, {useRef, useEffect} from 'react';
import '../Header/header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';

import logo from '../../assets/images/eco-logo.png';
import { Container, Row } from "reactstrap";

import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav__links = [
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shop',
    display: 'Shop'
  },
  {
    path:'cart',
    display: 'Cart'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=> {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header');
      }else{
        headerRef.current.classList.remove('sticky__header');

      }
    });
  };

  const logout = () => {

    signOut(auth).then(() => {
      toast.success("Logout successfully!");
      navigate('/home');
    }).catch(err => {
      toast.error(err.message);
    });

  }

  useEffect(()=>{
    stickyHeaderFunc();
    return ()=> window.removeEventListener('scroll',stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
      navigate('/cart');
  };

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');

  return <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <div>
              <h1>
                SemPro
              </h1>
            </div>
          </div>


          <div className='navigation' ref={menuRef} onClick={menuToggle}>
            <ul className='menu'>
              {
                nav__links.map((item, index) => (
                  <li className='nav__items' key={index}>
                <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active':''}>
                  {item.display}
                </NavLink>
              </li>
                ))
              }
            </ul>
          </div>

          <div className='nav__icons'>
            {/*<span className='fav__icon'><i className='ri-heart-line'></i>
            <span className='badge'>1</span>
            </span>*/}
            <span className='cart__icon' onClick={navigateToCart}><i className='ri-shopping-bag-line'></i>
            <span className='badge'>{totalQuantity}</span></span>
            <div className='profile'>
              <motion.img whileTap={{scale: 1.2}} src={currentUser? currentUser.photoURL: userIcon} alt='' onClick={toggleProfileActions} />
              <div className='profile__actions' ref={profileActionRef} onClick={toggleProfileActions}>
                {
                  currentUser ? <span style={{display:'flex', flexDirection: 'column'}}>
                                  <i onClick={logout} className="ri-logout-box-line">Logout</i>
                                  <Link to='/dashboard'><i class="ri-survey-line"></i>Dashboard</Link>
                                </span> : 
                  <div className='d-flex align-items-center justify-content-center flex-column login__section'>
                    
                    <Link to='/signup'> Signup</Link>
                    <Link to='/login'><i className="ri-logout-box-r-line "></i>Login</Link>
                  </div>
                }
              </div>
            </div>
            <div className='mobile__menu'>
               <span onClick={menuToggle}><i className='ri-menu-line'></i></span>
            </div>
          </div>

          
        </div>
      </Row>
    </Container>
  </header>
}

export default Header;
