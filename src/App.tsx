import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage.tsx'; // Your existing home page
import LoadCharacter from './pages/LoadCharacter.tsx';
import NewCharacter from './pages/NewCharacter.tsx';
import Settings from './pages/Settings.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-character" element={<NewCharacter />} />
        <Route path="/load-character" element={<LoadCharacter />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;

