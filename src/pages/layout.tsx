// import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header.tsx';
// import { RouterApp } from '../enum/enumRouter.ts';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export { Layout };
