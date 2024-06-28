import React, {useEffect, useState} from 'react'
import './Root.css'
import { Outlet, useLoaderData, Form, NavLink, redirect, useNavigation } from "react-router-dom";

import { getContacts, createContact } from '../routes/contacts'

export const loader = async ({request}) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  // console.log('root action',request, q)
  let contacts = await getContacts(q)
  // console.log('root loader ', request, q)
  return {
    contacts, q
  }
}
export async function action() {
  const contact = await createContact();

  return redirect(`/contacts/${contact.id}/edit`);
  // return contact;
}
export default function Root() {
  const { contacts, q } = useLoaderData();

  const navigation = useNavigation();
  const [query, setQuery] = useState(false)

  useEffect(() => {
    setQuery(q)
  }, [q])
  
  const changeHandler = (event) => {

    setQuery(event.target.value)
  }

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form  id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                value={query}
                onChange={changeHandler}
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
            </Form>
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
        <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }

        >
      
                <Outlet />
            </div>
      </>
    );
  }