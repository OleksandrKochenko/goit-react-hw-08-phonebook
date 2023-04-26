import { useAuth } from 'hooks/useAuth';
import { MainNav } from './MainNav';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <MainNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
