import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }


    toggle = () => {
        const { open } = this.state
        this.setState({ open: !open })
    }



    render() {
        return (
            <Fragment>
                <header className='menu'>
                    <div className='mobile-logo'>

                    </div>
                    <div onClick={this.toggle} class='mobile-btn'>☰</div>
                </header>
                <div className={`nav ` + (this.state.open ? '' : ' hide')}>
                    <div className='desktop-logo'>
                        <img id="dashboard-logo" className="" alt="placeholder" src={require('../../assets/frontpage/shellhacks.svg')} />
                        <img id="dashboard-shell" className="" alt="placeholder" src={require('../../assets/frontpage/shell.svg')} />
                    </div>
                    <ul>
                        <li className='toggle'><div onClick={this.toggle} >X</div></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/dashboard/application">Application</Link></li>
                        <li><Link to="/dashboard/schedule">Schedule</Link></li>
                        <li><Link to="/dashboard/profile">Profile</Link></li>
                        <li><Link to="/dashboard/faq">FAQ</Link></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Navbar;