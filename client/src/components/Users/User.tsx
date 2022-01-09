import { FC } from 'react';
import it  from'../../photo/it.png';
import '../../css/User.css';
import { IUser } from '../../interfaces/user';

type Props = {
    user: IUser,
    deleteUserfromList: (id: number) => void;
    editUser: (id: number) => void;
}
  const User: FC<Props> = ({ user,deleteUserfromList,editUser }) => {   
    return(
     <div className = "user-field">
        <div className="user-icon">
          <div className="fill-div">
            <img src={it} alt='avatar' className='user-icon img-user'/> 
          </div>
        </div>
          <div className="user-name">
            Imię i nazwisko<br/>
            <strong>{user.name} {user.surname} </strong>
            <br/>
            Stanowisko<br/>
            <strong>{user.job}</strong><br/>
            Poziom uprawnień w aplikacji<br/>
            <strong>{ user.isSuperUser ?"Administrator Sytemu":"Użytkownik zwyczajny" }</strong>
          </div>
          <div className = "user-action">
            <i className="far fa-trash-alt" onClick={()=>deleteUserfromList(user.id)}></i>
            <i className="far fa-edit" onClick={()=>editUser(user.id)}></i>
          </div>
      </div>   
    )
 };

export default User;