import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

const Message = () => {
    return (
        <div className="message">
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-Ufy42HgJWrw5JKywP4aV3eVC5pHBVW5IB4LJe=s83-c-mo" />
            <div className="message__info">
                <h4>
                    Saurav
                    <span className="message__timestamp">
                        this is a timestamp
                    </span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    );
};

export default Message;
