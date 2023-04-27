import { MdOutlineDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contacts.module.css';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <span className={css.name}>
        <b>name: </b> {contact.name}
      </span>
      <span className={css.devider}>:</span>
      <span className={css.tel}>
        <b>phone: </b> {contact.number}
      </span>
      <button
        className={css.delete_button}
        type="button"
        onClick={handleDelete}
      >
        <MdOutlineDeleteForever size={24} />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};
