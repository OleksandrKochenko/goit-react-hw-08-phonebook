import { useContacts } from 'hooks/useContacts';
import ContactItem from './ContactItem';
import css from './Contacts.module.css';

export default function ContactList() {
  const { filtredContacts } = useContacts();

  return (
    <ul className={css.contacts_list}>
      {filtredContacts.map(item => {
        return (
          <li className={css.contact_item} key={item.id}>
            <ContactItem contact={item} />
          </li>
        );
      })}
    </ul>
  );
}
