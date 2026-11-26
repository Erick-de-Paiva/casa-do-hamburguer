import { CalendarFold, Clock, ClockExclamationPoint, User } from "lucide-react"

type CardPedidoType = {
    id: number;
    name: string;
    date: string;
    orderTime: string
    deliveredTime?: string;
    total: number;
}

const cardPedido = ({ id, name, date, orderTime, deliveredTime, total }: CardPedidoType) => {
    return (
        <div className={`
            p-2 rounded-md
            bg-[#F2DAAC] text-[#32343E]    
        `}>
            <div className="flex justify-between">
                <p className="font-bold">#{id}</p>
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
                    <p className="text-sm">{name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarFold size={16} />
                    <p className="text-sm">{date}</p>
                </div>

                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <p className="text-sm">{orderTime}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockExclamationPoint size={16} />
                        <p className="text-sm">
                            {deliveredTime ? deliveredTime : "-"}
                        </p>
                    </div>          
                </div>

                <div className="mt-1 h-0.5 w-full bg-[#32343E]"></div>

                <p className="text-right text-lg font-bold">R${total}</p>                        
            </div>    
        </div>
    )
}

export default cardPedido
