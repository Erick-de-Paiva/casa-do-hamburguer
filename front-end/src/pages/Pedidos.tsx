import { useState } from "react"
import { CalendarFold, Clock, ClockExclamationPoint, User } from "lucide-react"

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
                <div className={`
                    p-2 rounded-md
                    bg-[#F2DAAC] text-[#32343E]    
                `}>
                    <div className="flex justify-between">
                        <p className="font-bold">#1</p>
                        <select name="" id="" className="font-bold">
                            <option 
                                value="" 
                                defaultChecked
                                disabled
                            >
                                Pendente
                            </option>
                            <option value="">Retirado</option>
                            <option value="">Cancelado</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-2 gap-2">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <p className="text-sm">Erick</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarFold size={16} />
                            <p className="text-sm">16/11/2026</p>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <p className="text-sm">15:00</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockExclamationPoint size={16} />
                                <p className="text-sm">16:00</p>
                            </div>          
                        </div>

                        <div className="mt-1 h-0.5 w-full bg-[#32343E]"></div>

                        <p className="text-right text-lg font-bold">124,78</p>                        
                    </div>    
                </div>       
            </div>    
        </div>
    )
}

export default Pedidos
