import {useEffect, useState} from 'react';
import userImage from './userImage.svg';
import user2 from './user2.svg';
import user3 from './user3.svg';
import Overlay from './components/overlay'
import './App.css';

function App() {
const userList = [{
  "image": userImage,
  "id": 1,
  "firstName": "Hoya",
  "lastName":"Kerri",
  "walletBalance": 400000
},
{
  "image": user2,
  "id": 2,
  "firstName": "Abc",
  "lastName":"Def",
  "walletBalance": 100000
},
{
  "image": user3,
  "id": 3,
  "firstName": "Layi",
  "lastName":"Wasabi",
  "walletBalance": 670000
}
]
  const [users, setUsers] = useState(userList)
  const [walletBalance, setwalletBalance] = useState()
  const [overlay, setOverlay] = useState(false)
  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(userList));
  }, [users]);




  return (
    <>
    <div className="App">
      <div className="container">
        <ul className="userList">
          {users.map((user, index)  => (
<li className="userItem" key={index} onClick={() => {
  setwalletBalance(user.walletBalance)
  
  }}>
<img src={user.image} alt="user-iamge" className="userImage"/>
<p className="userName">{user.firstName} {user.lastName}</p>
</li>
            ))}

        </ul>
        <div className="detailsContainer">
<p>Wallet Balance</p>
<p className='amount'>{walletBalance ? 'N'+walletBalance : ''}</p>
<div className="buttons">
<button className="w-button" onClick={() =>  {setOverlay(!overlay) 
console.log('opened')
}}>Withdraw</button>
<button className="d-button">Deposit</button>
</div>
        </div>
      </div>
    </div>
          {overlay ? <Overlay/> : ''}
          </>
  );
}

export default App;
