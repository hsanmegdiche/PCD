import React, { useEffect, useState } from "react";

import axios from "axios";
function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState("");
  const [id, setId] = useState(0);
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("/user/getuser", {
            headers: {
              Authorization: token,
            },
          });
          console.log(res);
          setIsLogged(true);
          setIsAdmin(res.data.role === 1);
          setUser(res.data);
          setId(res.data._id);
        } catch (err) {
          alert(err.data.msg);
        }
      };

      getUser();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.get("/user/logout", {
        headers: {
          Authorization: token,
        },
      });
      window.location.href = "/getuser";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return {
    isAdmin: [isAdmin, setIsAdmin],
    isLogged: [isLogged, setIsLogged],
    user: [user, setUser],
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
    github: user.github,
    id: [id, setId],
  };
}

export default UserApi;
