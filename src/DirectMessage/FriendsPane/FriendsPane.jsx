import "./FriendsPane.scss";
import { ReactComponent as Wave } from "img/wave.svg";
import { ReactComponent as Plus } from "img/plus.svg";
import { Link } from "react-router";

function FriendsPane() {
  return (
    <div className="pane">
      <div style={{ borderBottom: "1px solid #393a3f" }}>
        <input type="text" placeholder="Find or start a conversation" />
      </div>
      <div>
        <Link to="/dm/friends">
          <div className={"pane-button"}>
            <Wave height={24} />
            <p style={{ flexGrow: 1 }}>Friends</p>
          </div>
        </Link>
        <div style={{ display: "flex", padding: 12 }}>
          <h3 style={{ flexGrow: 1 }}>DIRECT MESSAGES</h3>
          <Plus height={15} />
        </div>
      </div>
    </div>
  );
}

export default FriendsPane;
