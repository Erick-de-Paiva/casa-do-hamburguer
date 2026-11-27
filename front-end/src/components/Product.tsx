import { ShoppingCart } from "lucide-react"
import type { ProductType } from "../types/Product"
import { formatterPrice } from "../utils/formatterPrice"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"

const Product = ({ 
    id, 
    name, 
    description, 
    price, 
    img, 
    category,
    setProducts 
}: ProductType) => {
    const { user } = useContext(UserContext)

    const handleDeleteProduct = async (id: string) => {
        try {
            if (!id) {
                return
            }

            const response = await fetch(`http://localhost:3000/delete-product/${id}`, {
                method: "DELETE",
                credentials: "include"
            })

            if (!response.ok) {
                return
            }

            getProduct()
        } catch (error) {
            console.log(error)
            return
        }
    }

    const getProduct = async () => {
        try {
            const response = await fetch("http://localhost:3000/get-products")

            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.log(error)
            return
        }
    }

    return (
        <div>
            <div className="flex gap-2">
                <img 
                    src={`./${img}`}
                    className="h-20.75 w-25 md:h-41.5 md:w-50" 
                />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                        <p className={`
                            text-sm md:text-lg 
                            uppercase font-bold
                        `}>
                            {name}
                        </p>
                        {user?.admin && (
                            <div 
                                onClick={() => handleDeleteProduct(id)} 
                                className={`
                                    flex items-center rounded-md border px-1
                                    text-red-500 text-xs uppercase
                                    cursor-pointer  
                                `}
                            >
                                Deletar
                            </div>
                        )}
                    </div>
                    <p className={`
                        text-xs md:text-sm flex-1  
                        text-[#848484]
                    `}>
                        {description}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                        <p className="text-[#F2DAAC]">
                            {formatterPrice(price)}
                        </p>
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
