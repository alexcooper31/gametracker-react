import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  Submit,
  SignUp,
  Error
} from './styled';
import Link from '../../../Helpers/link';
import validate from '../../../Helpers/validation';
import { signIn } from '../../../Redux/actions';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailError, setError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const focus = useCallback(() => {
    setError(false);
    setPasswordError(false);
  }, [])

  const submit = useCallback(() => {
    if(!validate(email)) {
      setError(true);
      return;
    }
    if(password === '') {
      setPasswordError(true);
      return;
    }
    dispatch(signIn({email, password}))
    history.push('/')

  }, [dispatch, email, history, password])

  return (
    <Container>
      <Content>
        <Title>
          Game<b>Tracker</b>
        </Title>

        <Form>
          <Input
            error={emailError}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
            onFocus={focus}
          />
          <Error>{ emailError ? 'The entered email must be valid' : '' }</Error>

          <Input
            error={passwordError}
            placeholder='Password'
            type='password'
            onChange={e => setPassword(e.target.value)}
            onFocus={focus} 
          />
          <Error>{ passwordError ? 'Please type a password' : '' }</Error>

          <Submit onClick={submit}>Log In</Submit>
          <Link to='/new-user' style={{width: '35%'}}>
            <SignUp>Sign Up</SignUp>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default withRouter(Login);