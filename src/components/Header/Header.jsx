import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const navItems = [
    { label: "Residencies", href: "#residencies" },
    { label: "Our Value", href: "#value" },
    { label: "Contact Us", href: "#contact" },
    { label: "Get Started", href: "#get-started" },
];

export const Header = () => {
    const [menu, setMenu] = React.useState(false);

    const getMenuStyles = (menu) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menu && "-100%" };
        }
    }


    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />

                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenu(false)
                    }}
                >

                    <nav className="flexCenter h-menu"
                        style={getMenuStyles(menu)}>
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} onClick={() => setMenu(false)}>
                                {item.label}
                            </a>
                        ))}
                        <button className="button">
                            <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
                        </button>
                    </nav>
                </OutsideClickHandler>
                    <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
            </div>

        </section>


    )
}
