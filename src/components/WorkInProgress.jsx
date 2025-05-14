import React from "react";

const WorkInProgress = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚧 Page Under Construction</h1>
      <p style={styles.text}>
        We're working hard to bring you this page. Please check back soon.
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f8fafc",
    color: "#1f2937",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  text: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    maxWidth: "600px",
  },
};

export default WorkInProgress;
