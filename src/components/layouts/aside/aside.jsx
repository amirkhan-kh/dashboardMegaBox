import { IoIosExit } from "react-icons/io"; 
import './_aside.scss';
import navSections from '@mocks/nav/navigation';
import {NavLink} from 'react-router-dom'
import { logOut } from '../../ui/button/Button.js'
const aside = () => {
  return (
    <aside className="p-2 pt-2 min-h-screen w-[17%] mt-[-60px]">
    <div className="flex items-center gap-4 px-4 py-5 mb-7">
      <div className="border-l-neutral-900 border-spacing-1">
        <i style={{ fontSize: "25px" }} className="bi bi-box"></i>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[20px] font-[600]">Megabox</h2>
        <span className="mb-1 text-[12px] text-[#7e7979]">Tashkent</span>
      </div>
    </div>
        <span className=" font-bold">Dashboard</span>
    <nav>
      <ul className="">
        {
          navSections.length && navSections?.map((item, index)=>{
            return(
              <li key={index} className="p-2">
                <NavLink  to={item.path} className="flex gap-2 px-3">
                <i className={item.icon}></i>
                <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
        <button onClick={()=>logOut()} className="flex items-center gap-2 mt-4"><IoIosExit /> Exit</button>
    </nav>
  </aside>
  ) 
}

export default aside