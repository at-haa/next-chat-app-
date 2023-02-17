import classNames from "classnames"
import { useContext, useState } from "react"
import { AppContext } from "../../../context/store"
import { ChatHeader } from "../Main/ChatHeader"
import { ChatMessage } from "../Main/ChatMessage"
import { ChatPreview } from "../Main/ChatPreview"
import { ChatSender } from "../Main/ChatSender"
import { ChatList } from "../Sidebar/ChatList"
import { SearchBar } from "../Sidebar/SearchBar"

interface MessengerLayoutProps extends React.PropsWithChildren {

}
export const MessengerLayout: React.FunctionComponent<MessengerLayoutProps> = ({ children }): JSX.Element => {
    const messages = useContext(AppContext).state.messages
    return (
        <div className="flex bg-white h-full rounded-lg max-w-7xl mx-auto w-full">
            <div className={classNames("flex-1 w-full", !messages.roomId && "hidden sm:flex justify-center")}>
                <div className="flex flex-col h-full">
                    {
                        messages.roomId ? <>
                            <ChatHeader />
                            <ChatMessage />
                            <ChatSender /></> :
                            <ChatPreview />
                    }

                </div>
            </div>
            <div className={classNames("sm:flex-[0_0_250px] flex-col flex-[1_1_auto]", messages.roomId && "hidden sm:flex")}>
                <SearchBar />
                <div className="flex flex-col overflow-y-auto h-[calc(100%-48px)] border-[1px]">
                    {/* <ChatList /> */}
                </div>
            </div>
        </div>
    )
}
