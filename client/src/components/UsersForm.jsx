import React from 'react';
import InputMask from 'react-input-mask';


const UsersForm = ({email, phone, isEditing,  updateUser,createNewUser}) => {
    return (
        <>
            {/*<form action="#" className={"users_form"} onSubmit={isEditing ? updateUser : createUser}>*/}
            {/*    <input type="text" placeholder={'email'} className={"input_users"} name={"email"} value={email}*/}
            {/*           onChange={handleInputChange}/>*/}
            {/*    <InputMask mask={"99-99-99"} placeholder={'number'} className={"input_users"} name={"phone"} value={phone} onChange={handleInputChange}/>*/}
            {/*    <button className={"users_btn"} type={"submit"}>{isEditing ? 'Update' : 'Submit'}</button>*/}
            {/*</form>*/}
            <form action="#" className={"users_form"} onSubmit={isEditing ? updateUser : createNewUser}>
                <input type="text" placeholder={'email'} className={"input_users"} name={"email"}
                       onChange={h} value={formData.email}/>
                <InputMask mask={"99-99-99"} placeholder={'number'} className={"input_users"} name={"phone"}  onChange={(e)=>setFormData({...formData,phone:e.target.value })} value={formData.phone}/>
                <button className={"users_btn"} type={"submit"}>{isEditing ? 'Update' : 'Submit'}</button>
            </form>

        </>
    );
};

export default UsersForm;
