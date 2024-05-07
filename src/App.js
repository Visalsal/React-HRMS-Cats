import logo from './logo.svg';
import './App.css';
import MainLayoutLayout from './components/layout/Layout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageTest from './pages/pagetest';
import LeavePage from './pages/leavePage/leavePage';
import InfoPage from './pages/infoPage/info';
import LeaveRequest from './pages/leavePage/myleave';
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayoutLayout />}>
            <Route path="/dashboard" element={<PageTest />} />
            <Route path="/leave" element={<LeavePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/leave-request" element={<LeaveRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
