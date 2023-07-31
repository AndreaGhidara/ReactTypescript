import { Navbar } from "./Navbar/Navbar";
import { Jumbotron } from "./Jumbotron/Jumbotron";

export function AppHeader() {
    return(
        <div className="container-xl bg-black text-white text-2xl relative w-full h-[500px]">
            <div className="w-full px-10 absolute top-0 bg-gradient-to-b from-blue-gray-900 to-transparent z-20">
                <Navbar />
            </div>
            <div>
                <Jumbotron />
            </div>
        </div>
    )
}