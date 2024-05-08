import { Container } from "@mui/material";
import React from "react";

const Skeleton = ({ count }) => {
  return (
    <Container maxWidth="xl">
      <div className="skeleton_wrapper">
        {Array(count)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="skeleton__card">
              <div className="sceleton__image skeleton"></div>
              <div className="skeleton__title"></div>
              <div className="skeleton__price"></div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Skeleton;
