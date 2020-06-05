import React, {Component} from 'react'
import {connect} from "react-redux";

class Loading extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('[Loading.js] render()')

        return <>{this.props.loading ? <div className="loader">Loading</div> : ''}</>
    }

}

const mapStateToProps = state => ({
    loading: state.loadingReducer.loading
})

export default connect(mapStateToProps)(Loading)
