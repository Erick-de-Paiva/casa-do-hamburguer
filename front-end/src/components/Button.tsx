type ButtonType = {
    title: string
    variant?: "default" | "outline"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, variant = "default", ...props }: ButtonType ) => {
    const buttonVariant = () => {
        if(variant === "default") {
            return "w-full py-2 rounded-md border-[#C92A0E] border-2 bg-[#C92A0E] text-white text-sm font-bold cursor-pointer"
        } else if(variant === "outline") {
            return "w-full py-2 rounded-md border-[#C92A0E] border-2 bg-white text-[#C92A0E] text-sm font-bold cursor-pointer"
        }
    }        

    return (
        <button {...props} className={buttonVariant()}>
            {title}
        </button>
    )            
}

export default Button
