import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegistrationForm/RegistrationForm';

export default function Register() {
  return (
    <div style={{ padding: '0 40px' }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h1>Registration Page</h1>
      <RegisterForm />
    </div>
  );
}
