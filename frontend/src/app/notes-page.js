import React, {Component,Fragment} from 'react'
import Router from '../router/route'
import '../assets/css/sb-admin-2.min.css'
import '../assets/css/style.css'

// import component
import Sidebar from '../../src/common/layout/sidebar'
import Topbar from '../../src/common/layout/top-navbar'

class NotesPage extends Component{
    render(){
        return(
            <Fragment>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar/>
                </div>
            </div>
            <Sidebar/>
            </Fragment>
        )
    }
}

export default NotesPage;