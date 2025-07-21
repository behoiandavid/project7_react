import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const AddUserForm = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            dispatch(addUser(name));
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Ім’я користувача"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    );
};

export default AddUserForm;