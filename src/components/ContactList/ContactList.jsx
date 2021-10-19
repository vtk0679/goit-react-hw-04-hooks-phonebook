import PropTypes from "prop-types";

import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
