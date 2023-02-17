import { useContext } from "react"
import { AiFillDelete } from "react-icons/ai"
import { MessageActionTypes } from "../../../../../@Types/context/context.type"
import { AppContext } from "../../../../../context/store"

interface MessageItemProps extends React.PropsWithChildren {
    type?: "sender" | "reciever",
    text: string,
    id:number
}
export const MessageItem: React.FunctionComponent<MessageItemProps> = ({ type = "sender", text,id }): JSX.Element => {
    const { dispatch } = useContext(AppContext)
    const handleDeleteMessage = (id: number) => {
        dispatch({ type: MessageActionTypes.Remove_Message, payload: id })
    }
    switch (type) {
        case "sender":
            return (
                <li className="flex">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" className=" rounded-full w-[50px] h-[50px] overflow-hidden" />
                    <div className=" p-2 w-[250px] rounded-lg shadow-md mr-2 bg-white">
                        <div className="p-1  flex justify-between items-center">
                            <h4 className="font-bold text-md">آتوسا حواصلی</h4>
                            <AiFillDelete className="cursor-pointer" onClick={()=>handleDeleteMessage(id)} />
                        </div>
                        <p className="text-sm">{text}</p>
                    </div>
                </li>
            )

        case "reciever":
            return (
                <li className="flex justify-end">
                    <div className=" p-2 w-[250px] rounded-lg shadow-md ml-2 bg-blue-500">
                        <div className="p-1  flex justify-between items-center">
                            <h4 className="font-bold text-md">آتوسا حواصلی</h4>
                            <AiFillDelete className="cursor-pointer" onClick={()=>handleDeleteMessage(id)} />
                        </div>
                        <p className="text-sm">{text}</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" className=" rounded-full w-[50px] h-[50px] overflow-hidden" />
                </li>
            )
    }

}