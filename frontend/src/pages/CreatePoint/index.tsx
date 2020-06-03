import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet'
import axios from 'axios'

import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'

interface Item {
    id: number,
    title: string,
    image_url: string
}

interface IBGEUFResponse {
    sigla: string
}

const CreatePoint = () => {

    const [items, setItems] = useState<Item[]>([])
    const [states, setStates] = useState<string[]>([])

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data)
        })
    }, [])

    useEffect(() => {
        // this api works only for Brazilian states 
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                const statesInitials = response.data.map(uf => uf.sigla)
                setStates(statesInitials)
            })
    }, [])

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="" />

                <h3>Ecological Waste Management</h3>

                <Link to="/" >
                    <FiArrowLeft />
                    Home
                </Link>
            </header>

            <form>
                <h1>Register a disposal point</h1>

                <fieldset>
                    <legend>
                        <h2>Data</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Place's Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="name">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="whatsapp">Telephone or Whatsapp</label>
                                    <input
                                        type="text"
                                        name="whatsapp"
                                        id="whatsapp"
                                    />
                            </div>
                        </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Address</h2>
                        <span>Select the address on the map</span>
                    </legend>

                    <Map center={[-15.7868392,-47.8723759]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[-15.7868392,-47.8723759]} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">State</label>
                            <select name="uf" id="uf">
                                <option value="0">Select the state</option>
                                { states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">City</label>
                            <select name="city" id="city">
                                <option value="0">Select the city</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Collectable Waste</h2>
                        <span>Select one or more items</span>
                    </legend>

                    <ul className="items-grid">
                        { items.map(item => (
                            <li key={item.id}>
                                <img className="icon" src={item.image_url} alt={item.title}></img>
                             <span>{item.title}</span>
                            </li>  
                        ))}    
                    </ul>
                </fieldset>

                <button type="submit">
                    Register
                </button>
            </form>

        </div>
    )
}

export default CreatePoint