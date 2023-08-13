import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import CommonSection from '../components/UI/CommonSection';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


const Login = () => {

const [email, setEmail ] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const signIn = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    setLoading(false);
    toast.success("Login Successfully!");
    navigate('/checkout');
  }
  catch(error){
    setLoading(false);
    toast.error(error.message);
  }
}

  return (
    <Helmet title='Log In'>
    <CommonSection title='Welcome to SemPro'/>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col className='text-center' lg='12'><h5 className='fw-bold'>Loading.....</h5></Col> : <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='Email:      (exam123@gmail.com)' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                </FormGroup>

                <button type='submit' className='buy__btn auth__btn'>Login</button>
                <p>Don't have an account? <Link to='/signup'>Create an account know</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;
