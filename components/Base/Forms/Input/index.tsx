import classNames from "classnames";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.PropsWithChildren {
    variant?: "primary" | "secondary" | "info";
}
const { BaseTheme, PriamryTheme } = {
    BaseTheme: "bg-gray-200 p-1 w-full rounded-md placeholder:p-1 placeholder:text-sm outline-none",
    PriamryTheme: "bg-red",
}
export const Input: React.FunctionComponent<InputProps> = forwardRef<HTMLInputElement,InputProps>((props, ref): JSX.Element => {
    switch (props.variant) {
        case "primary":
            return <input ref={ref} className={classNames(BaseTheme, PriamryTheme)} {...props} />
        case "secondary":
            return <input ref={ref} className={classNames(BaseTheme)} {...props} />
        case "info":
            return <input ref={ref} className={classNames(BaseTheme)} {...props} />
        default:
            return <input ref={ref} className={classNames(BaseTheme)} {...props} />
    }
})