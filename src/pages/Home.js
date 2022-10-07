import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');


  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("New Room Created.");

  }

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('Room ID and Username are required.', {
        position: 'top-center',
      });
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
        
      }
    });
  }

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className="formWrapper">
        <img className='homePageLogo' src="./images/code-sync.png" alt="code-sync" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>

        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />
          <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter} />
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then <a onClick={createNewRoom} href="" className='createNewBtn'>create new room</a>
          </span> 
        </div>


      </div>

      <footer>
        <h4>Made By <a href="">Nishant Bharwani</a></h4>
      </footer>
    </div>
  )
}

export default Home