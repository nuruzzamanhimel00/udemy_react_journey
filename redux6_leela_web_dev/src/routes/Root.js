import React from 'react'
import './Root.css'
import { Outlet, useLoaderData, Form, NavLink } from "react-router-dom";

import { getContacts, createContact } from '../routes/contacts'

export const loader = async () => {
  let contacts = await getContacts()
  // console.log('root loader ')
  return contacts
}
export async function action() {
  const contact = await createContact();
  // console.log('root action')
  return contact;
}
export default function Root() {
  const contacts= useLoaderData();
  // console.log('root function',contacts)

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length > 0 ? 
                <ul>
                      
                  {
                    contacts.map((contact) =>
                      <li key={contact.id}>
                        <NavLink to={`/contacts/${contact.id}`}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                            {contact.first} {contact.last}
                        </NavLink>
                      </li>
                    )
                  }
                    
                    
              </ul>
              
            
            : <p>No contacts</p>}
          
          </nav>
        </div>
        <div id="detail">
      
                <Outlet />
            </div>
      </>
    );
  }