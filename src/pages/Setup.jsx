import './Setup.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tv, ArrowForward } from '@mui/icons-material'

export default function Setup() {
    const initialValues = {
        username: ""
    }
    let [ values, setValues ] = useState(initialValues)
    let navigate = useNavigate()

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    useEffect(() => {
        if(localStorage.hasOwnProperty('username')) 
            navigate('/schedule')
        // eslint-disable-next-line
    }, []);

    return (
        <div id="setup" className="Setup">
            <img src="/logo.png" alt="" className="setup-bg-logo" />
            <div className="setup-form-box">
                <div className="setup-title-div">
                    <Tv className='setup-icon' />
                    <h1 className="setup-title">Set Up</h1>
                </div>
                <div className="setup-questions">
                    <p className="setup-q-prompt">What should we call you?</p>
                    <input 
                        type="text" 
                        placeholder='Enter your name'
                        className="setup-q setup-q-text-field"
                        name='username'
                        value={values.username}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    { values.username !== "" &&
                        <div className="setup-q-submit" onClick={() => {
                            localStorage.setItem("username", values.username)
                            navigate('/schedule')
                        }}>
                            <p className="setup-q-submit-txt">Submit</p>
                            <ArrowForward className="setup-q-submit-icon" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}