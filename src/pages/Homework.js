import SideBar from "../components/SideBar";
import { MdAdd } from "react-icons/md";
import HomeworkCard from "../components/HomeWorkCard";
import HomeWorkDetails from "../components/HomeWorkDetails";
function Homework(){
    
  const homeworkData = [
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: true,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
    {
      time: "5.01",
      subject: "Math",
      profiles: [
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
        "https://4.img-dpreview.com/files/p/TS560x560~forums/63132016/f173f8d56da9479fbe3581f2b2a5ac4b",
      ],
      checks: 3,
      active: false,
      topic: "Fractions",
    },
     
  ];
  
  return(
        <div className="flex bg-blue-100">
            <div className="w-3/12 h-screen  ">
                
                <SideBar active={2}/>
            </div>
            <div className=" h-screen flex flex-grow">
            <div className="h-screen flex-grow">
            <div className="flex justify-between p-5 items-center">
            <div className="text-xl font-bold">Homeworks</div>
            <div className="flex p-2 rounded-lg bg-emerald-100">
              <div className="px-3 cursor-pointer rounded-lg text-sm py-2 bg-white text-black">
                Classes
              </div>
              <div className="px-3 cursor-pointer rounded-lg text-sm py-2">
                Individual
              </div>
            </div>
            <button className="flex gap-2 hover:bg-emerald-400 rounded-lg items-center px-3 py-2 bg-emerald-600 text-white">
              Create Homework
              <div className="p-1 rounded-full bg-white text-emerald-800">
                <MdAdd />
              </div>
            </button>
            </div>
            <div className="m-5 grid grid-cols-2 w-full gap-4 pr-28">
            {homeworkData.map((data) => (
              <HomeworkCard {...data} />
            ))}
          </div>
            </div>
            <div className="w-4/12 h-screen bg-white">
          <HomeWorkDetails
            deadline="4"
            topic="Fractions"
            time="6.01"
            subject="Math"
          />
        </div>
            </div>
         
        </div>
    )
}
export default Homework;