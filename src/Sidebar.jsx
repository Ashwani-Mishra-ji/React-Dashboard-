import React from "react";
import {
  BsNut,

  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsFillGearFill,
} from "react-icons/bs";
import {PiConfettiBold} from "react-icons/pi"
import {AiOutlineSchedule} from "react-icons/Ai"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
      
        <div className="sidebar-brand ">
        <div className="Dash"></div>
      
          <BsNut className="icon_header flex flex-row"/>
        </div>
        <span className="mt-4">Dashboard</span>
        <span className='value' onClick={OpenSidebar}>X</span>

      </div>

      <ul className="sidebar-list">

      
        <li className="sidebar-list-item">
        <div className="flex flex-row gap-2 ">

          <a href="">
            <PiConfettiBold className="icon" />
          </a>
          <span className="px-1">Promote <span className="ml-16">&gt;</span> </span>
          </div>
        </li>



        <li className="sidebar-list-item">
        <div className="flex flex-row gap-2 ">

          <a href="">
            <AiOutlineSchedule className="icon" />
          </a>
          <span className="px-1">Promote <span className="ml-16">&gt;</span> </span>
          </div>
        </li>



        <li className="sidebar-list-item">
        <div className="flex flex-row gap-2 ">

          <a href="">
            <BsFillGrid3X3GapFill className="icon" />
          </a>
          <span className="px-1">Promote <span className="ml-16">&gt;</span> </span>
          </div>
        </li>


        <li className="sidebar-list-item">
        <div className="flex flex-row gap-2 ">

          <a href="">
             <BsPeopleFill className="icon" />
          </a>
          <span className="px-1">Promote <span className="ml-16">&gt;</span> </span>
          </div>
        </li>


        <li className="sidebar-list-item">
        <div className="flex flex-row gap-2 ">
          <a href="">
            <BsListCheck className="icon" />
          </a>
          <span className="px-1">Promote <span className="ml-16">&gt;</span> </span>
          </div>
        </li>
     

        

        <li className="sidebar-list-item">
          <div className="flex flex-row gap-2 ">
          <a href="">
            <BsFillGearFill className="icon" /> 
          </a>
          <span className="px-3">Help <span className="ml-16 px-5">&gt;</span> </span>
          </div>
        </li>
       
      </ul>
      <div className=" log-in flex flex-row gap-2 ">
          {/* <a href=""> */}
           <img className="image" src="Profile.jpg" alt=""  />
          {/* </a> */}
          <span className="px-5 py-">Setting </span>
          <span className="mr-10">⬇</span>
          </div>
      
    </aside>
  );
}

export default Sidebar;
