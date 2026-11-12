import { useState } from "react"
import Input from "../components/Input"
import { Link } from "react-router"
import Button from "../components/Button"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            if (!email || !password) {
                setError("E-mail e senha são obrigatórios")
                return
            }

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email, password })
            })
    
            if (response.status === 404) {
                setError("Usuário não encontrado")
            }
    
            if (response.status === 400) {
                setError("E-mail e senha são obrigatórios")
            }
    
            if (response.status === 200) {
                setError("")
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {
            console.log(error)
            return
        }
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

                <div className={`
                    flex flex-col gap-2 mb-3    
                `}>
                    <Input
                        type="email" 
                        placeholder="E-mail" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}  
                    />
                    <p className="font-bold text-red-500">
                        {error}
                    </p>
                </div>

                <Button title="Login" type="submit" />
                <Link to="/register" className="w-full">
                    <Button title="Não tenho uma conta" variant="outline" />
                </Link>
            </div>
        </form>
    )
}

export default Login
