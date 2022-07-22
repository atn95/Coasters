import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Coasters = () => {
  let { coasterId } = useParams()
  const [coasters, setCoasters] = useState(null)

  useEffect(() => {
    const getCoaster = async () => {
      const res = await axios.get(`http://localhost:3001/coasters/${coasterId}`)
      console.log(res.data)

      setCoasters(res.data)
    }
    getCoaster()
  }, [coasterId])
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
      color: `white`
    }
  }
  return (
    <div style={styles.container}>
      <h1> {coasters != null ? coasters.name : ''} </h1>
      <img src={coasters != null ? coasters.image : ''} />
      <h2>{coasters != null ? coasters.description : ''}</h2>
    </div>
  )
}

export default Coasters
