import { useForm } from "react-hook-form";
// import { Button } from "../../components/Base/Button"
import { Input } from "../../components/Base/Forms/Input"
import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constants/api.route";
import { AppContext } from "../../context/store";
import React, { useContext } from "react";
import { UserActionTypes } from "../../@Types/context/context.type";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import nookies from "nookies";
import { Layout } from "@/components/Layout";

interface LoginProps extends React.PropsWithChildren {

}
const Login: React.FunctionComponent = (props: LoginProps): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter()
    const {
        state: { user },
        dispatch,
    } = useContext(AppContext);
    const handleOnSubmit = (data: any) => {
        AXIOS.get(ApiRoutes.Login + `?username=${data.username}&password=${data.password}`).then(res => {
            dispatch({
                type: UserActionTypes.Login_success, payload: {
                    username: res.data.username,
                    token: res.data.accessToken,
                },
            })
            AXIOS.defaults.headers.common.Authorization = 'Bearer' + res.data.accessToken
            router.push("/")
            setCookie(null, 'token', res.data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            setCookie(null, 'username', res.data.username, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })

        }
        )
    }
    return (
        <Layout>
            <div className="flex justify-center items-center h-full">
                <form onSubmit={handleSubmit(handleOnSubmit)} className="py-5 px-10 border-[2px] border-gray-500 [&_input]:mt-5 [&_button]:mt-5 rounded-lg">
                    <h1 className="text-center text-lg font-bold">ورود به پیام‌رسان</h1>
                    <Input {...register("username", { required: true })} placeholder="نام‌کاربری" />
                    <Input {...register("password", { required: true })} placeholder="رمز عبور" type="password" />
                    <Input value="ورود" type="submit" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full" />
                </form>
            </div>
        </Layout>
    )
}

export default Login

export async function getServerSideProps(ctx: any) {

    const cookies = nookies.get(ctx)
    console.log(cookies);
    if (cookies.token) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        };
    }
    return {
        props: {}
    }
}
