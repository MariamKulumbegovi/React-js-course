
import { useEffect } from 'react';
import { Counter } from '../../components/counter/Counter';
import { withUserList } from '../../hoc/withUserList';

const HomePage = ({ userList }) => {
  useEffect(() => {}, [userList]);
  


  return (
    <div className="container">
      <Counter />

      <div >
        {userList.map(user => {
          return  (  
            <div className="box" key={user.id}>
          <div>{user.email} </div>
          <div ><img width="auto" height="auto" src={user.avatar} /></div>
           </div>)
        
        })}
      </div>
    </div>
  );
};

export default withUserList(HomePage);
