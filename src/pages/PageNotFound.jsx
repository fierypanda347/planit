import './PageNotFound.css'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    let navigate = useNavigate();

    return (
        <div className="PageNotFound" id="pageNotFound">
            <div className="pnf-img-div">
                <img src="/pageNotFound.jpg" alt="404: Page Not Found" className='pnf-img' />
            </div>
            <div className="pnf-action-div" onClick={() => {
                navigate('/')
            }}>
                <div className="pnf-home-button">
                    <p className="pnf-home-btn-text">Go to Home</p>
                    <ArrowForward />
                </div>
            </div>
        </div>
    )
}