import { Helmet } from 'react-helmet';
import css from './pages.module.css';
import homeImg from '../img/contact-list.png';

export default function Home() {
  return (
    <div
      className={css.home}
      style={{ padding: '0 40px', textAlign: 'center' }}
    >
      <Helmet>
        <title>React App</title>
      </Helmet>
      <h1>Your contacts list</h1>
      <img src={homeImg} alt="contacts stickers" />
    </div>
  );
}
