import { Link } from "react-router-dom";
import * as ReactRedux from "react-redux";

import Button from "./Button";

function Teams(props){


    return(
        <div className="container">
            <h1>Roomcode: </h1>

            <Link to="/selectQuestion"><Button className="btn" content="Begin met de Quiz!" /></Link>

            <div className="teams">
                <div className="incomingRequests">
                    <h2>Wachtende teams</h2>
                </div>
                <div className="approvedTeams">
                    <h2>Goedgekeurde teams</h2>
                </div>
            </div>

            <Button className="btn" content="Accepteer team"/>

            <br /><br />

            <Button className="btn" content="Weiger team"/>

            <br />
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentRoom: state.quizMaster.currentRoom
    }
}

export const TeamRequests = ReactRedux.connect(mapStateToProps)(Teams)