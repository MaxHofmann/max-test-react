import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import Loader from "../../components/Loader/Loader";
import "../style/style.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId, postId } = useParams();

  useEffect(() => {
    setLoading(true);

    let url;
    if (postId) {
      url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    } else if (userId) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    } else {
      url = "https://jsonplaceholder.typicode.com/posts";
    }

    axios
      .get(url)
      .then((response) => {
        // Обрабатываем как массив, чтобы унифицировать вывод ниже
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId, postId]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>{postId ? 'Post Detail' : 'Posts'} | My React Application</title>
        <meta
          name="description"
          content={`${postId ? 'Detailed post' : 'List of posts'} page of my test React application with users`}
        />
      </Helmet>
      <Header />
      <main className="main">
        <div className="container">
          {loading && <Loader />}
          {!loading && posts.length === 0 && <div>No posts found.</div>}
          {!loading && (
            <>
              <h1>{postId && 'Post detail' }{userId && 'User posts'}{!userId && !postId && 'All posts'}</h1>
              <div className="user-list">
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posts;