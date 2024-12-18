
import LeftDouch from "@/components/left_douch";
import MiddleDouch from "@/components/middle_douch";
import RightDouche from "@/components/right_douche";
import UserTable from "@/components/userTable";

export default function Users() {
    return (
        <div className="w-full h-[calc(100vh-260px)] p-[80px] flex flex-col gap-7 justify-center  overflow-hidden  ">
            <LeftDouch/>
            <MiddleDouch/>
            <RightDouche/>
            <p className="font-bold text-3xl ml-2 text-white">All workers</p>
            <UserTable />
        </div>
    )
}