import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import FeatureOne from '@modules/feature-one';
import FeatureTwo from '@modules/feature-two';
import NotFound from '@components/notfound/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeatureOne />} />
        <Route path="feature-one" element={<FeatureOne />} />
        <Route path="feature-two" element={<FeatureTwo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App