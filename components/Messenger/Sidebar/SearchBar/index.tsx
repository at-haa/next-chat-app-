import { useContext } from "react"
import { ContactActionTypes } from "../../../../@Types/context/context.type"
import { AppContext } from "../../../../context/store"
import { Input } from "../../../Base/Forms/Input"

interface SearchBarProps extends React.PropsWithChildren {

}
export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ children }): JSX.Element => {
    const dispatch = useContext(AppContext).dispatch
    const handleFilter = (e: any) => {
        dispatch({ type: ContactActionTypes.Search_All_Contacts, payload: e.target.value })
    }
    return (
        <div className="p-2 border-[1px] border-gray-100">
            <Input placeholder="جستجو ..." onChange={handleFilter} />
        </div>
    )
}