import reactLogo from '@/assets/react.svg'
import './styles.css'
import AppContext from '../../contexts/AppContext'
import { useContext } from 'react'

export default function Header() {
    const { isLogin, setIsLogin } = useContext(AppContext)
    console.log(isLogin)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>

                <div className="">
                    { isLogin ? 'Log Out' : 'Connextion' }
                </div>
            </div>
        </nav>
    )
}