/**
 * bysrkh
 * @2019 GNU GPL v2, Jogja - Indonesia
 *
 * bysrkh@gmail.com
 */

import React, {Component} from 'react'
import {connect} from "react-redux";

const withErrorhandler = ChildComponent => {
    class WithErrorHandlerComponent extends Component {

        constructor(props) {
            super(props)

            this.state = {error: false}
            console.log('[withErrorHandler.js] constructor()')
        }

        static getDerivedStateFromError(error) {
            return {error: error}
        }

        render() {

            return <>{this.state.error ? <p>Seems this page error</p> : <ChildComponent {...this.props}/>}</>
        }

    }

    return WithErrorHandlerComponent
}

export default withErrorhandler