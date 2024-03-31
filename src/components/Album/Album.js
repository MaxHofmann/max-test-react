import React from "react";
import {
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

const Album = ({ album }) => {
  const postUrl = `${window.location.origin}/albums/album/${album.id}`;
  return (
    <div className="user-card">
      <h2>{album.title}</h2>
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
};

export default Album;