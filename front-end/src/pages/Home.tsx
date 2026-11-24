import { Link } from "react-router"

const Home = () => {
    return (
        <div className={`
            mx-auto w-full px-3 md:w-184.25 md:px-0 
            text-white
        `}>
            <div className="flex gap-2 py-4">
                <div className={`
                    flex justify-center items-center
                    h-7 w-24 md:h-9 md:w-32 rounded-md
                    text-sm md:text-md font-bold cursor-pointer
                    border border-[#F2DAAC]
                    bg-[#F2DAAC] text-[#161410]  
                `}>
                    Hambúrguer
                </div>
                <div className={`
                    flex justify-center items-center
                    h-7 w-24 md:h-9 md:w-32 rounded-md
                    text-sm md:text-md font-bold cursor-pointer
                    border border-[#F2DAAC]
                    bg-[#161410] text-[#F2DAAC] 
                    hover:bg-[#F2DAAC] hover:text-[#161410]  
                `}>
                    Bebidas
                </div>
                <div className={`
                    flex justify-center items-center
                    h-7 w-24 md:h-9 md:w-32 rounded-md
                    text-sm md:text-md font-bold cursor-pointer
                    border border-[#F2DAAC]
                    bg-[#161410] text-[#F2DAAC]
                    hover:bg-[#F2DAAC] hover:text-[#161410]    
                `}>
                    Porções
                </div>
            </div>       
        </div>

    )
}

export default Home
