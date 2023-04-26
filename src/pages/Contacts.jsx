import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
    <div>
      <h1>Contacts page</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
