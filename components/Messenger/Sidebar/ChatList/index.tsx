import { AppContext } from "@/context/store"
import { useContext } from "react"
import { ChatItem } from "./ChatItem"

interface ChatListProps extends React.PropsWithChildren {
    state: any
}
export const ChatList: React.FunctionComponent<ChatListProps> = ({ children, state }): JSX.Element => {
    const { state: { contacts: { searchlist } } } = useContext(AppContext)

    return (
        searchlist.length === 0 ? <>
            {
                state?.map((item: any) => <ChatItem
                    key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId} />)
            }
        </> :
            <>
                {
                    searchlist?.map((item: any) => <ChatItem
                        key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId} />)
                }
            </>


    )

}