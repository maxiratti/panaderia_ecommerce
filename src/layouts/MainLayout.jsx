import { Header } from "../components/Header/Header";

export const MainLayout = () => {
    return (
         <>
            <Header/>
            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
};