import React, { useState, useEffect } from 'react'

function DesktopMenu(props) {

    const [isFullScreen, setIsFullScreen] = useState(false)

    useEffect(() => {
        document.addEventListener('fullscreenchange', checkFullScreen);
        return () => {
            document.removeEventListener('fullscreenchange', checkFullScreen);
        };
    }, [])


    const openTerminal = () => {
        props.openApp("terminal");
    }

    const openSettings = () => {
        props.openApp("settings");
    }

    const checkFullScreen = () => {
        if (document.fullscreenElement) {
            setIsFullScreen(true)
        } else {
            setIsFullScreen(false)
        }
    }

    const goFullScreen = () => {
        // make website full screen
        try {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen()
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div id="desktop-menu" className={(props.active ? " block " : " hidden ") + "flex flex-col gap-1 cursor-default w-52 context-menu-bg border text-left font-light border-gray-900 rounded text-white py-2 absolute z-50 text-sm"}>
            <div onClick={props.addNewFolder} className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded-md">
                <span className="ml-3">New Folder</span>
            </div>
            <Divider />
            <div className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 text-gray-400 rounded-md">
                <span className="ml-3">Paste</span>
            </div>
            <Divider />
            <div className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 text-gray-400 rounded-md">
                <span className="ml-3">Show Desktop in Files</span>
            </div>
            <div onClick={openTerminal} className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded-md">
                <span className="ml-3">Open in Terminal</span>
            </div>
            <Divider />
            <div onClick={openSettings} className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded-md">
                <span className="ml-3">Change Background...</span>
            </div>
            <Divider />
            <div className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 text-gray-400 rounded-md">
                <span className="ml-3">Display Settings</span>
            </div>
            <div onClick={openSettings} className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded-md">
                <span className="ml-3">Settings</span>
            </div>
            <Divider />
            <div onClick={goFullScreen} className="py-1 mx-1 hover:bg-ub-warm-grey hover:bg-opacity-20 rounded-md">
                <span className="ml-3">{isFullScreen ? "Exit" : "Enter"} Full Screen</span>
            </div>
        </div>
    )
}

function Divider() {
    return (
        <div className="flex justify-center w-full">
            <div className=" border-t border-gray-500 w-4/5"></div>
        </div>
    );
}


export default DesktopMenu
