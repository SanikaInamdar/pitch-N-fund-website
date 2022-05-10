import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

function SignUp() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: "", email: "", password: "", phone: "", usertype: "entrepreneur"
    });

    const [isValid, setIsValid] = useState(true);

    let name, value;

    const onChangehandle = (e) => {
        name = e.target.name;
        value = e.target.value;

        setCredentials({ ...credentials, [name]: value });
    }

    function Invalid() {
        if (!isValid) {
            return (
                <p id="invalid-user">
                    Email is Invalid or Already taken.
                </p>
            );
        }
    }

    const submitData = async (e) => {
        e.preventDefault();
        const name = credentials.name;
        const phone = credentials.phone;
        const email = credentials.email;
        const password = credentials.password;
        let result;
        if (credentials.usertype === "entrepreneur") {
            result = await fetch('https://pbl2022-project-backend.herokuapp.com/entrepreneur', {
                method: 'post',
                body: JSON.stringify({name, phone, email, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            result = await fetch('https://pbl2022-project-backend.herokuapp.com/investor', {
                method: 'post',
                body: JSON.stringify({name, phone, email, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log(result.status);
        if(result.status === 201){
            result = await result.json();
            let user = {
                name: result[credentials.usertype].name,
                token: result.token, 
                usertype: credentials.usertype
            };
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        }
        else{
            setIsValid(false);
        }
    }

    return (
        <Layout>
            <div id="signup_container" className="container">
                <form id="signup_form">
                    <h3 id="signup_heading">Sign Up</h3>
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

                    <label className="signup_label" htmlFor="phone">
                        Telephone Number
                    </label>
                    <input
                        className="signup_input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Telephone"
                        pattern="[0-9]{10}" required
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
                            name="usertype"
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
                            name="usertype"
                            value="investor"
                        />
                        <label className="signup_label" htmlFor="investor">
                            Investor
                        </label>
                    </div>

                    <Invalid />
                    <button className="btn btn-primary btn-block signup_buttons" onClick={submitData}>Sign Up</button>
                </form>
            </div>
        </Layout>
    );
}
export default SignUp;