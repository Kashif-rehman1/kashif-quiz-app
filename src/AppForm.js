import {useState} from 'react';

function App(){
  let [user, setUser] = useState({
    username: '',
    password: '',
    city: ''
  });
 
  // const handleChange = (event) => {
  //   let v = event.target.value;
  //   let n = event.target.name;
 
  //   if(n === "username")
  //   setUser({...user, username: v});
  //   else
  //     setUser({...user, password: v});
  // }


  const handleChange = ({target: {name, value}}) => setUser({...user, [name]: value});

  return(
    <div className="container my-5">
      Username: <input type="text" name="username" value={user.username} onChange={handleChange}/>
      Password: <input type="password" name="password" value={user.password} onChange={handleChange}/>
      City: <input type="text" name="city" value={user.city} onChange={handleChange}/>
      <p> {JSON.stringify(user)} </p>
    </div>
  )
}

export default App;














// import {useState} from 'react';


// function App(){
//   let [username, setUsername] = useState('');
//   let [Password, setPassword ] = useState('');

  
//   const handleChange = (event) => {
//     let v = event.target.value;
//     let n = event.target.name;

//     if(n === "username")
//       setUsername(v);
//       else
//        setPassword(v);
//   }

//     return(
//       <div className="container my-5">
//         Username: <input type="text" name="username" value={username} onChange={handleChange} />
//         Password: <input type="Password" name="password" value={Password} onChange={handleChange} />
//         <h4> {username}, {Password}</h4>
//       </div>
       
//         )
// }


// export default App;




// ------------------------------------------
// import {useState} from 'react';


// function App(){
//   let [username, setUsername] = useState('abc');

//   const handleChange = (event) => {
//     let v = event.target.value;
//     setUsername(v);
//   }

//     return(
//         <>
//       <div className="container my-5">
//         Username: <input type="text" value={username} onChange={handleChange} />
//         <h4>Welcome {username}</h4>
//       </div>
//        </>
//         )
// }


// export default App;