import React from "react";
import InputText from "~/components/InputText";
import ActionLink from "~/components/ActionLink";

const NavBar: React.FC = () => {
    const navList = [
        {label: "Home", url: "/"},
        {label: "Messages", url: "/messages"},
        {label: "Profile", url: "/profile"},
        // "Notifications",
        // "Friends",
        // "Settings"
    ]

    return (
        <header className="fixed top-0 sm:block w-full z-50 h-20 bg-stone-800">
            <div className="flex justify-between items-center h-full">
                <div
                    className="text-2xl font-bold text-white hidden xl:flex xl:w-80 xl:flex-col gap-1 overflow-y-auto pl-4 py-2 tracking-wider"
                >
                    <ActionLink link="/" extraClassNames="text-white hover:text-white">
                        Lumina
                    <span className="text-purple-500">Match</span>
                    </ActionLink>
                </div>

                <nav className="flex flex-grow overflow-y-auto justify-center xl:justify-start">
                    <ul className="flex space-x-6 text-lg lg:space-x-14">
                        {navList.map((navItem, index) => (
                            <li key={index}>
                                <ActionLink link={navItem.url} extraClassNames="text-white hover:text-purple-500 font-semibold tracking-wide">
                                    {navItem.label}
                                </ActionLink>
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
