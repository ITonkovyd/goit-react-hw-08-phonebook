import { Button, Form, Input, Label } from 'Services/Styles/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'name':
        setName(value);
        return;

      case 'email':
        setEmail(value);
        return;

      case 'password':
        setPassword(value);
        return;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Username </Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => handleChange(e)}
        required
      />
      <Label>Email </Label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={e => handleChange(e)}
        required
      />
      <Label>Password </Label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={e => handleChange(e)}
        required
      />
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;
