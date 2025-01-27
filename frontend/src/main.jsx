// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Home,
  Contact,
  About,
  PageNotFound,
  Login,
  Signup,
  Collection,
  Cart,
  New,
  Men,
  Women
} from './pages/index.js';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';


// Define the router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Define child routes */}
      <Route index element={<Home />} /> {/* Default route */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} /> 
      <Route path="new" element={<New />} /> 
      <Route path="women" element={<Women />} /> 
      <Route path="men" element={<Men />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="collection" element={<Collection />} /> 
      <Route path="cart" element={<Cart />} /> 
      <Route path="*" element={<PageNotFound />} /> 
       
    </Route>
  )
);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
