import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hometable from "../components/Hometable";
import Loadingspinner from "../components/Loadingspinner";
import { deleteContext, registerContext, updateContext } from "../components/ContextShare";
import { Alert } from "react-bootstrap";
import { useContext } from "react";
import { allUsers, deleteUser } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const {updateData, setUpdateData} = useContext(updateContext);
  const { deleteData, setDeleteData } = useContext(deleteContext);
  const { registerData, setRegisterData } = useContext(registerContext);
  const [showSpin, setShowSpin] = useState(true);
  const [allUsersData, setAllUsersData] = useState([]);
  const [search, setSearch] = useState("");

  const getallEmployees = async () => {
    const response = await allUsers(search);
    if (response.status === 200) {
      console.log(response.data);
      setAllUsersData(response.data);
    } else {
      toast.error("Cannot Find Data !!!");
    }
  };

  const removeUser = async (id) => {
    const response = await deleteUser(id)
    if (response.status === 200) {
      getallEmployees();
      setDeleteData(response.data);
    } else {
      toast.error("Operation Failed!! Please Try Again Later");
    }
  };

  useEffect(() => {
    getallEmployees();
    setTimeout(() => {
      setShowSpin(false);
    }, 2000);
  }, [search]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {/* register data */}

        {registerData && (
          <Alert
            variant="success"
            dismissible
            onClose={() => setRegisterData("")}
          >
            {registerData.fname} registered successfully..
          </Alert>
        )}

        {/* delete data */}

        {deleteData && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setDeleteData("")}
          >
            {registerData.fname} removed successfully..
          </Alert>
        )}

          {/* edit data */}

          {updateData && (
          <Alert
            variant="success"
            dismissible
            onClose={() => setUpdateData("")}
          >
            {registerData.fname} Updated successfully..
          </Alert>
        )}


      </div>

      {showSpin ? (
        <Loadingspinner />
      ) : (
        <div className="container mt-3 ">
          <div className="search-all d-flex align-items-center">
            <div className="search d-flex align-items-center ">
              <button
                type="button"
                class="btn btn-light "
                style={{ borderRadius: "50px" }}
              >
                <i class="fa-solid fa-magnifying-glass fa-fade"></i>
              </button>
              <input
                type="text"
                style={{ width: "400px" }}
                placeholder="Search By Employee name"
                className="form-control ms-3 "
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to={"/add"} className="btn btn-warning ms-auto">
              <i class="fa-solid fa-user-plus me-1"></i>
              Add
            </Link>
          </div>
          <div className="table mt-5">
            <h1>List of All Employees</h1>
            <Hometable displayData={allUsersData} removeUser={removeUser} />
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Home;
