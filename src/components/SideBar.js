import {MdOutlineSpaceDashboard, MdMessage,
    MdNotes,MdVideoCall} from "react-icons/md";
import {AiFillSchedule, AiOutlineUser, AiFillClockCircle} from  "react-icons/ai";
import ProfileAvatar from "./ProfileAvatar";
const SideBarSlab =({text, icon, active =false, notificationCount}) => { 
    return(
        <div className={`hover:bg-blue-50 cursor-pointer  flex   text-xl items-center px-10 justify-between text-bold px-10 ${active && "bg-blue-100 text-blue-700" } `}>
           <div
        className={`h-12 w-[6px] rounded-r-lg ${active && "bg-emerald-700"}`}
        ></div>
           <div className="flex items-center gap-2">
            <div>
            {icon}
            </div>
            <div>
            {text}
            </div>
            </div> 
            <div
        className={`p-1 w-6 flex justify-center items-center h-6 text-xs rounded-full ${
          notificationCount && "bg-red-600"
        } text-white`}
      >
        {notificationCount}
      </div>
           
        </div>
    );
    } ;

const menuData =[
 {
  
    icon: <MdOutlineSpaceDashboard/>,
    text: "Dashboard",
    key: "menu-1",
},
{
   
    icon: <AiFillSchedule/>,
    text: "Schedule",
    key: "menu-2",
    notificationCount: 12,
},
{
    
    icon: <AiOutlineUser/>,

    text: "Students",
    key: "menu-3",
},
{
    text: "Homework",
    icon: <MdNotes />,
    key: "menu-4",
  },
  {
    text: "Messages",
    icon: <MdMessage />,
    key: "menu-5",
    notificationCount: 4,
  },

]

function SideBar({active}){
    return(
        <div className="w-full h-screen bg-white">
            <div>
           <div className="text-3xl py-4 font-bold text-center w-full">Edureka</div> 
           <div className="flex justify-center my-5 items-center gap-4">
            <AiFillClockCircle/>
            <div> 5 March</div>
            <div className="font-bold">10:50</div>
           </div >
           <div className="space-y-4">{menuData.map((data, i)=>(<SideBarSlab active={i==active} icon={data.icon} text={data.text} 
           notificationCount={data.notificationCount}
           />))}
           </div>
           <div className="flex justify-center">
          <button className="font-bold flex rounded-md m-3 p-3 items-center gap-4 mt-10 text-emerald-700 bg-emerald-100">
            <MdVideoCall />
            New Video Class
          </button>
        </div>
        </div>
        <ProfileAvatar
        name="Kaili Genefer"
        email="kaili@gmail.com"
        onLogout={() => console.log("this works")}
      />
        </div>
    )
}
export default SideBar;