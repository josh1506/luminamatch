import React from "react";
import {LeftPanelItemProps} from "./LeftPanelItemsProps.tsx";

export interface ShortcutDisplayProps {
    displayShortcutIcon: boolean;
    leftPanelItems: LeftPanelItemProps[];
    displayPanelItems: LeftPanelItemProps[];
    showMorePanelItems: boolean;
    setShowMorePanelItems: React.Dispatch<React.SetStateAction<boolean>>;
}
