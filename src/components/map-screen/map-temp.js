import React, {Component} from 'react';
import { connect } from 'react-redux';
import APIService from "../../services/api-service/api-service";
import {fetchTemp} from "../../actions";


class MapTemp extends Component {

    componentDidMount() {
        this.props.fetchTemp();
    }

    render() {
        const { data, loading, error } = this.props;


        if (loading) {
            return <span>loading...</span>
        }

        if (error) {
            return null;
        }

        return(
            <div className="map-temp">
                <div>{data.t}°</div>
                <div>{data.h}'</div>
            </div>
        );
    }
}

const mapStateToProps = ({ data, loading, error }) => {
    return { data, loading, error };
};

const apiService = new APIService();
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTemp: fetchTemp(apiService, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapTemp);