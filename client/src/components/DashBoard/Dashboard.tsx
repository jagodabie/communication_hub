import React, { FC,Fragment} from 'react';

interface IDashboard{
name: string
} 

const Dashboard: FC<IDashboard> = ({ name }) => {
    return(
        <Fragment>
        <div className = "dashboard">
            <h1>Hello, Jagoda nice to meet you!{name}</h1>
        
        </div>

        </Fragment>
  );
}
export default Dashboard;