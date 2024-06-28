
import { Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import CreateAccount from './components/CreateAccount';
import Users from './components/Users';
import Layout from './Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div >
  )
}
export default App;
