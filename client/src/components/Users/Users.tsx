import {useState,useEffect,FC} from 'react';
import User from './User';
import { IUser } from '../../interfaces/user';
import UsersDataService  from '../../services/users';
import { useHistory } from 'react-router-dom';
import { Alerts } from '../ui/layout/Alerts';

  const Users: FC = () =>{
    const[users,setUsers] = useState([] as IUser[]);
    const[showAlert,setShowAlert] = useState<boolean>(false);
    const[successAlert,setSuccessAlert] = useState<boolean>(false);
    // TO DO add global store
    let history =useHistory();
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
    const handleShowAlert = () =>{
        setShowAlert(!showAlert);
    }
    const deleteUserfromList = (id: number)=>{
        UsersDataService.deleteUser(id)
        .then(({data}: any)=> {
            setUsers(users.filter((item:IUser)=> item.id !== id));
            setShowAlert(true);
            setSuccessAlert(true);
        })
        .catch((e: Error) => {
            console.log(e);
            setShowAlert(true);
            setSuccessAlert(false)
        })

    }
    const editUser = (id:number)=>{
        history.push(`/editUser/${id}`)
    } 
    useEffect(()=>getUsers(), [])
    
    return(
        <div className="users">
           {showAlert? <Alerts successAlert={successAlert} handleShowAlert={handleShowAlert} showAlert={showAlert}/>:null}
            { users ? users.map((item)=>(
                <User 
                    key={item.id} 
                    user={item} 
                    deleteUserfromList={deleteUserfromList}
                    editUser={editUser}
                />
                )):null }
        </div>
    )
}
export default Users;