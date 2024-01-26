import { NavLink } from "react-router-dom";


export default function NavItem({title, target}) {
    return (
        <div id="navitem" className="w-24 text-white font-sulphur text-center h-8 mr-12 text-lg inline-block">
           <li><NavLink to={target} className="cursor-pointer">{title}</NavLink></li> 
        </div>
    )
}
