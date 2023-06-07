// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import MainContext from './contexts';

// Hooks
import useHandleContract from './hooks/use-handle-contract';

// Screens
import HomeScreen from './screens/home';
import ItemDetailsScreen from './screens/item-details';
import MyShoppingsScreen from './screens/my-shoppings';

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen/> },
  { path: "/item-details/:id", element: <ItemDetailsScreen/> },
  { path: "/my-shoppings", element: <MyShoppingsScreen/> },
]);

function MainContainer () {
  useHandleContract();
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainContext>
      <MainContainer/>
    </MainContext>
  </React.StrictMode>,
)
