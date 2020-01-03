/**
 * bysrkh
 * @2019 GNU GPL v2, Yogyakarta
 *
 * bysrkh@gmail.com
 */

import React from 'react'
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'

const Nav = ({location, link}) => {
    const {path, label} = link
    let classes = location.pathname == link.path ? 'nav-link active' : 'nav-link'

    return (
        <li className="nav-item">
            <Link className={classes} to={path}>{label}</Link>
        </li>
    )
}

export default withRouter(Nav)