export interface IUser {
    id:number,
    name: string,
    surname: string,
    login: string,
    job: string,
    password: string,
    confirmPassword?: string,
    isSuperUser: boolean,
    isSuperUser_display: string,
    file: string,
    createdAt?: string;
   }
   