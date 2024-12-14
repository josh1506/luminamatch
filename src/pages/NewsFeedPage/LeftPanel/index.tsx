import React, {useEffect, useState} from "react";
import LeftPanelItems from "./LeftPanelItems.tsx";
import UserSummary from "./UserSummary.tsx";

interface PanelItem {
    id: number
    icon: string
    label: string
}

const LeftPanel: React.FC = () => {
    const [showMorePanelItems, setShowMorePanelItems] = useState(false)
    const [displayPanelItems, setDisplayPanelItems] = useState<PanelItem[]>([])
    const leftPanelItems = [
        {id: 1, icon: "message-icon", label: "Messages"},
        {id: 2, icon: "saved-icon", label: "Saved"},
        {id: 3, icon: "group-icon", label: "Groups"},
        {id: 4, icon: "likes-icon", label: "Likes"},
        {id: 5, icon: "shortcuts-icon", label: "Shortcuts"},
        {id: 6, icon: "trending-icon", label: "Trending Topics"},
        {id: 7, icon: "explore-icon", label: "Explore"},
        {id: 8, icon: "events-icon", label: "Events"},
        {id: 9, icon: "memories-icon", label: "Memories"},
        {id: 10, icon: "marketplace-icon", label: "Marketplace"},
        {id: 11, icon: "notifications-icon", label: "Notifications"},
        {id: 12, icon: "watch-icon", label: "Watch"},
        {id: 13, icon: "stories-icon", label: "Stories"},
        {id: 14, icon: "bookmarks-icon", label: "Bookmarks"},
        {id: 15, icon: "music-icon", label: "Music"},
        {id: 16, icon: "friends-icon", label: "Friends"},
        {id: 17, icon: "polls-icon", label: "Polls"},
        {id: 18, icon: "news-icon", label: "News Updates"},
        {id: 19, icon: "games-icon", label: "Games"},
        {id: 20, icon: "recommendations-icon", label: "Recommendations"},
        {id: 21, icon: "favorites-icon", label: "Favorites"},
        {id: 22, icon: "help-icon", label: "Community Help"},
        {id: 23, icon: "fitness-icon", label: "Fitness & Wellness"},
        {id: 24, icon: "learn-icon", label: "Learn"},
        {id: 25, icon: "shopping-icon", label: "Shopping"}
    ];

    useEffect(() => {
        setDisplayPanelItems(
            showMorePanelItems ? leftPanelItems : leftPanelItems.slice(0, 10)
        )
    }, [showMorePanelItems])

    return (
        <div className="hidden xl:flex xl:w-80 xl:flex-col gap-1 border-r px-2 py-4 overflow-y-auto">
            <UserSummary/>
            <hr className="my-2"/>
            {displayPanelItems.map(panelItem => (
                <LeftPanelItems key={panelItem.id} icon={panelItem.icon} label={panelItem.label}/>
            ))}
            <button
                className="flex gap-2 bg-gray-300 p-2 rounded-lg items-center hover:bg-gray-200 duration-300 cursor-pointer"
                onClick={() => setShowMorePanelItems(!showMorePanelItems)}
            >
                <div>
                    <div className={"w-10 h-10 bg-red-400 rounded-full"}>
                    </div>
                </div>
                <div>
                    <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-44 text-left">
                        {showMorePanelItems ? "See less" : "See more"}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default LeftPanel
