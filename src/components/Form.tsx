import  { FC } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface IFormInputs {
  name: string,
  surname: string,
  login: string,
  job: string,
  password: string,
  confirmPassword: string,
  isSuperUsers: boolean,
  file: {}
}
const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  login: yup.string().required(),
  job: yup.string().min(4).max(15).required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  isSuperUsers: yup.boolean().required(),
  file: yup.mixed().required('You need to provide a photo')
});

export const Form : FC<IFormInputs> = ({name, surname ,login,job ,password ,confirmPassword,isSuperUsers,file}) =>  {  
  const { register, handleSubmit, formState: { errors }} = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
      <div className="Form">
      <div className="title">Create User</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("isSuperUsers")} 
        />
        <ErrorMessage
            errors={errors}
            name="isSuperUsers"
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