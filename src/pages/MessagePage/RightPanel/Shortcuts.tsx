import React from "react";

const Shortcuts: React.FC = () => {
    return (
        <div className="px-2">
            <div
                className="rounded-xl bg-stone-600 w-full max-h-80 flex flex-wrap p-2 gap-1 justify-between overflow-y-auto"
            >
                {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
                    <button className="bg-purple-500 h-16 w-16 rounded-full" key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Shortcuts
