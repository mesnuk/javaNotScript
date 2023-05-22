import {Header} from "./components/common/Header";
import {Outlet} from "react-router";

export const Layout = () => {

    return <>
        <Header />
        <Outlet />
    </>
}