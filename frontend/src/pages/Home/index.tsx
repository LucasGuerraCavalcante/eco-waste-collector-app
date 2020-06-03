import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'
import logo from '../../assets/logo.svg'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecological Waste Management" />
                    <h3>Ecological Waste Management</h3>
                </header>
                

                <main>
                    <h1>Garbage Management Marketplace</h1>
                    <p>Helping people to find ecological and efficient waste disposal points.</p>

                    <a href="/register">
                        <span>
                           <FiLogIn />
                        </span>
                        <strong>Register a disposal point</strong>
                    </a>
                </main>
            </div>
        </div>
    )
}

export default Home