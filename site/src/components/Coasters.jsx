import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Coasters = () => {
    
    let {coasterId} = useParams()
    const [coasters, setCoasters] = useState([])
    
    useEffect(() => { 
    const getCoaster = async () => {
        const res = await axios.get(`http://localhost:3001/coasters/62d99eb5e913ef5b92f13b91`)
        console.log(res.data)
        
        //setCoasters(res.data)
    }
        getCoaster()
},[coasterId])
console.log(coasterId)
    const styles = {
		container: {
			borderRadius: `10px`,
			backgroundColor: `rgb(0,0,0)`,
			opacity: `1`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `center`,
            alignItems: `center`,
            color: `white`,
		},
	}
    return (
        <div style={styles.container}>
            <h1> {coasters.length>0 ? coasters[0].name: ''} </h1>
            <img src={coasters.length>0 ? coasters[0].image: ''} />
            <h2>{coasters.length>0 ? coasters[0].description: ''}</h2>



            
        </div>
    )
}

export default Coasters