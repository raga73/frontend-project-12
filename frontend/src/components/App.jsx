import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
