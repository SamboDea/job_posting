// import React from "react";
// import SideBar from "./SideBar";

// const Dashboard = () => {
//   return (
//     <div div className="container-fluid">
//       <div className="row">
//         <div className="col-2">
//           <SideBar />
//         </div>
//         <div className="col-10">
//           <h1>hello</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import SideBar from "./SideBar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
        {/* Mobile Toggle Button */}
        <button
          className="btn btn-primary d-lg-none mb-3"
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>

        <h1>Welcome to the Admin Dashboard</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
};

export default Dashboard;
