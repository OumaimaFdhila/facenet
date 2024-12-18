import { SiAegisauthenticator } from "react-icons/si";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Link from "next/link"

export default function Navbar(){
    return(
        <div className=" h-[100px] z-[1000] w-full px-24 pt-10 flex justify-between items-center ">
            <div className="h-full flex items-center gap-4 z-10 bg-transparent">
                <SiAegisauthenticator className="text-vert_citron bg-transparent" size={30}/>
                <Link href={"/"} className="font-semibold bg-transparent text-2xl text-white hover:text-vert_citron">FaceNet</Link>
            </div>
            <div className="flex gap-2 items-center h-full group cursor-pointer">
                <Link href="/dashboard"  className="text-vert_citron text-xl group-hover:text-white">Dashboard</Link>
                <LuCircleArrowOutUpRight className="text-vert_citron group-hover:text-white" size={20}/>
            </div>
        </div>
    )
}