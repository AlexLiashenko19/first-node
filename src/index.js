const contacts = require("./contacts");
const actions = require("./constants/actions");

const invokeAction = async ({ action, id, name, phone, email }) => {
  switch (action) {
    case actions.show:
      const allMessive = await contacts.listContacts();
      return console.log(allMessive);
    case actions.getContactsById:
      const oneContact = await contacts.getContactsById(id);
      return console.log(oneContact);
    case actions.add:
      const newContact = await contacts.addContactNew({
        action,
        name,
        phone,
        email,
      });
      return console.log(newContact);
    case actions.delete:
      const deleteMessive = await contacts.deleteById(id);
      return console.log(deleteMessive);
    default:
      return console.log("noACtion");
  }
};

invokeAction({
  id: "Ptq9wLt2bvvwXuvboOgjG",
  action: actions.add,
  name: "Allen Raymond",
  phone: "(992) 914-3792",
  email: "nulla.ante@vestibul.co.uk",
});
