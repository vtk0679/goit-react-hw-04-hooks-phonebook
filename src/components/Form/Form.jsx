import { useState } from "react";

import s from "./Form.module.css";

export default function Form({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={onSubmit}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <p> Tel</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        required
      />
      <button className={s.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
}
