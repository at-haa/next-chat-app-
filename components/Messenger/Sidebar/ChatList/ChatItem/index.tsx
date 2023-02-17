import classNames from "classnames"
import { useContext } from "react"
import { MessageActionTypes } from "../../../../../@Types/context/context.type"
import { AXIOS } from "../../../../../config/axios.config"
import { ApiRoutes } from "../../../../../constants/api.route"
import { AppContext } from "../../../../../context/store"

interface ChatItemProps extends React.PropsWithChildren {
    name: string,
    time: string,
    lastMessage: string,
    avatar: string,
    roomId: string,
}
export const ChatItem: React.FunctionComponent<ChatItemProps> = ({ name, time, lastMessage, avatar, roomId }): JSX.Element => {
    const { dispatch, state: { messages } } = useContext(AppContext)
    const handleClickItem = (roomId: string) => {
        AXIOS.get(`${ApiRoutes.GetMessages}${roomId}`).then(
            res => {
                if (res?.data?.length > 0) dispatch({ type: MessageActionTypes.Get_Current_Messages, payload: res?.data[0] })
            }
        ).catch(err => console.log(err)
        )
    }
    return (
        <div className={classNames("flex cursor-pointer ease-in duration-200 hover:bg-blue-300  p-2", messages.roomId === roomId && "bg-blue-300 ")} onClick={() => handleClickItem(roomId)}>
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h6 className="text-sm font-semibold">{new Date(time).toLocaleDateString("fa-ir")}</h6>
                    <h4 className="text-md font-bold ml-2">{name}</h4>
                </div>
                <h5 className="text-xs mt-1">{lastMessage}</h5>
            </div>
            <img src={avatar} alt="" className="rounded-full bg-black w-[50px] h-[50px] overflow-hidden" />
        </div>
    )
}