import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Assets/Styles/signup.css"

function SignUp() {

    const [data, setData] = useState({
        name: "", email: "", password: "", phone: "", user: "entrepreneur"
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
            axios.post("https://pbl2022-project-backend.herokuapp.com/entrepreneur", {
                name: data.name,
                phone: data.phone,
                email: data.email,
                password: data.password,
            }).then(res => {
                console.log("data : ", res);
            })
        }
        else {
            axios.post("https://pbl2022-project-backend.herokuapp.com/investor", {
                name: data.name,
                phone: data.phone,
                email: data.email,
                password: data.password,
            }).then(res => {
                console.log("data : ", res);
            })
        }
    }

    return (
        <div id="signup_container" className="container">
            <form id="signup_form">
                <h3>Sign Up</h3>
                <hr className="signup_hr" />

                <label className="signup_label" htmlFor="name">
                    Name
                </label>
                <input
                    className="signup_input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    onChange={onChangehandle}
                />

                <label className="signup_label" htmlFor="telephone">
                    Telephone Number
                </label>
                <input
                    className="signup_input"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Telephone"
                    pattern="[0-9]{10}"
                    required
                    onChange={onChangehandle}
                />

                <label className="signup_label" htmlFor="email">
                    Email Address
                </label>
                <input
                    className="signup_input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={onChangehandle}
                />

                <label className="signup_label" htmlFor="password">
                    Password
                </label>
                <input
                    className="signup_input"
                    type="password"
                    name="password"
                    id="password"
                    minLength="7"
                    placeholder="Enter Password"
                    onChange={onChangehandle}
                />

                <div className="signup_user" onChange={onChangehandle}>
                    <input
                        className="signup_user_choice"
                        type="radio"
                        id="entrepreneur"
                        name="user"
                        defaultChecked="checked"
                        value="entrepreneur"
                    />
                    <label className="signup_label" htmlFor="entrepreneur">
                        Entrepreneur
                    </label>

                    <input
                        className="signup_user_choice"
                        type="radio"
                        id="investor"
                        name="user"
                        value="investor"
                    />
                    <label className="signup_label" htmlFor="investor">
                        Investor
                    </label>
                </div>

                <button className="btn btn-primary btn-block signup_buttons" onClick={submitData}>Sign Up</button>
                <div id="or">OR</div>
                <Link to="/login" className="btn btn-outline-dark btn-block signup_buttons">Login</Link>
            </form>
        </div>
    );
}
export default SignUp;