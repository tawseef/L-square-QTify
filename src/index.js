import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage/HomePage';


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [{path: "/", element:<HomePage />}]
  }
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root');

// root.render(
//   <RouterProvider router={router}>
//     <React.StrictMode> 
//       <App />
//     </React.StrictMode>
//   </RouterProvider>
// );

render(
  <RouterProvider router={router}>
   <React.StrictMode>
     <App />
   </React.StrictMode>
  </RouterProvider>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
