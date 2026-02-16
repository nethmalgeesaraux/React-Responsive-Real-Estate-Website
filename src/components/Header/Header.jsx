import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";


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

                    <div className="flexCenter h-menu"
                        style={getMenuStyles(menu)}>

                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="">Contact</a>
                        </button>
                    </div>
                     </OutsideClickHandler>
                    <div className="menu-icon" onClick={() => setMenu((prev) => !prev)}>
                        <BiMenuAltRight size={30} />
                    </div>
            </div>

        </section>


    )
}
