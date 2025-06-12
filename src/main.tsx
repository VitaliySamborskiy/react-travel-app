import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterApp } from './enum/enumRouter.ts';

import { Layout } from './pages/layout.tsx';
import { SingIn } from './pages/singIn.tsx';
import { SingUp } from './pages/singUp.tsx';

import './style.css';

const routers = createBrowserRouter([
    {
        path: RouterApp.mainPage,
        element: <Layout />,
        children: [
            {
                element: <SingIn />,
                path: RouterApp.signIn,
            },
            {
                element: <SingUp />,
                path: RouterApp.signUp,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routers} />
    </StrictMode>
);
