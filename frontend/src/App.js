import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Sample from './pages/Sample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default App;
