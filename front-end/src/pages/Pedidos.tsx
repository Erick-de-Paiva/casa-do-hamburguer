import { useState } from "react"
import CardPedido from "../components/CardPedido"

const Pedidos = () => {
    const [category, setCategory] = useState("Pendente")

    const handleChangeCategory = (newCategory: string) => {
        setCategory(newCategory)
    }

    const getCategoryClass = (categoryName: string) => {
        const elementoSelecionado = 
            "flex justify-center items-center h-7 w-24 md:h-9 md:w-32 rounded-md text-sm md:text-md font-bold cursor-pointer border border-[#F2DAAC] bg-[#F2DAAC] text-[#161410]"
        const elementoNaoSelecionado = 
            "flex justify-center items-center h-7 w-24 md:h-9 md:w-32 rounded-md text-sm md:text-md font-bold cursor-pointer border border-[#F2DAAC] bg-[#161410] text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410]"

        if (category === categoryName) {
            return elementoSelecionado
        } else {
            return elementoNaoSelecionado
        }    
    }  

    return (
        <div className={`
            mx-auto w-full px-3 md:w-184.25 md:px-0 
            text-white
        `}>
            <div className="flex gap-2 mt-1 mb-3 md:my-3">
                <div 
                    className={getCategoryClass("Pendentes")}
                    onClick={() => handleChangeCategory("Pendentes")}
                >
                    Pendentes
                </div>
                <div
                    className={getCategoryClass("Retirados")}
                    onClick={() => handleChangeCategory("Retirados")}
                >
                    Retirados
                </div>
                <div
                    className={getCategoryClass("Cancelados")}
                    onClick={() => handleChangeCategory("Cancelados")}
                >
                    Cancelados
                </div>
            </div>   

            <div className="grid grid-cols-3 gap-3">
                <CardPedido 
                    id={7} 
                    name="Erick" 
                    date="26/11/2026" 
                    orderTime="16:00"
                    deliveredTime="17:00"
                    total={666.66}
                />      
            </div>    
        </div>
    )
}

export default Pedidos
