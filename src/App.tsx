import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
