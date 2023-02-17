import { useContext } from "react"
import { BiArrowBack } from "react-icons/bi"
import { MessageActionTypes } from "../../../../@Types/context/context.type"
import { AppContext } from "../../../../context/store"
interface ChatHeaderProps extends React.PropsWithChildren {

}
export const ChatHeader: React.FunctionComponent<ChatHeaderProps> = ({ children }): JSX.Element => {
    const { dispatch } = useContext(AppContext)
    const handleExitRoom = () => {
        dispatch({ type: MessageActionTypes.Exit_Room })
    }
    return (
        <div className="flex py-2 pr-3 justify-between items-center">
            <div>
                <h1 className="font-bolc">گروه فرانت‌آموزان کوئرا</h1>
                <h3 className="text-xs">230 نفر، 28 نفر آنلاین</h3>
            </div>
            <div className="ml-2"><BiArrowBack size={30} className="cursor-pointer" onClick={handleExitRoom} /></div>
        </div>
    )
}