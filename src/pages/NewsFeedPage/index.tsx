import NewsFeedLeftSection from "./LeftPanel";
import NewsFeedMiddleSection from "./MiddlePanel";
import NewsFeedRightSection from "./RightPanel";

const NewsFeedPage = () => {
    return (
        <div className="flex mt-12 h-[94.5vh]">
            <NewsFeedLeftSection/>
            <NewsFeedMiddleSection/>
            <NewsFeedRightSection/>
        </div>
    )
}

export default NewsFeedPage
