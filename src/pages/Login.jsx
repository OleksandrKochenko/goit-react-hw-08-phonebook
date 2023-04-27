import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div style={{ padding: '0 40px', textAlign: 'center' }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}
