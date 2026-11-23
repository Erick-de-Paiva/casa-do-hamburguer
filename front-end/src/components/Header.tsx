import { Link } from "react-router"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className="bg-[#161410]">
            <div className={`
                flex items-center justify-between 
                w-full md:w-184.25 p-3 mx-auto    
            `}>
                <img src="./logo.png" alt="" />

                <Link to="/login">
                    {user ? (
                        <p className="text-white">Olá, {user.name}</p>
                    ) : (
                        <div className={`
                            flex items-center justify-center rounded-sm
                            bg-[#F2DAAC] w-32.5 h-8.75
                            cursor-pointer    
                        `}>
                            Entrar
                        </div>
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Header
