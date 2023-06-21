/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./users.css";
import User from "./User/User";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((req) => req.json())
      .then((data) => setUsers(data));
  }, []);

  const handelDeleteUser = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("🦄 User Delete Are you sure !!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          const removeUser = users.filter((user) => user._id !== _id);
          setUsers(removeUser);
        }
        console.log(data);
      });
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Simple CRUD application</h2>
        <h4 style={{ textAlign: "center" }}> User Count : {users.length}</h4>
        <div className="main_container">
          {users.map((user) => (
            <User
              key={user._id}
              user={user}
              handelDeleteUser={handelDeleteUser}
            ></User>
          ))}
        </div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
    </>
  );
};

export default Users;
