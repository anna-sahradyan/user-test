import React from 'react';
import {FaEdit, FaRegTrashAlt} from "react-icons/fa";

const User = ({user, index, getSingleUser,  deleteUser}) => {
    return (
        <>
            <div className={user.completed? "user  completed":"user"}>
                <p><b>{index + 1}. </b>
                    {user.email}

                </p>
                <div className="user_icons">
                    <FaEdit color={"purple"} onClick={() => getSingleUser(user)}/>
                    <FaRegTrashAlt color={"red"} onClick={() => deleteUser(user._id)}/>

                </div>
            </div>
            <div className={"user completed"}>
                <p><b>{index + 1}. </b>
                    {user.phone}

                </p>
                <div className="user_icons">
                    <FaEdit color={"purple"} onClick={() => getSingleUser(user)}/>
                    <FaRegTrashAlt color={"red"} onClick={() => deleteUser(user._id)}/>

                </div>
            </div>
        </>
    );
};

export default User;
