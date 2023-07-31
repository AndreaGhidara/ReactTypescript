export function Navbar() {
    return (
        <div className="w-full"> 
            <div className="grid grid-cols-3 py-3">
                <div>
                    <img className="w-[60px] p-1" src="public/logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex w-full h-full justify-between items-center gap-3 cursor-pointer">
                        <li>HomePage</li>
                        <li>Product</li>
                        <li>Info</li>
                    </ul>
                </div>
                <div className="flex items-center justify-end cursor-pointer">
                    <img className="w-[30px]" src="src/assets/home.png" alt="" />
                </div>
            </div>
        </div>
    )
}