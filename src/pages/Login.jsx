import React, { useState } from "react";
import axiosInstance from "../config/axiosConfig";
import toast from "react-hot-toast";

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // login logic
        axiosInstance
            .post("/login", formValues)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response.data.message);
            });
    };

    return (
        <div className=" flex justify-center flex-col gap-5 items-center h-screen">
            <h1 className=" text-4xl font-bold">Login here..</h1>
            <form onSubmit={handleLogin} className=" flex flex-col gap-4 bg-gray-100 rounded-2xl p-10 w-xl mx-auto">
                <input
                    className=" border px-4 py-2 outline-lime-300 rounded"
                    value={formValues.email}
                    type="email"
                    onChange={handleChange}
                    placeholder=" Enter your email"
                    name="email"
                />
                <input
                    className=" border px-4 py-2 outline-lime-300 rounded"
                    value={formValues.password}
                    type="password"
                    onChange={handleChange}
                    placeholder=" Enter your password"
                    name="password"
                />
                <button className="border px-4 py-2 outline-lime-300 cursor-pointer bg-amber-400 rounded ">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
