import {useState,useEffect} from 'react';
import User from './User';
import { IUser } from '../../interfaces/user';
import UsersDataService  from '../../services/users';



const Users =()=>{
    const[Users,setUsers] = useState([] as IUser[]);
    const [id, setId] = useState<number|null>(null);

    const getUsers =() => {
        UsersDataService.getAllUsers()
        .then((response: any)=> {
            const { listOfUsers } = response.data;
            setUsers(listOfUsers)
        })
        .catch((e: Error) => {
            console.log(e);
        });
    }
  
    useEffect(()=>getUsers(), [])
    
    return(
        <div className="users">
            { Users ? Users.map((item)=><User id={item.id} login={item.login} password={item.password} name={item.name} surname={item.name} job={item.job} photo={item.photo} isSuperUser={item.isSuperUser} isSuperUser_display={item.isSuperUser_display}/>):null}
        </div>
    )
}
export default Users;