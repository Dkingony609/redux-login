import { useSelector } from "react-redux";
import NavBar from "../NavBar";
import "../styles.css";

const Dashboard = () => {
  const { userDetails } = useSelector((state) => state.auth);

  return (
    <div>
      <NavBar />

      <h2>{`Welcome, ${userDetails.name}`}</h2>
      <p>
        Our area of specialization includes; Surveying, Architecture,
        Engineering, Project Management.
      </p>
    </div>
  );
};

export default Dashboard;
