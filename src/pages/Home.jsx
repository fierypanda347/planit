import './Home.css'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate()
  
  return (
    <div className="Home" id="home">
      <div className="home-title-box">
        <div className="title-div">
          <img className="title-img" src="/logo.png" alt="PlanIt Logo" />
          <h1 className="title">PlanIt</h1>
        </div>
        <h2 className="sub-title">The Responsive Automatic Scheduler Made for You</h2>
        {
          localStorage.hasOwnProperty('username')
            ? <div className="action-div" onClick={() => {
                navigate("/schedule")
              }}>
                <p className="action-div-text">View your Schedule</p>
                <ArrowForward />
              </div>
            : <div className="action-div" onClick={() => {
                navigate("/setup")
              }}>
                <p className="action-div-text">Set up PlanIt</p>
                <ArrowForward />
              </div>
        }
      </div>
    </div>
  )
}