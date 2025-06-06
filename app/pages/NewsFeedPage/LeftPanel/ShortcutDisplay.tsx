import React from "react";
import LeftPanelItems from "~/pages/NewsFeedPage/LeftPanel/LeftPanelItems";
import type {ShortcutDisplayProps} from "~/interfaces/pages/NewsFeedPage/LeftPanel/ShortcutDisplayProps";

const ShortcutDisplay: React.FC<ShortcutDisplayProps> = (
    {
        displayShortcutIcon,
        leftPanelItems,
        displayPanelItems,
        showMorePanelItems,
        setShowMorePanelItems
    }
) => {
    if (displayShortcutIcon) {
        return (
            <div className="flex flex-wrap gap-0.5">
                {leftPanelItems.map((panelItem) => (
                    <a className="text-center overflow-hidden cursor-pointer hover:bg-stone-600 p-1 duration-300 rounded-lg">
                        <div className="h-16 w-16 bg-purple-600 rounded-full mx-auto flex justify-center items-center">
                            <span>
                                Icon
                            </span>
                        </div>
                        <span className="block overflow-hidden text-ellipsis whitespace-nowrap w-16 mx-auto text-sm mt-0.5">
                            {panelItem.label}
                        </span>
                    </a>
                ))}
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-1">
                {displayPanelItems.map((panelItem, index) => (
                    <LeftPanelItems key={index} icon={panelItem.icon} label={panelItem.label}/>
                ))}
                <button
                    className="flex gap-2 bg-stone-600 p-2 rounded-lg items-center hover:bg-stone-500 duration-300 cursor-pointer"
                    onClick={() => setShowMorePanelItems(!showMorePanelItems)}
                >
                    <div>
                        <div className={"w-10 h-10 bg-purple-600 rounded-full"}>
                        </div>
                    </div>
                    <div>
                        <div
                            className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-44 text-left">
                            {showMorePanelItems ? "See less" : "See more"}
                        </div>
                    </div>
                </button>
            </div>
        )
    }
}

export default ShortcutDisplay
