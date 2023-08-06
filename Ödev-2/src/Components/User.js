import React from 'react';

function User(props) {
    const { userName, removeUser, editUser } = props;
    return (
        <li className="user-info">
            {userName}
            <button className="btn btn-edit" onClick={() => editUser(userName)}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-close" onClick={() => removeUser(userName)}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </li>
    );
}

export default User;
