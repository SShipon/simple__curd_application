/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './user.css'

const User = ({user,handelDeleteUser}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, email, _id} = user
    return (
       
           <div>
            <div className='mini__container'>
                <h4>name: {name}</h4>
                <p>email:{email}</p>
                <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={()=>handelDeleteUser(user._id)}>Delete</button>
            </div>
        </div>
          
       
    );
};

export default User;