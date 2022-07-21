import React from 'react'
import Search from './Search'

const Home = () => {
    return(
        <div>
            <div>
                 <h1 className = 'coasterTitle'> Coaster Crazy </h1>
            </div>
            <div>
                <Search/>
            </div>
            <div className = 'parks'>
                <p>park 1</p>
                <p>park 2</p>
                <p>park 3</p>
                <p>park 4</p>
                <p>park 5</p>
                <p>park 6</p>
            
            </div>
            
        </div>
    )
}

export default Home