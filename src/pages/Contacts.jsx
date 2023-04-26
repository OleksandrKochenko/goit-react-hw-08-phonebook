import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/contacts/operations';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/Form/Form';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '0 40px' }}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1>Contacts page</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
