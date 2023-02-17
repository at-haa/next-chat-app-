import { Input } from "../../../Base/Forms/Input"
import { FiSend } from 'react-icons/fi'
import { useContext, useState } from "react"
import { AppContext } from "../../../../context/store"
import { MessageActionTypes, MessageItem } from "../../../../@Types/context/context.type"
interface ChatSenderProps extends React.PropsWithChildren {

}
export const ChatSender: React.FunctionComponent<ChatSenderProps> = ({ children }): JSX.Element => {
    const [text, setText] = useState("")
    const { dispatch } = useContext(AppContext)
    const body: MessageItem = {
        isSentByOwner: false,
        id: Math.floor(Math.random() * 100000000),
        value: text
    }
    const handleOnChange = (e: any) => {
        setText(e.target.value)
    }
    const handleSendMessage = (e: any) => {
        // AXIOS.post(`${ApiRoutes.GetMessages}${messages.roomId}/MessageList`, body).then(res => {
        //     console.log(res)
        //     setText("")
        // }
        // )
        dispatch({ type: MessageActionTypes.Send_new_Messages, payload: body })
        setText("")

    }
    return (
        <div className="p-3 flex">
            <div className="p-2 rounded-full flex justify-center items-center cursor-pointer duration-150 ease-out hover:text-blue-600">
                <FiSend fontSize={30} onClick={handleSendMessage} />
            </div>
            <Input placeholder="پیام خود را بنویسید..." onChange={handleOnChange} value={text} />

        </div>
    )
}