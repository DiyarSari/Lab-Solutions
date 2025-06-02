import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:action" element={<UserForm />} />
          <Route path="/user/:action/:id" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 