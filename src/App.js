import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }
    const newContact = { name, number, id: nanoid() };
    setContacts([newContact, ...contacts]);
  };

  const getFilteredContacts = () =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

  const onDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className="App">
        <h1>Phonebook</h1>
        <Form onFormSubmit={onFormSubmit}></Form>
      </div>

      <h2>Contacts</h2>

      <Filter
        filter={filter}
        onFilterChange={(value) => setFilter(value.toLowerCase())}
      />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}
