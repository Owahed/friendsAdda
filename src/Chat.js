import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase"

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                )
        }

    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("channels").doc(channelId).collection('messages').add({
            message: input,
            user: user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("")
    };

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (<Message
                timestamp={message.timestamp}
                message={message.message}
                user={message.user}
                />))}

            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`} />
                    <button
                        disabled={!channelId}
                        className="chat__inputButton"
                        onClick={sendMessage}
                        type="submit">
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Chat;
