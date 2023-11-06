import { forwardRef } from "react"

const Input = forwardRef(
    function Input({label,textarea, ...props}, ref){

        let classes = "p-2 bg-stone-200 rounded-md focus:outline-none focus:bg-stone-300"
    
        let content = <input ref={ref} className={classes} {...props} required autoComplete="off" id={label} />
    
        if(textarea){
            content = <textarea ref={ref} className={classes} {...props} required autoComplete="off" id={label}/>
        }
    
        return (
            <p className="flex flex-col gap-2">
                <label htmlFor={label} className="uppercase text-stone-400" >{label}</label>
                {content}
            </p>
        )
    }
)


export default Input;