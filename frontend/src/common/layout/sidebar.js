import React, {Component} from 'react'

class sidebar extends Component{
    render(){
        return(
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">Notes Management</div>
            </a>
      

            <hr class="sidebar-divider my-0"/>
      
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>All Notes</span></a>
            </li>

            <hr class="sidebar-divider my-0"/>
      
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Create Notes</span></a>
            </li>

            <hr class="sidebar-divider my-0"/>
            
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Edit Notes</span></a>
            </li>

            <hr class="sidebar-divider my-0"/>
            
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>About</span></a>
            </li>
      
          </ul>
        )
    }
}

export default sidebar;