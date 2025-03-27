import logo from './Cruise0-logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LogInButton from './LogInbutton';
import LogOutButton from './LogOutButton';
import Profile from './Profile';

function App() {
const { user, isAuthenticated, isLoading, } =useAuth0();

if (isLoading){
  return <div>Loading ... </div>  
}

// Show error if email is not verified
if (isAuthenticated && user && !user.email_verified) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
        <h1>To come aboard, please verify your email address.</h1> Cruise0
        </p>
        <LogOutButton />
      </header>
    </div>
  );
}

  return (
    <div className="App">
      <header className="App-header">
        { isAuthenticated && <Profile></Profile>}
        <img src={logo} className="App-logo" alt="logo" />
        {!isAuthenticated && (
      <>
        <p> <h1>Log in to book your travel with Cruise0.</h1>    </p>
        <LogInButton />
      </>
  )      }

{isAuthenticated && (
  <>
  <h2>
  Where your adventure begins.
  </h2>
   <LogOutButton />
  </>
)}
      
       
      </header>
    </div>
  );
}

export default App;
