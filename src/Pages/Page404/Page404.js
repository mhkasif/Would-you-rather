import React from "react";

const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        marginTop: "3rem",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "3rem" }}>404</div>
      <div style={{ fontSize: "1.5rem" }}>Page does not exist</div>
    </div>
  );
};

export default Page404;
