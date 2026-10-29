import Input from "./components/Input"

function App() {
  return (
    <p className="flex gap-2 bg-black p-6">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password" />
    </p>
  )
}

export default App
