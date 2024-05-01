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
     console.log('getContact', contacts)
    return contacts
}

export const fakeNetwork = async () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
}

export const createContact = async () => {
    await fakeNetwork()
    let id = Math.random().toString(36).substring(2, 9)
    let contact = { id: id, first: "Himel_" + id, last: "test_" + id, createdAt: Date.now() }
    let constacts = await getContacts();
    constacts.push(contact)
    localStorage.setItem('contacts', JSON.stringify(constacts))
    console.log('createContact')
    return contact;
}