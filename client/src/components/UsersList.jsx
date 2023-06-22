import React, {useEffect, useState} from 'react';
import User from "./User";
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "./api";
import Loading from "./Loading";
import InputMask from "react-input-mask";




const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        completed: false
    });
    const [isEditing, setIsEditing] = useState(false)
    const [userID, setUserID] = useState("")
    const {email, phone} = formData;


    const getUsers = async () => {
        setIsLoading(true);
        try {
            // Simulate a 5-second delay using setTimeout
            setTimeout(async () => {
                const {data} = await axios.get(`${BASE_URL}/api/users`);
                setUsers(data);
                console.log(data);
                setIsLoading(false);
            }, 1000);
        } catch (err) {
            toast.error(err.message);
        }
    };

    //?createUser
    const createNewUser = async (e) => {
        e.preventDefault();
        if (email === "" && phone === "") {
            return toast.error("Input field cannot be empty");
        }
        try {
            await axios.post(`${BASE_URL}/api/users`, formData);
            toast.success("Users added")
            setFormData({...formData, email: " ", phone: " "});
            getUsers()
        } catch (err) {
            toast.error(err.message)
            console.log(err)
        }
    }
    //?deleteUser
    const deleteUser = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/api/users/${id}`);
            getUsers();
        } catch (err) {
            toast.error(err.message)
        }
    }
//?getUser
    const getSingleUser = async (user) => {
        setFormData({email: user.email, phone: user.phone, completed: false})
        setUserID(user._id);
        setIsEditing(true)

    }
    //?updatedUser
    const updateUser = async (e) => {
        e.preventDefault();
        if (email === "" || phone === "") {
            return toast.error("Input field cannot be empty.")
        }
        try {
            await axios.put(`${BASE_URL}
/api/users/${userID}`, formData)
            setFormData({email: "", phone: ""});
            setIsEditing(false);
            getUsers();
        } catch (err) {
            toast.error(err.message)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});


    }



    //?useEffects
    useEffect(() => {
        getUsers()
    }, []);



    return (
        <>
            <form action="#" className={"users_form"} onSubmit={isEditing ? updateUser : createNewUser}>
                <input type="text" placeholder={'email'} className={"input_users"} name={"email"} value={formData.email}
                       onChange={handleChange} />
                <InputMask mask={"99-99-99"} placeholder={'number'} className={"input_users"} name={"phone"} value={formData.phone}
                           onChange={handleChange} />
                <button className={"users_btn"} type={"submit"}>{isEditing ? 'Update' : 'Submit'}</button>
            </form>


            {users.length > 0 && (
                <div className="--flex-between --pb">
                    <p>
                        <b>Total Users:</b> {users.length}
                    </p>

                </div>
            )}
            <hr/>
            {isLoading && users?.length === 0 ? (
                <Loading/>

            ) : (<>
                {users?.map((user, index) => {
                    return <User key={`${user}_${index}`} user={user} index={index} deleteUser={deleteUser}
                                 getSingleUser={getSingleUser}


                    />
                })}


            </>)}

        </>
    );
};

export default UsersList;