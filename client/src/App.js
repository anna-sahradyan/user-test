import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

axios.defaults.withCredentials = true;
const App = () => {
    return (
        <>
            <div className={"app"}>
                <div className={"form-container"}>
                    <div className="users_container">
                        <div className="users_wrapper">
                            <Layout>
                                <Home/>
                            </Layout>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
};

export default App;
