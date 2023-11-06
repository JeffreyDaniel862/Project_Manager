import Logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NavBar({onSwitch, selected}) {
    return (
        <nav className="flex gap-4 justify-between items-center w-full h-10 py-8 px-4 bg-sky-800">
            <div className="flex gap-4 my-4 items-center">
            <img src={Logo} alt="NotePad Logo Image" className="sm:w-4 w-8 md:w-16 h-16 object-contain"/>
            <h2 className="uppercase text-stone-900 text-base font-bold md:text-xl sm:text-xs">My Projects</h2>
            </div>
            <div>
                <ul>
                    <li><Button onClick={onSwitch} >{selected? "See Projects" : "+ Add Project"}</Button></li>
                </ul>
            </div>
        </nav>
    )
}