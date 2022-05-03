import React, { useEffect, useState } from "react";

import axios from "axios";
function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState("");
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

          setUser(res.data);
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
    isLogged: [isLogged, setIsLogged],
    user: [user, setUser],
  };
}

export default UserApi;
