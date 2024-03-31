import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Album from "../../components/Album/Album";
import Loader from "../../components/Loader/Loader";
import "../style/style.scss";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId, albumId } = useParams();

  useEffect(() => {
    setLoading(true);

    let url;
    if (albumId) {
      url = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
    } else if (userId) {
      url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    } else {
      url = "https://jsonplaceholder.typicode.com/albums";
    }

    axios
      .get(url)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setAlbums(data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId, albumId]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>{albumId ? 'Album Detail' : 'Albums'} | My React Application</title>
        <meta
          name="description"
          content={`${albumId ? 'Detailed album' : 'List of albums'} page of my test React application with users`}
        />
      </Helmet>
      <Header />
      <main className="main">
        <div className="container">
          {loading && <Loader />}
          {!loading && albums.length === 0 && <div>No albums found.</div>}
          {!loading && (
            <>
              <h1>{albumId ? 'Album detail' : (userId ? 'User albums' : 'All albums')}</h1>
              <div className="user-list">
                {albums.map((album) => (
                  <Album key={album.id} album={album} />
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

export default Albums;