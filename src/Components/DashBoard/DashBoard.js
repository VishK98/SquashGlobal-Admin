import React from 'react'
import "./DashBoard.css"
import Sidebar from '../Sidebar/Sidebar';

function DashBoard() {
  return (
    <>
      <Sidebar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'></div>
          <div className='col-lg-8'>
            <h1 className="center" style={{ color: "transparent", background: "linear-gradient(45deg, #03045e 60%, #0099ff 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Welcome to Squash Global Admin</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard