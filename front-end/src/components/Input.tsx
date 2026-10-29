const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input 
            {...props} 
            className={`
                px-2 py-2 w-87.5 rounded-md
                bg-white outline-none  
                text-[#32343E] text-sm placeholder-[#32343E] 
            `}
        />
    )
}

export default Input
