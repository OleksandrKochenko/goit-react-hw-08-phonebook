import css from './Form.module.css';

export const NameInput = () => {
  return (
    <label className={css.contact_element}>
      <input
        className={css.contact_input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter full name"
      />
    </label>
  );
};

export const TelInput = () => {
  return (
    <label className={css.contact_element}>
      <input
        className={css.contact_input}
        type="tel"
        name="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
      />
    </label>
  );
};

export const SubmitButton = () => {
  return (
    <button className={css.button} type="submit">
      Add contact
    </button>
  );
};
