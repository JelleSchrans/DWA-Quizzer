import { Link } from "react-router-dom";

import Button from "./Button";

function Teams(){
    return(
        <div className="container">
            <h1>Teams</h1>

            <div className="teams">
                <div className="incomingRequests">
                    <h2>Wachtende teams</h2>
                </div>
                <div className="approvedTeams">
                    <h2>Goedgekeurde teams</h2>
                </div>
            </div>

            <Link to="/selectQuestion"><Button className="btn" content="Begin met de Quiz!" /></Link>
        </div>
    )
}

export default Teams;