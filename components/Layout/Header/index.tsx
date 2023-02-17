interface HeaderProps extends React.PropsWithChildren {

}
export const Header: React.FunctionComponent = (props: HeaderProps): JSX.Element => {
    return (
        <div className="self-start font-bold">پیام‌رسان تلگرام</div>
    )
}
