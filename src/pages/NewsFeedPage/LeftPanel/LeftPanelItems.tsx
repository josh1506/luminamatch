import React from "react";
import {LeftPanelItemProps} from "../../../interfaces/pages/NewsFeedPage/LeftPanel/LeftPanelItemsProps.tsx";

const LeftPanelItems: React.FC<LeftPanelItemProps> = ({icon, label}) => {
    return (
        <div className="flex gap-2 bg-gray-300 p-2 rounded-lg items-center hover:bg-gray-200 duration-300 cursor-pointer">
            <div>
                <div className={`w-10 h-10 bg-blue-400 rounded-full ${icon}`}/>
            </div>
            <div>
                <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-44">
                    {label}
                </div>
            </div>
        </div>
    )
}

export default LeftPanelItems
