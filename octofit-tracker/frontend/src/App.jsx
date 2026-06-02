import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1>OctoFit Tracker</h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <p>Welcome to OctoFit Tracker - Your fitness companion</p>
      <p>Features: Activity logging, Team management, Competitive leaderboard</p>
    </div>
  )
}

export default App
