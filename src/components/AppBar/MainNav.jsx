import { StyledLink } from './StyledLink';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
