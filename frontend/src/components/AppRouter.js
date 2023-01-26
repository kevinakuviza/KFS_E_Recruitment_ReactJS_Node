import { BrowserRouter, Routes,Route } from 'react-router-dom';
import MultipleInputs from '../components/forms/multipleInputs';
import Login from '../components/forms/login';
import HomePage from './HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        
        <Routes>
          <Route path="/" element={HomePage} exact={true} />
          <Route path="/Signup" element={MultipleInputs} />
          <Route path="/login" element={Login} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;