import NavBar from "./components/NavBar.tsx";
import NewsFeedPage from "./pages/NewsFeedPage";
import './index.css'

function App() {
    return (
        <>
            <NavBar/>
           {/*<SignInPage/>*/}
           {/* <ForgotPassPage/>*/}
           {/* <SignUpPage/>*/}
           {/* <ProfilePage/>*/}
            <NewsFeedPage/>
        </>
    )
}

export default App
