import React, { useContext } from 'react'
import "./Leftbar.scss";
import Friends from "../../assests/friends.png";
import Groups from "../../assests/Groups.png";
import Market from "../../assests/market.png";
import Memories from "../../assests/Memories.png";
import Watch from "../../assests/watch.png";
import Tutorials from "../../assests/11.png";
import Courses from "../../assests/12.png";
import Events from "../../assests/event.png";
import Fund from "../../assests/Fundraiser.png";
import Gallery from "../../assests/Gallery.png";
import Games from "../../assests/Games.png";
import Messages from "../../assests/Messages.png";
import Videos from "../../assests/Videos.png";
import { AuthContext } from '../../context/Authcontext';



const LeftBar = () => {

  const {currentUser}=useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className='user'>
            <img
              src={
                currentUser.profilepic?.startsWith("http")
                  ? currentUser.profilepic
                  : "/upload/" + currentUser.profilepic
              }
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Games} alt="" />
            <span>Games</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default LeftBar