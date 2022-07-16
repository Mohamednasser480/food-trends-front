import React, { useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init();

export default function Modal(props) {
    let directionClass = "justify-start";
    let animationSide = "slide-right";

    if (props.direction == "right") {
        directionClass = "justify-end"; 
        animationSide = "slide-left";
    }

    return (

        <>
            {
                <div
                    className={`fixed  left-0 top-0 z-50 bg-[#0000006d] w-screen h-screen cursor-crosshair flex ${directionClass} me-5`}
                    onClick={props.toggleModal}
                    data-aos="fade"
                >
                    <div className='bg-white w-[410px] h-full p-5 max-w-[90%] cursor-default' data-aos={animationSide}>
                        {props.children}
                    </div>
                </div>
            }
        </>
    )
}
