import { Link } from "react-router"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { LogOut, ShoppingCart, Box, LayoutGrid, Plus } from "lucide-react"

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className="bg-[#161410]">
            <div className={`
                flex items-center justify-between 
                w-full md:w-184.25 p-3 mx-auto    
            `}>
                <img src="./logo.png" alt="" />

                {user ? (
                    <div className="flex gap-8 items-center text-white">
                        <div className={`
                            flex gap-2 items-center 
                            text-[#F2DAAC]
                        `}>
                            <div className={`
                                flex justify-center items-center
                                h-8.75 w-7.75 rounded-md border
                                cursor-pointer    
                            `}>
                                <Box size={18} />
                            </div>
                            <div className={`
                                flex justify-center items-center
                                h-8.75 w-7.75 rounded-md border
                                cursor-pointer    
                            `}>
                                <LayoutGrid size={18} />
                            </div>
                            <div className={`
                                flex justify-center items-center
                                h-8.75 w-7.75 rounded-md border
                                cursor-pointer    
                            `}>
                                <Plus size={18} />
                            </div>
                        </div>

                        <div className="relative cursor-pointer">
                            <ShoppingCart size={20} />
                            <p className={`
                                flex justify-center items-center
                                rounded-full h-5 w-5 
                                bg-[#F2DAAC] text-[#161410]
                                absolute -top-4 -right-4
                            `}>1</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p>{user.name}</p> 
                            <LogOut size={20} className="cursor-pointer" />
                        </div>
                    </div>
                ) : (
                    <Link to="/login">
                        <div className={`
                            flex items-center justify-center rounded-sm
                            bg-[#F2DAAC] w-32.5 h-8.75
                            cursor-pointer    
                        `}>
                            Entrar
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header
