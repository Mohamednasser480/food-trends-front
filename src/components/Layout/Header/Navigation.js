import React from 'react'

const links = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Find A Store', href: '#' },
]
export default function Navigation() {
    return (
        <ul className='hidden sm:flex gap-3 uppercase font-bold contaienr mx-auto justify-center pb-3 text-gray-600 text-sm '>
            {links.map((el) => {
                return <li className='hover:text-black' key={el.name}>
                    <a href={el.href}>{el.name}</a>
                </li>
            })}
        </ul>
    )
}
