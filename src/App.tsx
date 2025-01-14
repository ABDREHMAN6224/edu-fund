import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { StudentsPage } from './pages/StudentsPage';
import { StudentDetailPage } from './pages/StudentDetailPage';
import { ChatAssistant } from './components/ChatAssistant';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/student/:id" element={<StudentDetailPage />} />
        </Routes>
        <ChatAssistant />
      </div>
    </Router>
  );
}
export default App;