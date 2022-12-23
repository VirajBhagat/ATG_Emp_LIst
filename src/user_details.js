import  Axios  from 'axios';
import {React, useEffect, useState} from 'react';
import user1 from './static_files/img/user1.png'

function User_details() {
    useEffect(() => {
        Axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users').then(response => {
            setData(response.data)
        })
    }, [])

    const [data,setData] = useState([])
    const [user,setUser] = useState()

    const setUserData = (id) => {
        console.log(id);
        setUser(data[id-1])
    }
    return (
        <main>
            <div className='users_data'>
                <div className='users_list'>
                    <h1>Users List</h1>
                    <ul>
                        {
                                data.map(users => (
                                    <li onClick={() => setUserData(users.id)} key={users.id} id={users.id}>
                                        <img src={user1} alt='' />
                                        <p>{users.profile.firstName + " " + users.profile.lastName}</p>
                                    </li>
                                ))
                        }
                    </ul>
                </div>

                <div className='user_details'>
                    <h1>User Details</h1>
                    {
                        user !== undefined ? (
                            <div className='user_details_data'>
                                <img className='user_details_data_img' src={user1} alt='' />
                                <h6>{"@"+user.profile.username}</h6>
                                <textarea className='bio' value={user.Bio}></textarea>
                                <div className='data'>
                                    <p className='text'>Full Name</p>
                                    <textarea className='name' value={user.profile.firstName + " " + user.profile.lastName}></textarea>
                                </div>
                                <div className='data'>
                                    <p className='text'>Job Title</p>
                                    <textarea className='name' type="text" value={user.jobTitle}></textarea>
                                </div>
                                <div className='data'>
                                    <p className='text'>Email</p>
                                    <textarea className='name' type="text" value={user.profile.email}></textarea>
                                </div>
                            </div>
                        ) : (
                            <div className='user_details_data'>
                                <img className='user_details_data_img' src={user1} alt='' />
                                <h6>{"@"+data[0].profile.username}</h6>
                                <textarea className='bio' defaultValue={data[0].Bio}></textarea>
                                <div className='data'>
                                    <p className='text'>Full Name</p>
                                    <textarea className='name' defaultValue={data[0].profile.firstName + " " + data[0].profile.lastName}></textarea>
                                </div>
                                <div className='data'>
                                    <p className='text'>Job Title</p>
                                    <textarea className='name' type="text" defaultValue={data[0].jobTitle}></textarea>
                                </div>
                                <div className='data'>
                                    <p className='text'>Email</p>
                                    <textarea className='name' type="text" defaultValue={data[0].profile.email}></textarea>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export default User_details;