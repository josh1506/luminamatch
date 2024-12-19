import React from "react";

const NavBar: React.FC = () => {
    const navList = [
        "Home",
        "Profile",
        "Messages",
        "Notifications",
        "Friends",
        "Settings"
    ]

    return (
        <header className="fixed sm:block w-full z-50 border-b">
            <div className="flex justify-between items-center ">
                <div
                    className="text-2xl font-bold text-blue-600 hidden xl:flex xl:w-80 xl:flex-col gap-1 overflow-y-auto pl-4 py-2"
                >
                    <a href="#">LuminaMatch</a>
                </div>

                <nav className="flex flex-grow overflow-y-auto justify-center">
                    <ul className="flex space-x-6 text-lg lg:space-x-14">
                        {navList.map((navItem, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-blue-600">
                                    {navItem}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="space-x-4 items-center hidden lg:flex overflow-y-auto w-80 justify-end pr-4 py-2">
                    <a href="#" className="text-gray-600 hover:text-red-600">
                        Logout
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
