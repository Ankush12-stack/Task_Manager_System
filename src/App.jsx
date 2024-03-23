// import React, {useState,useEffect} from "react";
// // import TaskForm from './taskForm';
// // import TaskList from './TaskList';
// import './App.css';
// import TaskDashborad from "./Context/TaskDashborad";
// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     setTasks(storedTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   const handleLogin = (username, password) => {
//     // Simulate authentication (replace with actual authentication logic)
//     if (username === 'Student' && password === 'password') {
//       setUser(username);
//       setError('');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };


//   const handleSignUp = (email, password) => {
//     // Simulate sign up (replace with actual sign-up logic)
//     if (validateEmail(email)) {
//       // If email is valid, simulate successful sign-up
//       setUser(email);
//       setError('');
//     } else {
//       setError('Please enter a valid email address.');
//     }
//   };

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };


//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const updateTask = (taskId, updatedTask) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, ...updatedTask } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="app">
//     {user ? (
//         <>
//           <h1><strong>Welcome To Task Management System</strong> </h1>
//           {/* <TaskForm onAddTask={addTask} /> */}
//           <button onClick={handleLogout}>Sign out</button>
//           {/* <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} /> */}
//           <TaskDashborad/>
//         </>
//       ) : (
//         <LoginForm onLogin={handleLogin} onSignUp={handleSignUp} error={error} />
//       )}
//     </div>
//   );
// }

// function LoginForm({ onLogin, error }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="login-form">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
     
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import './App.css';
import TaskDashborad from "./Context/TaskDashborad";
import SignUpModal from "./SignUpModal"; // Import SignUpModal component

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false); // State to manage visibility of sign-up modal

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleLogin = (username, password) => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'Student' && password === 'password') {
      setUser(username);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSignUp = (email, password) => {
    // Simulate sign-up (replace with actual sign-up logic)
    console.log('Sign Up:', email, password);
    if (validateEmail(email)) {
        // If email is valid, simulate successful sign-up
        setUser(email);
        setError('');
      } else {
        setError('Please enter a valid email address.');
      }
    // Close the sign-up modal
    setShowSignUpModal(false);
  };



  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="app">
      {user ? (
        <>
          <h1><strong>Welcome To Task Management System</strong> </h1>
          <button onClick={handleLogout}>Sign out</button>
          <TaskDashborad/>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} onSignUp={handleSignUp} error={error} />
       
      )}
    </div>
  );
}

function LoginForm({ onLogin, onSignUp, error }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div>
         <h2 className="Header"><b>Login</b></h2>
      {error && <p className="error">{error}</p>}
  
      <form onSubmit={handleLoginSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
       
      </form>
    </div>
  );
}

export default App;
