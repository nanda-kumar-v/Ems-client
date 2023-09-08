import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Loadingspinner from "../components/Loadingspinner";
import { useParams } from "react-router-dom";
import { allUsers } from "../services/allApi";
import { BASE_URL } from "../services/baseUrl";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [showSpin, setShowSpin] = useState(true);

  const getUser = async () => {
    const { data } = await allUsers("");
    setUser(data.find((item) => item._id === id));
  };
  console.log(user);
  useEffect(() => {
    getUser();
    setTimeout(() => {
      setShowSpin(false);
    }, 2000);
  }, []);

  return (
    <>
      {showSpin ? (
        <Loadingspinner />
      ) : (
        <div style={{ height: "80vh" }} className="container">
          {user ? (
            <Card className="shadow col-lg-6 mx-auto mt-5">
              <div className="image text-center">
                <img
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                  src={`${BASE_URL}/Uploads/${user.profile}`}
                  alt=""
                />
              </div>
              <div className="text-center mt-5">
                <h3> {user.fname} {user.lname} </h3>
                <h5> Email : {user.email} </h5>
                <h5> Mobile : {user.mobile} </h5>
                <h5> Gender : {user.gender} </h5>
                <h5> Status : {user.status} </h5>
                <h5> Location : {user.location} </h5>
              </div>
            </Card>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default View;
