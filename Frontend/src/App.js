import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Root />}>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
