import EditLocationIcon from "@material-ui/icons/EditLocation";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import "./ChatHeader.css";

const ChatHeader = ({channelName}) => {
    return (
        <div className="ChatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />

                <div className="chatHeader__search">
                    <input placeholder="search" />
                    <SearchIcon />
                </div>
            </div>

            <SendIcon />
            <HelpIcon />
        </div>
    );
};

export default ChatHeader;
