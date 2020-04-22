import React, {Component} from 'react'; 

import '../assets/font/iconsmind/style.css'
import '../assets/font/simple-line-icons/css/simple-line-icons.css'

import '../assets/css/vendor/bootstrap.min.css'
import '../assets/css/vendor/bootstrap-float-label.min.css'

import '../assets/css/main.css';

// script

class LoginComponent extends Component{
    render(){
        return(
            <div class="container">
            <div class="row h-100">
                <div class="col-12 col-md-10 mx-auto my-auto">
                    <div class="card auth-card">
                        <div class="position-relative image-side ">

                            <p class=" text-white h2">MAGIC IS IN THE DETAILS</p>

                            <p class="white mb-0">
                                Please use your credentials to login.
                                If you are not a member, please
                                <a href="#" class="white">register</a>
                            </p>
                        <div class="form-side">
                            <a href="Dashboard.Default.html">
                                <span class="logo-single"></span>
                            </a>
                            <h6 class="mb-4">Login</h6>
                            <form>
                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" />
                                    <span>E-mail</span>
                                </label>

                                <label class="form-group has-float-label mb-4">
                                    <input class="form-control" type="password" placeholder="" />
                                    <span>Password</span>
                                </label>
                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="#">Forget password?</a>
                                    <button class="btn btn-primary btn-lg btn-shadow" type="submit">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default LoginComponent;