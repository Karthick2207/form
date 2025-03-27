import logo from './logo.svg';
import './App.css';
import StudentRegistrationForm from './components/StudentRegistrationForm';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/student">Student Registration</Link>
      <Link to="/employee">Employee Feedback</Link>
      <StudentRegistrationForm />
    </div>
    </Routes>
    <Routes path="/"element={<Navigate to="/student"/>}/>
    <Routes path="/student"element={="/studentRegistrationForm"/>}/>
      <Routes path="/employee"element={="/EmployeeFeedbackForm"/>}/>
        </Routes>
        
    <
  );

}

export default App;