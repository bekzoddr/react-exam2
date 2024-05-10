import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Container maxWidth="xl">
      <div className="admin">
        <br />
        <br />
        <div className="link">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/admin"}>Admin</NavLink>
        </div>
        <br />
        <h2>Admin panel</h2>
        <br />
        <br />
        {[...Array(3)].map((_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
            <br />
            <br />
          </p>
        ))}
        <br />
        <br />
        <div className="btn">
          {" "}
          <button onClick={handleClick} className="ui-btn">
            Remove
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Admin;
