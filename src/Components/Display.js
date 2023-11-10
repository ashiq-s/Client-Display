import Axios from 'axios';
import { useEffect, useState } from 'react';

import './Display.css'

function Screen() {


    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users').then((res) => {
            // console.log(res.data.users);
            setData(res.data.users);
        })
    }, []);


    const mapping = () => {
        return data.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><img src={item.image} alt="profile-pic" style={{ height: "50px", width: "60px", borderRadius: "50%" }} /></td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.domain}</td>
                    <td>{item.ip}</td>
                    <td>{item.university}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className='header'>Dummy data</div>
            <div className='body'>
                <table className="body_table">
                    <thead>
                        <tr className='border-bottom p-1 text-center'>
                            <th>Sno</th>
                            <th>Profile Pic</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>E-mail</th>
                            <th>Username</th>
                            <th>Domain</th>
                            <th>IP</th>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapping()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Screen;