import logo from "../../images/logo.svg"
import iconMenu from "../../images/menu-outline.svg"

function Nav() {
    return ( 
        <>
        <nav className="flex justify-between">
            <img src={logo} alt="logo"/>
            <img src={iconMenu} alt="iconMenu" width={"32px"}/>
        </nav>
        </>
     );
}

export default Nav;