import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    return (
        <div className="Navbar" id="navbar">
            <div className='logo-div'>
                <img 
                    className="logo-img"
                    src="/logo.png"
                    alt="PlanIt Logo" 
                    onClick={() => {
                        navigate('/')
                    }}
                />
                <h1 
                    className='logo-txt'
                    onClick={() => {
                        navigate('/')
                    }}
                >PlanIt</h1>
            </div>
        </div>
    )
}