import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    const navItemsOne = [
        { name: 'About', url: '/' },
        { name: 'Privacy', url: '/' },
        { name: 'Terms', url: '/' },
        { name: 'Sitemap', url: '/' },
        { name: 'Company Details', url: '/' },
    ]
    return (
        <footer className="h-[100px] bg-[#fff] text-center  py-7">
            <div>
                &copy;{year} <span>Apch. All rights reserved</span>
            </div>
            <div className="flex flex-wrap justify-center items-center py-5">
                {navItemsOne.map((item, i) => (
                    <Link to="/" key={`${i + 1}:${item.name}`} className="mx-2">
                        {item.name}
                    </Link>
                ))}
            </div>
        </footer>
    )
}

export default Footer
