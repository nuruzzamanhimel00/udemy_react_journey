import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
//routes
import Root, {loader as rootLoader,  action as rootAction} from './routes/Root.js'
import ErrorPage from './routes/ErrorPage.js'
import Contact, { loader as contactLoader } from './routes/Contact.js'
//edit componet
import EditContact, { action as editContact } from './routes/EditContact.js'
import {action as destroyAction} from './routes/DestroyAction.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        errorElement: <ErrorPage />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editContact,
      },
      {
        path: "contacts/:contactId/destroy",
        action:destroyAction
    
      },
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
