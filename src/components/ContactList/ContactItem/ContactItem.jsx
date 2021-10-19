import PropTypes from "prop-types";

import s from "./ContactItem.module.css";

export default function ContactItem({ contact, onDeleteContact }) {
  return (
    <>
      <li className={s.item}>
        <p className={s.message}>
          {contact.name}: {contact.number}
        </p>
        <button
          className={s.btnDelete}
          onClick={(e) => onDeleteContact(e.target.id)}
          id={contact.id}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
