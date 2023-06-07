// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import MainContext from './contexts';

// Dialogs
import MessageDialog from './dialogs/message-dialog';
import NoEthereumDialog from './dialogs/no-ethereum-dialog';

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
      <NoEthereumDialog/>
      <MessageDialog/>

    </MainContext>
  </React.StrictMode>,
)
