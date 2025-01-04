import NewsFeedLeftSection from "./LeftPanel";
import NewsFeedMiddleSection from "./MiddlePanel";
import NewsFeedRightSection from "./RightPanel";

const NewsFeedPage = () => {
    return (
        <div className="flex h-full">
            <NewsFeedLeftSection/>
            <NewsFeedMiddleSection/>
            <NewsFeedRightSection/>
        </div>
    )
}

export default NewsFeedPage
