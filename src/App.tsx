import MessagePage from "./pages/MessagePage";
import NavBar from "./components/NavBar.tsx";
import './assets/styles/index.css'

function App() {
    return (
        <>
            <NavBar/>
            <div className="mt-20 h-[calc(100vh-5rem)]">
                {/*<SignInPage/>*/}
                {/* <ForgotPassPage/>*/}
                {/* <SignUpPage/>*/}
                {/* <ProfilePage/>*/}
                {/* <NewsFeedPage/>*/}
                <MessagePage/>
            </div>
        </>
    )
}

export default App
