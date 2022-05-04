import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/Styles/login.css"

function Login() {

    const [data, setData] = useState({
        email: "", password: "", user: "entrepreneur"
    });

    let name, value;

    const onChangehandle = (e) => {
        name = e.target.name;
        value = e.target.value;

        setData({ ...data, [name]: value });
    }

    const submitData = (e) => {
        e.preventDefault();
        if (data.user === "entrepreneur") {
            axios.post("https://pbl2022-project-backend.herokuapp.com/entrepreneur/login", {
                email: data.email,
                password: data.password,
            }).then(res => {
                console.log("data : ", res);
            })
        }
        else {
            axios.post("https://pbl2022-project-backend.herokuapp.com/investor/login", {
                email: data.email,
                password: data.password,
            }).then(res => {
                console.log("data : ", res);
            })
        }
    }

    return (
        <div id="login_container" className="container">
            <form id="login_form">
                <h3>Login</h3>
                <hr className="login_hr" />

                <label className="login_label" htmlFor="email">
                    Email Address
                </label>
                <input
                    className="login_input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={onChangehandle}
                />

                <label className="login_label" htmlFor="password">
                    Password
                </label>
                <input
                    className="login_input"
                    type="password"
                    name="password"
                    id="password"
                    minLength="7"
                    placeholder="Enter Password"
                    onChange={onChangehandle}
                />

                <div className="login_user" onChange={onChangehandle}>
                    <input
                        className="login_user_choice"
                        type="radio"
                        id="entrepreneur"
                        name="user"
                        defaultChecked="checked"
                        value="entrepreneur"
                    />
                    <label className="login_label" htmlFor="entrepreneur">
                        Entrepreneur
                    </label>

                    <input
                        className="login_user_choice"
                        type="radio"
                        id="investor"
                        name="user"
                        value="investor"
                    />
                    <label className="login_label" htmlFor="investor">
                        Investor
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block login_buttons" onClick={submitData}>Login</button>
                <div id="or">OR</div>
                <Link to="/signup" className="btn btn-outline-dark btn-block login_buttons">Sign Up</Link>
            </form>
        </div>
    );
}
export default Login;
