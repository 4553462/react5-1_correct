import { Link } from "react-router-dom";

const HeadPage = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#00BFFF",
      padding: "10px",
    },
    heading1: {
      color: "white",
      margin: "0 900px 0 10px",
    },
    heading2: {
      color: "white",
      margin: "0 10px",
    },
    heading2Cont: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Here is logo</h1>
      <div style={styles.heading2Cont}>
        <Link to="/" style={styles.heading2}>
          Home
        </Link>
        <Link to="/about" style={styles.heading2}>
          About us
        </Link>
        <Link to="/contact" style={styles.heading2}>
          Contact
        </Link>
        <Link to="/news" style={styles.heading2}>
          News
        </Link>
        <Link to="/services" style={styles.heading2}>
          Services
        </Link>
      </div>
    </div>
  );
};

export default HeadPage;
