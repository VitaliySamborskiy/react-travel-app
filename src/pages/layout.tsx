import { Outlet } from 'react-router-dom';
import { Header } from '../components/header.tsx';
import { Footer } from '../components/footer.tsx';

const Layout = () => {
    return (
        <main className="app__wrapper">
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
};

export { Layout };
