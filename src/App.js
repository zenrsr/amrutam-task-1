import React, { useState } from "react";

import NavbarComp from "./components/NavbarComp/NavbarComp";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import FindDocs from "./components/FindDocs/FindDocs";

export default function App() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleViewProfile = () => {
    setShowProfileDetails(true);
  };
  return (
    <>
      <NavbarComp />
      <div className="App h-screen max-w-screen">
        {showProfileDetails ? (
          <ProfileDetails />
        ) : (
          <FindDocs onViewProfile={handleViewProfile} />
        )}
      </div>
    </>
  );
}
