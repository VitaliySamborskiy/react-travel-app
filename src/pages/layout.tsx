import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { RouterApp } from '../enum/enumRouter.ts';

const Layout = () => {
    return (
        <>
            <div>
                <h1>Дім</h1>
                <Link to={RouterApp.signUp}>A</Link>
                <Link to={RouterApp.signIn}>B</Link>
            </div>

            <Outlet />
        </>
    );
};

export { Layout };
