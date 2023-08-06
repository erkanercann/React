import React, { useRef, useState } from 'react';
import User from './User';

const getUsersFromStorage = () => {
    const users = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];
    return users;
};
const setUsersToStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

function Form(props) {
    const { children } = props;

    const [users, setUsers] = useState(getUsersFromStorage());
    localStorage.setItem('users', JSON.stringify(users));

    // EDIT MODE
    const [editMode, setEditMode] = useState(false);

    const userInputRef = useRef(null);

    // Add User
    const onAddUser = (e) => {
        e.preventDefault();

        const newUser = userInputRef.current.value.toUpperCase();
        if (newUser === '') {
            showAlert('This field cannot be left empty!');
            return;
        }
        if (users.includes(newUser)) {
            showAlert('This person has already been added');
            return;
        }
        if (editMode) {
            const prevUser = document.querySelector('.edit-mode').innerText;

            const updateUsers = users.filter((user) => user !== prevUser);
            updateUsers.push(newUser);
            setUsers(updateUsers);
            setUsersToStorage(updateUsers);
            setEditMode(false);
            document.querySelector('.edit-mode').classList.remove('edit-mode');
        } else {
            const newUsers = [...users, newUser];

            setUsers(newUsers);
            setUsersToStorage(newUsers);
        }

        userInputRef.current.value = '';
    };

    // Show Alert DOM
    const showAlert = (message) => {
        const div = document.createElement('div');
        div.classList.add('alert');
        div.innerHTML = `
            <p class='alert__title'>${message}</p>
        `;

        document.querySelector('#alert').appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1000);
    };

    // Remove User

    const removeUser = (userName) => {
        const filterUsers = users.filter((user) => user !== userName);
        setUsers(filterUsers);
        setUsersToStorage(filterUsers);
    };

    // Edit Mode
    const editUser = (userName) => {
        if (editMode) {
            setEditMode(false);
            userInputRef.current.value = '';
            document.querySelectorAll('.user-info').forEach((li) => {
                li.classList.remove('edit-mode');
            });
        } else {
            setEditMode(true);
            userInputRef.current.value = userName;
            document.querySelectorAll('.user-info').forEach((li) => {
                if (li.innerText === userName) {
                    li.classList.add('edit-mode');
                } else {
                    li.classList.remove('edit-mode');
                }
            });
        }
    };
    return (
        <>
            <form className="user-form" onSubmit={onAddUser}>
                {children}
                <input
                    className="user-input"
                    type="text"
                    placeholder="Please enter your name"
                    ref={userInputRef}
                />
                <button type="submit" className={`add-user ${editMode ? 'edit' : ''} `}>
                    {editMode ? 'Edit' : 'Add'}
                </button>
            </form>
            <ul className="user-list">
                {users.map((user, index) => {
                    return (
                        <User
                            key={index + 1}
                            userName={user}
                            removeUser={removeUser}
                            editUser={editUser}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default Form;
