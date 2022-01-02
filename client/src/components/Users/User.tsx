import React, { FC } from 'react';
import it  from'../../photo/it.png';
import '../../css/User.css';
import { IUser } from '../../interfaces/user';

import UsersDataService  from '../../services/users';

  const User: FC<IUser> = ({ id, login, password, name, surname, job, photo ,isSuperUser ,isSuperUser_display }) => {
    const handleDeleteUser = () => {
      UsersDataService.deleteUser(id)
        .then((response: any)=> {
          console.log(id+"delete")
            
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }
    const handleEditUser = () => {
     
    }
    
    return(
     <div className = "user-field">
        <div className="user-icon">
          <div className="fill-div">
            <img src={it} alt='avatar' className='user-icon img-user'/> 
          </div>
        </div>
          <div className="user-name">
            Imię i nazwisko<br/>
            <strong>{name} {surname} </strong>
            <br/>
            Stanowisko<br/>
            <strong>{job}</strong><br/>
            Poziom uprawnień w aplikacji<br/>
            <strong>{ isSuperUser ?"Administrator Sytemu":"Użytkownik zwyczajny" }</strong>
          </div>
          <div className = "user-action">
            <i className="far fa-trash-alt" onClick={handleDeleteUser}></i>
            <i className="far fa-edit"></i>
          </div>
      </div>   
    )
 };

export default User;