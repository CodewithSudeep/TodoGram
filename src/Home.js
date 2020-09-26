import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import NoMeetingRoomIcon from "@material-ui/icons/NoMeetingRoom";

export default function Home({ logout }) {
  const expireSession = () => logout();

  return (
    <div className="home">
      {/* title */}
      <div className="home-title">TodoGram</div>

      <div className="home-tabs">
        {/* left card screen  */}
        <div className="home-tabsLeft home-tabCard">LeftTab</div>

        {/* right card screen */}
        <div className="home-tabsRight home-tabCard">RIghtTab</div>
      </div>

      {/* footer */}
      <div className="home-footer">
        <Button onClick={() => expireSession()}>
          <NoMeetingRoomIcon /> Logout
        </Button>
        <div>Copyright &copy; CodewithSudeep 2020. All Rights Reserved</div>
      </div>
    </div>
  );
}
