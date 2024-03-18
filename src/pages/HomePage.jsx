import { useState } from "react"
import Productivity from "./Productivity"
import EmployeeList from "./EmployeeList"
import { CiHome } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";

const HomePage = () => {
    const[currentTab, setCurrentTab] = useState('productivity')
  return (
    <div className="dashboard">
    {currentTab==='productivity' ? <Productivity /> : <EmployeeList />}
    <div className="bottom fixed bottom-0 left-0 right-0 z-50 h-16">
      <div onClick={() => setCurrentTab('productivity')} className={`bottom-menu-item ${currentTab === 'productivity' && 'active-tab'}`}><CiHome className="icon"/></div>
      <div onClick={() => setCurrentTab('EmployeeList')} className={`bottom-menu-item ${currentTab === 'EmployeeList' && 'active-tab'}`}><IoPeopleSharp className="icon"/></div>
    </div>
    </ div>
  )
}

export default HomePage