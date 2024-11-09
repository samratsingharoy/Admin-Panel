import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    const links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Password",
            link: "/password",
        },
    ]

    return (
        <div className="w-1/5 p-4 border-r border-gray-600 space-y-4">
            <h2 className="text-xl font-bold">Primary Information</h2>
            <nav className="space-y-2">
                {links.map((item, i) => (
                    <div key={i} className="block text-lg font-semibold hover:underline">
                        <Link to={item.link} className="hover:text-blue-500 transition-all duration-300">
                            {item.title}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Sidenav
