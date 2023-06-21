import { Link, useLoaderData } from "react-router-dom";
import './update.css'

const Update = () => {
    const updateLoaderData = useLoaderData()


    const handelUpdateUser = event =>{
       event.preventDefault()
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const update = {name, email}
       console.log(update)
    fetch(`http://localhost:5000/users/${updateLoaderData._id}`,{
     method:'PUT',
     headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(update)
})
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })

       form.reset()
    }

    return (
        <div>
             <div className="container">
                <h3>Update User </h3>
            <div className='mini__container'>
                <h4>name: {updateLoaderData.name}</h4>
                <p>email:{updateLoaderData.email}</p>
            </div>
            <form onSubmit={handelUpdateUser} action="">
            <input type="text" name="name" defaultValue={updateLoaderData.name} required />
            <input type="email" name="email" defaultValue={updateLoaderData.email} required/>
            <input type="submit" value="update" />
        </form>
        <Link to={'/'}><button>HOME</button></Link>
        </div>
        </div>
    );
};

export default Update;