import React, {Component} from 'react';
import { connect } from 'react-redux';
import APIService from "../../services/api-service/api-service";
import "./map-booked.css"
import {startBlinking, checkIn, lightUp} from "../../actions";

class MapBooked extends Component {

    startBlinkingHandler = (e) => {
        e.preventDefault();
        this.props.startBlinking();
    }

    checkInHandler = (e) => {
        e.preventDefault();
        this.props.checkIn();
    }

    lightHandler = (e) => {
        e.preventDefault();
        this.props.lightUp(this.props.lightLevel);
    }

    render() {

        const {error, isBlinking, isCheckedIn, lightLevel} = this.props;

        if (error)
        {
            console.log("server unavaialble");
            return null;
        }

        return (
            <div className="map-booked">
                <div className="map-booked-buttons">
                    <button disabled={isBlinking && !isCheckedIn} onClick={this.startBlinkingHandler}>FIND MY DESK</button>
                    <button disabled={isCheckedIn} onClick={this.checkInHandler}>CHECK-IN</button>
                    <button disabled={!isCheckedIn} onClick={this.lightHandler}>MANAGE LIGHT({lightLevel}%)</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ error, isBlinking, isCheckedIn, lightLevel }) => {
    return { error, isBlinking, isCheckedIn, lightLevel };
};

const apiService = new APIService();
const mapDispatchToProps = (dispatch) => {
    return {
        startBlinking: startBlinking(apiService, dispatch),
        checkIn: checkIn(apiService, dispatch),
        lightUp: lightUp(apiService, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapBooked);
