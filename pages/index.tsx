import { Contacts } from "@/@Types/api.types"
import { ContactActionTypes } from "@/@Types/context/context.type"
import { Layout } from "@/components/Layout"
import { Messenger } from "@/components/Messenger"
import { ChatHeader } from "@/components/Messenger/Main/ChatHeader"
import { ChatMessage } from "@/components/Messenger/Main/ChatMessage"
import { ChatPreview } from "@/components/Messenger/Main/ChatPreview"
import { ChatSender } from "@/components/Messenger/Main/ChatSender"
import { ChatList } from "@/components/Messenger/Sidebar/ChatList"
import { SearchBar } from "@/components/Messenger/Sidebar/SearchBar"
import { AXIOS } from "@/config/axios.config"
import { ApiRoutes } from "@/constants/api.route"
import { AppContext } from "@/context/store"
import { AxiosResponse } from "axios"
import classNames from "classnames"
import { useCallback, useContext, useEffect } from "react"

interface HomePageProps extends React.PropsWithChildren {
  contacts: any[]
}
const HomePage: React.FunctionComponent<HomePageProps> = ({ contacts }): JSX.Element => {
  console.log(contacts);
  const { dispatch, state: { messages } } = useContext(AppContext)


  useEffect(() => {
    dispatch({ type: ContactActionTypes.Get_All_Contacts, payload: contacts })


  }, [dispatch])
  return (
    <Layout>
      <div className="flex bg-white h-full rounded-lg max-w-7xl mx-auto w-full">
        <div className={classNames("flex-1 w-full", !messages.roomId && "hidden sm:flex justify-center")}>
          <div className="flex flex-col h-full">
            {
              messages.roomId ? <>
                <ChatHeader />
                <ChatMessage />
                <ChatSender /></> :
                <ChatPreview />
            }

          </div>
        </div>
        <div className={classNames("sm:flex-[0_0_250px] flex-col flex-[1_1_auto]", messages.roomId && "hidden sm:flex")}>
          <SearchBar />
          <div className="flex flex-col overflow-y-auto h-[calc(100%-48px)] border-[1px]">
            <ChatList state={contacts} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage

export async function getServerSideProps() {
  let contacts;
  try {
    contacts = await AXIOS.get<any, AxiosResponse<Contacts[]>>(ApiRoutes.GetContacts)
    if (contacts.status == 200) {
      return {
        props: {
          contacts: contacts.data || null
        }
      }
    }
  } catch (error) {
    console.log(error);

  }
}
