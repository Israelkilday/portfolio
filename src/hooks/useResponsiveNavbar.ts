
import { useState } from "react"

export const useResponsiveNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleClickButton = () => {
        setShowMenu(!showMenu);
    }

    const handleLinkClick = () => {
        setShowMenu(false);
    }

    return { handleClickButton, handleLinkClick, showMenu };

}