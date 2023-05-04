import React, { useCallback, useState } from 'react';
import { SignInContainer } from './SignIn.styles';
import {
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  SignInPageContainer,
} from '../../components/styles';
import { useAuthenticate } from '../../hooks/useAuthenticate';
import { Button } from '../../components/Button';

function SignIn() {
  const { signIn, errorMessage, isLoading } = useAuthenticate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isValid = useCallback(() => {
    const isUsernameValid = userName.length > 0;
    if (!isUsernameValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        username: 'Username can not be empty!',
      }));
    }

    const isPasswordValid = password.length > 3;
    if (!isPasswordValid) {
      setFieldErrors((prevFieldErrors) => ({
        ...prevFieldErrors,
        password:
          password.length === 0
            ? 'Password can not be empty!'
            : 'Password must contain at least 4 characters!',
      }));
    }
    return isUsernameValid && isPasswordValid;
  }, [password, userName]);

  const onSubmit = useCallback(() => {
    setFieldErrors({});
    if (!isValid()) {
      return;
    }
    signIn(userName, password);
  }, [isValid, password, signIn, userName]);

  const onChangeUsernameHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserName(event.target.value);
  };

  const onChangePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(event.target.value);
  };

  return (
    <SignInPageContainer>
      <SignInContainer>
        <h2>Library Management Application</h2>
        <h4>Sign In</h4>
        {isLoading && <span>Loading...</span>}
        <Form>
          <FormGroup>
            <label htmlFor="username">Username:</label>
            <Input type="text" onChange={onChangeUsernameHandler} />
            {fieldErrors['username'] && (
              <ErrorMessage> {fieldErrors['username']}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password:</label>
            <Input type="password" onChange={onChangePasswordHandler} />
            {fieldErrors['password'] && (
              <ErrorMessage> {fieldErrors['password']}</ErrorMessage>
            )}
          </FormGroup>
          <Button onClick={onSubmit} isLoading={isLoading}>
            Sign In
          </Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Form>
      </SignInContainer>
    </SignInPageContainer>
  );
}

export default SignIn;
