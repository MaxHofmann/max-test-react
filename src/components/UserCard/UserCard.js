import React from "react";
import {
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { Link } from "react-router-dom";
import "./UserCard.scss";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

const UserCard = ({ user }) => {
  const postUrl = `${window.location.origin}/posts/${user.id}`;

  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Username:</b> {user.username}
      </p>
      <p>
        <b>City:</b> {user.address.city}
      </p>
      <p>
        <b>Company:</b> {user.company.name}
      </p>
      <p>
        <b>Website:</b> {user.website}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <div className="links-row">
        <Link to={`/albums/${user.id}`}>User Albums</Link>
        <Link to={`/posts/${user.id}`}>User Posts</Link>
      </div>

      <div className="icons-row">
        <TelegramShareButton url={postUrl}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <EmailShareButton url={postUrl}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <CopyToClipboardButton postUrlProp={postUrl} />
      </div>
    </div>
  );
}

export default UserCard;