import NavBar from "~/components/NavBar";
import {Outlet} from "react-router";

function App() {
    return (
        <>
            <NavBar/>
            <div className="mt-20 h-[calc(100vh-5rem)]">
                <Outlet/>
            </div>
        </>
    )
}

export default App
