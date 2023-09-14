import React from "react";
import './Button.css';
import { BsCart3 } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineSpeakerphone } from 'react-icons/hi';


function Button () {
    return (
        <div className="button">
            <button className="button-car">
                <div><BsCart3/></div>
            </button>

            <button className="button-atendimento">
                <div><RiContactsLine/></div>
            </button>

            <button className="button-promocao">
                <div><HiOutlineSpeakerphone/></div>
            </button>
        </div>
    );
}

export default Button;