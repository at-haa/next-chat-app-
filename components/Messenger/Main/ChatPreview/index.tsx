import {BsChatDots} from "react-icons/bs";
interface ChatPreviewProps extends React.PropsWithChildren {

}
export const ChatPreview: React.FunctionComponent = (props: ChatPreviewProps): JSX.Element => {
    return (
        <div className="flex h-full flex-col justify-center items-center ">
            <BsChatDots size={30}/>
            <h1 className="font-sm font-medium text-center mt-1">
                به پیام‌رسان ما خوش‌ آمدید. لطفا برای شروع یکی از چت‌ها را انتخاب کنید.
            </h1>
        </div>
    )
}
