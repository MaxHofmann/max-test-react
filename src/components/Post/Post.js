import React from "react";
import {
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import CopyToClipboardButton from "../CopyToClipboardButton/CopyToClipboardButton";

const Post = ({ post }) => {
  const postUrl = `${window.location.origin}/posts/post/${post.id}`;
  return (
    <div className="user-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
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

export default Post;