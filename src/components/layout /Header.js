import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {

    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <img src="/images" alt="Kudos"/>
                    </div>
                    <div className="settings">
                        <ul>
                        <li>+</li>
                        <li><FaPizzaSlice/></li>
                        </ul>                        
                    </div>
                </nav>
            </header>
        </div>
    )
}
