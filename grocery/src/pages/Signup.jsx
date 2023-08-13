import React, {useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.config';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';

import { useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';

const Signup = () => {

const [username, setUserName] = useState("");
const [email, setEmail ] = useState("");
const [password, setPassword] = useState("");
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();


const signup = async(e) => {
  e.preventDefault();
  setLoading(true);
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    const user = userCredential.user;
    const storageRef = ref(storage, `images/${Date.now() + username}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on((error) => {
      toast.error(error.message);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl) => {
        await updateProfile(user, {
          displayName: username,
          photoURL: downloadUrl,
        });
        // store user in fire store database 
        await setDoc(doc(db, 'users' , user.uid),{
          uid: user.uid,
          displayName: username,
          email,
          photoURL: downloadUrl,
        });
      });
    });
    
    setLoading(false);
    toast.success("Woo hoo! Account Created Successfully!")
    navigate('/login');
  
  }
  
  catch(error) {
    setLoading(false);
    toast.error('Something went Wrong');
  }
};

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading.....</h5></Col> : <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Username' value={username} onChange={e => setUserName(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='email' placeholder='Email:      (exam123@gmail.com)' value={email} onChange={e => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='file' onChange={e => setFile(e.target.files[0])}/>
                </FormGroup>

                <button type='submit' className='buy__btn auth__btn'>Create Account</button>
                <p>Already have an account? <Link to='/login'>Login!</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;
