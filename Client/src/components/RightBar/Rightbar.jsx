import React from 'react';
import "./Rightbar.scss";

const demoUsers = [
  {
    id: 1,
    name: "John Doe",
    profilepic: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    profilepic: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
  }
];

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          {demoUsers.map(user => (
            <div className="user" key={user.id}>
              <div className="userInfo">
                <img
                  src={
                    user.profilepic?.startsWith("http")
                      ? user.profilepic
                      : "/upload/" + user.profilepic
                  }
                  alt={user.name}
                />
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Latest Activities</span>
          {demoUsers.map(user => (
            <div className="user" key={user.id}>
              <div className="userInfo">
                <img
                  src={
                    user.profilepic?.startsWith("http")
                      ? user.profilepic
                      : "/upload/" + user.profilepic
                  }
                  alt={user.name}
                />
                <p><span>{user.name}</span> Updated their cover picture </p>
              </div>
              <span>just now</span>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Online Friends</span>
          {demoUsers.map(user => (
            <div className="user" key={user.id}>
              <div className="userInfo">
                <img
                  src={
                    user.profilepic?.startsWith("http")
                      ? user.profilepic
                      : "/upload/" + user.profilepic
                  }
                  alt={user.name}
                />
                <div className='online' />
                <span>{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Rightbar;
