import { useAuth } from 'hooks/useAuth';
import { MainNav } from './MainNav';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <MainNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
