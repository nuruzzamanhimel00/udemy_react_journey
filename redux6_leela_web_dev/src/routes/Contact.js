import { Form, useLoaderData } from "react-router-dom";
import {getContact} from './contacts.js'

export async function loader({params}) {
  const contact = await getContact(params.contactId);
  // console.log('contact loader=',contact)
  return contact
  // return { contact };
}

export const action = (data) => {
  console.log(data);
}

export default function Contact() {
  const contactDetails= useLoaderData();

  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://picsum.photos/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
    ...contactDetails
  };

  const deleteHandler = (event) => {
  
    // if (!confirm("Want to delete?")) {
    //   event.preventDefault();
    // }
  }

  return (
    <div id="contact">
      <div>
        
        <img  alt={contact.avatar}  src={contact.avatar || null}/>
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a    href={`https://twitter.com/${contact.twitter}`}  target="_blank" rel="noopener noreferrer">
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy" onSubmit={deleteHandler}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
    );
    
}


function Favorite({ contact }) {
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    return (
      <Form method="post">
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </Form>
    );
  }
