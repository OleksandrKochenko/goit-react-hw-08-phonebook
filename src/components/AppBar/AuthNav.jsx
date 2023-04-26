import { StyledLink } from './StyledLink';
import css from './AppBar.module.css';

export const AuthNav = () => {
  return (
    <div className={css.auth_nav}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};
