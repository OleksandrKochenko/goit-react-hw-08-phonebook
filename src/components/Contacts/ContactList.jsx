import { useContacts } from 'hooks/useContacts';
import ContactItem from './ContactItem';

export default function ContactList() {
  const { filtredContacts } = useContacts();

  return (
    <ul style={{ margin: '0' }}>
      {filtredContacts.map(item => {
        return (
          <li key={item.id}>
            <ContactItem contact={item} />
          </li>
        );
      })}
    </ul>
  );
}
