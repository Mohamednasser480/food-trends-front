import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function SoicalIcons(props) {
    return (

        <div className="hidden md:flex gap-x-3 text-gray-400">
            <a href="#">
                <FaTwitter
                    size={18}
                    cursor={"pointer"}
                    className={"hover:text-green-800 transition-all"}
                />
            </a>

            <a href="#">
                <FaFacebookF
                    size={18}
                    cursor={"pointer"}
                    className={"hover:text-green-800 transition-all"}
                />
            </a>
            <a href="#">
                <FaInstagram
                    size={18}
                    cursor={"pointer"}
                    className={"hover:text-green-800 transition-all"}
                />
            </a>
            <a href="#">
                <FaLinkedin
                    size={18}
                    cursor={"pointer"}
                    className={"hover:text-green-800 transition-all"}
                />
            </a>

        </div>
    )
}
