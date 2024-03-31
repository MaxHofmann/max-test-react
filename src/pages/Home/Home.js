import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

import UserCard from "../../components/UserCard/UserCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";
import "../style/style.scss";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredUsers = users
    .filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const isReversed = sortOrder === "asc" ? 1 : -1;
      return isReversed * a.username.localeCompare(b.username);
    });

  return (
    <div className="wrapper">
      <Helmet>
        <title>Home Page | My React Application</title>
        <meta
          name="description"
          content="Main page of my test React application with users"
        />
      </Helmet>
      <Header />
      <main className="main">
        <div className="container">
          <Search
            onSearch={handleSearchChange}
            onSort={handleSortChange}
            sortOrder={sortOrder}
          />
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1>Users</h1>
              {filteredUsers.length > 0 ? (
                <div className="user-list">
                  {filteredUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
                </div>
              ) : (
                <div>Unfortunately, there are no such users.</div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;