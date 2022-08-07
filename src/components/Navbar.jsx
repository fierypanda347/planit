import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar" id="navbar">
            <div className='logo-div'>
                <img className="logo-img" src="/logo.png" alt="PlanIt Logo" />
                <h1 className='logo-txt'>PlanIt</h1>
            </div>
        </div>
    )
}