import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <label className={css.login_element}>
        <span>Email:</span>
        <input
          className={css.login_input}
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
      </label>
      <label className={css.login_element}>
        Password:
        <input
          className={css.login_input}
          type="password"
          placeholder="Enter your password"
          name="password"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Login
      </button>
    </form>
  );
};
