import './App.css';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Single from './pages/single';
import './UI/css/index.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/single-item/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
