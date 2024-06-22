function Navbar() {
    return (
        <div>
            <div className="navbar bg-[#C70039]">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="border-2  bg-[#C70039] menu  dropdown-content mt-3 z-[1] p-2 shadow font-semibold text-white rounded-box w-96">
                            <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">Home</a></li>
                            <li className="cursor-default">
                                <span className="w-full flex   py-2 border-b-2  mb-2 cursor-default">Exercises</span>
                                <ul className="p-2  ">
                                    <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">Basic Commands</a></li>
                                    <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">PNR Exercises</a></li>
                                </ul>
                            </li>
                            <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">Logistics Resources</a></li>
                            <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">About</a></li>
                            <li><a className="w-full flex justify-center  py-2 border-b-2 shadow-md hover:bg-base-100 mb-2 hover:text-red-900">Donate</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-xl">Sabre Maestro</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="text-white font-bold menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Exercises</summary>
                                <ul className="p-2 bg-[#C70039]">
                                    <li><a>Basic Commands</a></li>
                                    <li><a>PNR</a></li>
                                    <li><a>PNR Other Elements</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Donate</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
