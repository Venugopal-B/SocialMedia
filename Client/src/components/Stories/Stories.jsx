import React, { useContext } from 'react'
import "./Stories.scss";
import {AuthContext} from "../../context/Authcontext"
const Stories = () => {

    //Dummy
    const {currentUser}=useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "Unknown",
            img: "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Unknown",
            img: "https://images.pexels.com/photos/12365157/pexels-photo-12365157.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Unknown",
            img: "https://images.pexels.com/photos/5039297/pexels-photo-5039297.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4,
            name: "Unknown",
            img: "https://images.pexels.com/photos/1431465/pexels-photo-1431465.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 5,
            name: "Unknown",
            img: "https://images.pexels.com/photos/87403/cheetah-leopard-animal-big-87403.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];
    return (
        <div className='stories'>
            
            <div className="story">
                    <img
  src={
    currentUser.profilepic?.startsWith("http")
      ? currentUser.profilepic
      : "/upload/" + currentUser.profilepic
  }
  alt=""
/>
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Stories;