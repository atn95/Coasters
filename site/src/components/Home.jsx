import React from 'react'
import Search from './Search'

const Home = () => {

    const parks = ['Park_pic','Park_pic','Park_pic','Park_pic','Park_pic','Park_pic','Park_pic'];

const styles = {
        flexContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            border: '2px solid red',
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: `repeat(${parks.length / 3}, 1fr)`,
        },
    };




    return(
        <div>
            <div>
                 <h1 className = 'coasterTitle'> Coaster Crazy </h1>
            </div>
            <div>
                <Search/>
            </div>
            <div className = 'parks' style = {styles.gridContainer}>
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