import  { FC, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUser } from '../../interfaces/user';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import UsersDataService  from '../../services/users';

interface RouteParams {
  id: string;
}
const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  login: yup.string().required(),
  job: yup.string().min(4).max(15).required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  isSuperUser: yup.boolean().required(),
  file: yup.string().required('You need to provide a photo')
});

export const  UsersForm : FC = () =>  {  
  const[ user, setUser ] = useState<IUser | null>(null);
  const { register, handleSubmit, formState: { errors }} = useForm<IUser>({
    resolver: yupResolver(schema),
  });
 const params = useParams<RouteParams>();

 const createUser = (data: IUser) => {
  UsersDataService.creteUser(data)
}
const updateUser = (data: IUser) =>{
  UsersDataService.updateUser(data, params.id)
}
const service = params.id ? updateUser : createUser;

useEffect(()=>{ UsersDataService.getUser(params.id)
              .then(({data})=> setUser(data))},[])

  return (
      <div className="Form">
      <div className="title">Create User</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(service)}>
        <label htmlFor="name" className="form-input__label">Name</label>
          <input
            {...register("name")} 
            placeholder="First Name..."
          />
        <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className = "error">{message}</p>}
        />
       <label htmlFor="surname" className="form-input__label">Surname</label>
        <input
            placeholder="Last Name..."
            {...register("surname")} 
        />
        <ErrorMessage
            errors={errors}
            name="surname"
            render={({ message }) => <p className = "error">{message}</p>}
        />
       <label htmlFor="login" className="form-input__label">Login</label>
        <input
            placeholder="Login..."
            {...register("login")} 
        />
        <ErrorMessage
            errors={errors}
            name="login"
            render={({ message }) => <p className = "error">{message}</p>}
        />
        <label htmlFor="job" className="form-input__label">Job</label>
        <input
            placeholder="Job..." 
            {...register("job")} 
        />
        <ErrorMessage
            errors={errors}
            name="job"
            render={({ message }) => <p className = "error">{message.substring(0,message.indexOf(","))}</p>}
        />
        <label htmlFor="password" className="form-input__label">Password</label>
        <input
            placeholder="Password..."
            {...register("password")} 
        />
        <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className = "error">{message}</p>}
        />
        <label htmlFor="password" className="form-input__label">Confirm Password</label>
        <input
            placeholder="Confirm Password..."
            {...register("confirmPassword")} 
        />
        <ErrorMessage
            errors={errors}
            name="confirmPassword"
            render={({ message }) => <p className = "error">{message.substring(0,message.indexOf(":"))}</p>}
        />
        <label htmlFor="isSuperUsers" className="form-input__label">Will user be an admin ?</label>
        <input
            type="checkbox"
            id="form-input__checkbox"
            {...register("isSuperUser")} 
        />
        <ErrorMessage
            errors={errors}
            name="isSuperUser"
            render={({ message }) => <p className = "error">{message}</p>}
        />
        <input
          type="file"
          id="form-input__file"
          {...register("file")} 
        />
        <ErrorMessage
            errors={errors}
            name="file"
            render={({ message }) => <p className = "error">{message}</p>}
        />
        <input type="submit" id="submit" value = "Submit"/>
        </form>
      </div>
    </div>
  );
}