import { useState } from "react"
import Product from "../components/Product"

const Home = () => {
    const [category, setCategory] = useState("Hambúrguer")

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
            <div className="flex gap-2 my-1 md:my-3">
                <div 
                    className={getCategoryClass("Hambúrguer")}
                    onClick={() => handleChangeCategory("Hambúrguer")}
                >
                    Hambúrguer
                </div>
                <div
                    className={getCategoryClass("Bebidas")}
                    onClick={() => handleChangeCategory("Bebidas")}
                >
                    Bebidas
                </div>
                <div
                    className={getCategoryClass("Porções")}
                    onClick={() => handleChangeCategory("Porções")}
                >
                    Porções
                </div>
            </div>

            <h1 className={`
                mt-2 mb-2 md:mt-4 md:mb-4 
                text-[#F2DAAC] uppercase font-bold 
            `}>
                {category}
            </h1>
            <div className="flex flex-col gap-2 md:gap-3">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>       
        </div>
    )
}

export default Home
