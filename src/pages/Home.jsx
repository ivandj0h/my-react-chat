import React from 'react'
import {
    Chat,
    Sidebar
} from '../components'

function Home() {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home