import NewsFeedLeftSection from "./LeftPanel";
import NewsFeedMiddleSection from "./MiddlePanel";
import NewsFeedRightSection from "./RightPanel";

const NewsFeedPage = () => {
    return (
        <div className="flex mt-20 h-[calc(100vh-5rem)]">
            <NewsFeedLeftSection/>
            <NewsFeedMiddleSection/>
            <NewsFeedRightSection/>
        </div>
    )
}

export default NewsFeedPage
