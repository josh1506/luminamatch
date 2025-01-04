import React from "react";
import InputText from "~/components/InputText";

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
        <header className="fixed top-0 sm:block w-full z-50 h-20 bg-stone-800">
            <div className="flex justify-between items-center h-full">
                <div
                    className="text-2xl font-bold text-white hidden xl:flex xl:w-80 xl:flex-col gap-1 overflow-y-auto pl-4 py-2 tracking-wider"
                >
                    <a href="#">
                        Lumina
                    <span className="text-purple-500">Match</span>
                    </a>
                </div>

                <nav className="flex flex-grow overflow-y-auto justify-center xl:justify-start">
                    <ul className="flex space-x-6 text-lg lg:space-x-14">
                        {navList.map((navItem, index) => (
                            <li key={index}>
                                <a href="#" className="text-white hover:text-purple-500 font-semibold tracking-wide">
                                    {navItem}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:block overflow-y-auto w-80 justify-end pr-4">
                    <InputText
                        name="search"
                        placeholder="Search..."
                        extraClassName="rounded-full w-full h-10"
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
