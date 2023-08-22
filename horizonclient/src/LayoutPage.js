import { Outlet } from "react-router-dom";

export default function LayoutPage() {
    return (
        <div>
            {/* <NavBar /> */}
            <Outlet />
        </div>
    );
}