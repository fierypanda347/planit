import './Schedule.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Schedule() {
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.hasOwnProperty('username')) 
            navigate('/setup')
        // eslint-disable-next-line
    }, []);

    return (
        <div id="schedule" className="Schedule">
            <p>Schedule</p>
        </div>
    )
}