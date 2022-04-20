import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const checkRef = useRef(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        //  const agree = checkRef.current.checked;
        if (agree) {
            createUserWithEmailAndPassword(name, email, password);
            navigate('/home');
        }
    }

    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center'> Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} ref={checkRef} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept our terms and condition" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    className='w-50 mx-auto d-block'
                    variant="primary"
                    type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <span className='text-danger' onClick={navigateLogin}>Please login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;