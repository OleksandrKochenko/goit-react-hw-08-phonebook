import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
          placeholder="Enter your password"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
