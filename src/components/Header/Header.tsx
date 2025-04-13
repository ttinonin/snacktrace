import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="w-full bg-teal-400 mb-6 py-4">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center">
                    <h1 className="font-[poppins] font-bold text-2xl">Snacktrace</h1>
                
                    <button className="bg-sky-900 text-white px-5 py-2 rounded-md cursor-pointer w-fit">Track Your Calories!</button>
                </div>
            </div>
        </header>
    );
}