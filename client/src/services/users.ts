import origin from "../http-common";
import { IUser } from "../interfaces/user";

class UsersDataService {

 getAllUsers () {
    return origin.get<Array<IUser>>("/users");
  }

 getUser (id: string) {
    return origin.get<IUser>(`/users/${id}`);
  }

 creteUser (data: IUser) {
    return origin.post<IUser>("/users", data);
  }

 updateUser (data: IUser, id: any) {
    return origin.put<any>(`/users/${id}`, data);
  }

 deleteUser (id: number) {
    return origin.delete<any>(`/users/${id}`); 
 }
}
export  default new UsersDataService();
