import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { StudentsPage } from './pages/StudentsPage';
import { ChatAssistant } from './components/ChatAssistant';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';
import { StudentProvider } from './context/studentContext';
import StudentDetails from './pages/StudentDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/students" element={
            <StudentProvider>
              <StudentsPage />
            </StudentProvider>
            } />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}
export default App;