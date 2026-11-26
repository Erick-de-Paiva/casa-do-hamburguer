import { ShoppingCart } from "lucide-react"

const Product = () => {
    return (
        <div className={`
            
        `}>
            <div className="flex gap-2">
                <img 
                    src="./duplo-da-casa.png" 
                    className="h-20.75 w-25 md:h-41.5 md:w-50" 
                />
                <div className="flex flex-col">
                    <p className={`
                        text-sm md:text-lg 
                        uppercase font-bold
                    `}>
                        duplo da casa
                    </p>
                    <p className={`
                        text-xs md:text-sm flex-1  
                        text-[#848484]
                    `}>
                        Descrição do produto 
                    </p>
                    <div className="flex items-center justify-end gap-2">
                        <p className="text-[#F2DAAC]">R$28,90</p>
                        <ShoppingCart 
                            size={18} 
                            className="cursor-pointer" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Product
