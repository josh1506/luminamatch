import NewsFeedLeftSection from "~/pages/NewsFeedPage/LeftPanel"
import NewsFeedMiddleSection from "~/pages/NewsFeedPage/MiddlePanel"
import NewsFeedRightSection from "~/pages/NewsFeedPage/RightPanel"

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
