import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addContact } from 'redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { NameInput, TelInput, SubmitButton } from './FormElements';
import css from './Form.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { contacts } = useContacts();
  const toastStyle = {
    borderRadius: '10px',
    border: '3px solid #3f51b5',
    background: 'gray',
    color: '#fff',
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.elements.name.value,
      number: form.elements.tel.value,
    };
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? toast(`${data.name} is already in contacts!`, {
          style: toastStyle,
        })
      : dispatch(addContact(data));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3>Create new contact:</h3>
      <div className={css.inputs_field}>
        <NameInput />
        <TelInput />
        <SubmitButton />
      </div>
    </form>
  );
}
