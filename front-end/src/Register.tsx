import { useState } from "react"
import Input from "./components/Input"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [cep, setCep] = useState("")

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={`
            flex h-screen justify-center items-center
            bg-[#161410]
        `}>
            <div className={`
                flex justify-center items-center flex-col gap-2  
            `}>
                <img src="./logo.png" alt="" className="mb-4" />
                <Input 
                    placeholder="Nome" 
                    onChange={(e) => setName(e.target.value)} 
                />
                <Input 
                    placeholder="E-mail"
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                    placeholder="Senha"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Input 
                    placeholder="Confirme sua Senha"
                    type="password" 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <Input 
                    placeholder="CEP"
                    type="text" 
                    onChange={(e) => setCep(e.target.value)} 
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

export default Register
