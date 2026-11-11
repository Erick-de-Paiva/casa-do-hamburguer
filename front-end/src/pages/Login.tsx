import { useState } from "react"
import Input from "../components/Input"
import { Link } from "react-router"
import Button from "../components/Button"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        console.log(data)
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

                <Button title="Login" type="submit" />
                <Link to="/register" className="w-full">
                    <Button title="Não tenho uma conta" variant="outline" />
                </Link>
            </div>
        </form>
    )
}

export default Login
