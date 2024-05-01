export const getContacts = async () => {
    await fakeNetwork()
    let contacts = localStorage.getItem('contacts')
    if (!contacts) {
        // console.log('no contacts')
        contacts = []
    } else {
        // console.log('else contact')
        contacts = JSON.parse(contacts)
    }
    //  console.log('getContact', contacts)
    return contacts
}

export const fakeNetwork = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}

export const createContact = async () => {
    await fakeNetwork()
    let id = Math.random().toString(36).substring(2, 9)
    let contact = { id: id, first: "Himel_" + id, last: "test_" + id, createdAt: Date.now(),twitter: "himel",avatar: "https://picsum.photos/200/200" }
    let constacts = await getContacts();
    constacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(constacts))
    // console.log('createContact')
    return contact;
}

export const getContact = async (contactId) => {
    await fakeNetwork();
    let contacts = await getContacts();
    let contact = contacts.find((contact) => contact.id === contactId)
    return contact
}

export const updateContact = async (contactId, updates) => {
    await fakeNetwork();
    let contacts = await getContacts();
    let contact = contacts.find((ct) => ct.id === contactId)
    // console.log('uldate contact',contact)
    if (!contact) throw new Error('Somethis is worng!'); 
    //assign data
    Object.assign(contact, updates)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    return contact;
}