const Header = () => {
    return (
        <div className="bg-[#161410]">
            <div className={`
                flex items-center justify-between 
                w-full md:w-184.25 p-3 mx-auto    
            `}>
                <img src="./logo.png" alt="" />
                <div className={`
                    flex items-center justify-center rounded-sm
                    bg-[#F2DAAC] w-32.5 h-8.75
                    cursor-pointer    
                `}>
                    Entrar
                </div>
            </div>
        </div>
    )
}

export default Header
