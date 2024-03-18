// import UserImg from "../assets/user.png";
// import Logo from "../assets/logo.png";
import Search from "./Search";
import { EmployeeData } from "../data/EmployeeData";
import Card from "./Card";

const SearchUser = () => {
  return (
    <div className="dashboard-container">
      <section className="userimg-container">
        <img
          src="../../public/assests/Group 46@2x.png"
          alt="Call Icon"
          className="w-[50px] h-[50px] absolute mx-auto top-4 right-4"
        />
      </section>
      <section className="dashboardlogo-container">
        <img
          src="../../public/assests/moptro logo.png"
          alt="Moptro Logo"
          className="w-24 h-24 mx-auto mt-8 mb-4"
        />
        <div className="above-four">
          <div className="above-text">4</div>
        </div>
      </section>
      <section style={{ marginTop: "20px" }}>
        <Search emptyTitle="No users found!" data={EmployeeData} card={Card} />
      </section>
    </div>
  );
};

export default SearchUser;
