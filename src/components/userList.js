import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from "../Recoil/atomRecoil";
import produce from 'immer';
import { useHistory } from 'react-router';

const UserList = () => {
    const [userLists, setUserLists] = useRecoilState(userState);
    const { users } = userLists;
    const history = useHistory();
    useEffect(() => {
        const resp = axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((data) => {
                setUserLists(
                    produce((draft) => {
                        draft.users = data ? data.data : null;
                    }));
            })
    }, []);

    function userDetail(e, user) {
        e.preventDefault();
        setUserLists(
            produce((draft) => {
                draft.userID = user;
            })
        )
        history.push(`/userDetails`)
    }
    return (
        <div className="user-list">
            <table className="table table-size" >
                <thead className="table-active">
                    <tr>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.username}</td>
                            <td>{row.email}</td>
                            <td><button className="btn btn-info" onClick={(e) => userDetail(e,row.id)}>Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
