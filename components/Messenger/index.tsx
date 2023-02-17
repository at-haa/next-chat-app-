import { MessengerLayout } from "./Layout"

interface MessengerProps extends React.PropsWithChildren {

}
export const Messenger: React.FunctionComponent = (props: MessengerProps): JSX.Element => {
    return (
        <MessengerLayout/>
    )
}
