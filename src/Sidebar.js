import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data(),
      })))
    })

  }, []);

  const handleAddCannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      })
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Friends Adda</h3>
        <ExpandMoreIcon></ExpandMoreIcon>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon></ExpandMoreIcon>
            <h4>Text Channels</h4>
          </div>

          <AddIcon onClick={handleAddCannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {
            channels.map(({id,channel}) => (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            ))
          }
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3> {user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicNoneOutlinedIcon />
          <HeadsetMicOutlinedIcon />
          <SettingsOutlinedIcon />

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
