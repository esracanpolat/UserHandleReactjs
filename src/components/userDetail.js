import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../Recoil/atomRecoil';

const UserDetail = () => {
    const [userDetails, setUserDetails] = useRecoilState(userState);
    const { userID } = userDetails;
    const [userDetailInfo, setuserDetailInfo] = useState()
    useEffect(() => {
        if (userID) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
                .then((resp) => (
                    setuserDetailInfo(resp.data)
                ))
        }
    }, [userID]);

    return (
        <div className="userDetail">
            <div className="form">
                <div className="col m-2 mt-4" style={{ padding: 50 }}>
                    <div className="row text center mb-4 ml-2">
                        User Detail Form
                    </div>
                    <div className="row">
                        <div className="col-4">Name:</div>
                        <div className="col-8">
                            <input type="text" className="form-input" placeholder={userDetailInfo && userDetailInfo.name} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4" >User Name:</div>
                        <div className="col-8">
                            <input type="text" className="form-input" placeholder={userDetailInfo && userDetailInfo.username} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">Street:</div>
                        <div className="col-8">
                            <input type="text" className="form-input" placeholder={userDetailInfo && userDetailInfo.address && userDetailInfo.address.street} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">City:</div>
                        <div className="col-8">
                            <input type="text" className="form-input" placeholder={userDetailInfo && userDetailInfo.address && userDetailInfo.address.city} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
