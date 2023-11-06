export default function Button ({children,className,...props}){

    let classes;
    if(className){
        classes = className;
    } else {
        classes = "hover:bg-sky-100 bg-sky-500 hover:text-sky-700 text-stone-900 p-2 rounded-md "
    }

    return (
    <button {...props} className={classes}>
    {children}
    </button>)
}