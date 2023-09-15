import React, { useState } from "react";
import './Header.css';
import CartButton from "../CartButton/CartButton";
import Menu from "../Menu/Menu";

function Header({valor, onChange}) {

    return (
        <header className="hearder">
            <div className="container_menu">
                <img className="logo" src="logobranca.png" alt="logo__kimaster" />
                <div className="input_search">
                        <div className="search">
                            <input
                                type="search"
                                id="default-search"
                                className="p-4 pl-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Pesquisar produtos..."
                                value={valor}
                                onChange={onChange}
                            />
                            <div className="icon-search">
                                <ion-icon name="search-outline"></ion-icon>
                            </div>
                        </div>
    
                </div>
                <div className="container_button">
                    <CartButton />
                    <Menu/>
                </div>
            </div>
        </header>
    );
}

export default Header;