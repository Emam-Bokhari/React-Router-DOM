// loaders/contactsLoader.js

import { getContacts } from "../contacts";

export async function getContactsLoader() {
    const contacts = await getContacts(); // Fetch all contacts
    return { contacts };
}
