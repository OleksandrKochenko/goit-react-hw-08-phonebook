import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegistrationForm.module.css';

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
    <form className={css.register_form} onSubmit={handleSubmit}>
      <label className={css.register_element}>
        <span>Username:</span>
        <input
          className={css.register_input}
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </label>
      <label className={css.register_element}>
        <span>Email:</span>
        <input
          className={css.register_input}
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
      </label>
      <label className={css.register_element}>
        <span>Password:</span>
        <input
          className={css.register_input}
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
          placeholder="Enter your password"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
