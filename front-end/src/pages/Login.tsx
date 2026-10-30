import { useState } from "react"
import Input from "../components/Input"
import { Link } from "react-router"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <form onSubmit={handleSubmit} className={`
            flex h-screen justify-center items-center
            bg-[#161410]
        `}>
            <div className={`
                flex justify-center items-center flex-col gap-2  
            `}>
                <Link to="/">
                    <img src="./logo.png" alt="" className="mb-4" />
                </Link>
                <Input 
                    placeholder="E-mail" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}  
                />
                <button className={`
                    w-full py-2 rounded-md
                    bg-[#C92A0E]
                    text-white text-sm font-bold     
                    cursor-pointer
                `}>
                    Login
                </button>
            </div>
        </form>
    )
}

export default Login
