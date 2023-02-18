import React, { Children, useContext, useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { AppContext } from '../../context/store'
import { UserActionTypes } from '../../@Types/context/context.type'

interface LayoutProps extends React.PropsWithChildren {

}
export const Layout: React.FunctionComponent<LayoutProps> = ({children}): JSX.Element => {
    const { dispatch,state } = useContext(AppContext);
    // const getToken = localStorage?.getItem("token");
    // const username = localStorage?.getItem("username");    
    // useEffect(() => {        
    //   dispatch({
    //     type: UserActionTypes.Login_success,
    //     payload: {
    //       // username: username,
    //       // token: getToken,
    //     },
    //   });
    // }, []);
    return<div className="bg-gray-300 p-2 flex justify-center items-center flex-col">
        <Header/>
        <div className='w-full h-[calc(100vh-60px)] pt-2'>
        {children}
        </div>
        <Footer />
    </div>
}