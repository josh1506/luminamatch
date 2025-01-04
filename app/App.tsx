import MessagePage from "./pages/MessagePage";
import NavBar from "~/components/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <div className="mt-20 h-[calc(100vh-5rem)]">
                {/* <ProfilePage/>*/}
                {/* <NewsFeedPage/>*/}
                <MessagePage/>
            </div>
        </>
    )
}

export default App
