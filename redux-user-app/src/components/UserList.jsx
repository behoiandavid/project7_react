import React from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./AddUserForm";

const UserList = () => {
    const users = useSelector((state) => state.users.list);

    return (
        <div>
            <h2>Список користувачів:</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
            <AddUserForm />
        </div>
    );
};

export default UserList;
