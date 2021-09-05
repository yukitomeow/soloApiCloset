import { useState, useEffect } from 'react'
import React from 'react'
import "./styles.css"
import axios from 'axios'


export default function App() {

    useEffect(() => {//instead of using fetch use Axios
        axios.get("/items")//if I deploy to heroku i can do relative path ("/items")
            .then(response => response.data)
            .then(data => data)
    }, [])

    const [closetData, setClosetData] = useState(data)





    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Color</th>
                        <th>Season</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dress</td>
                        <td>Pink</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

















