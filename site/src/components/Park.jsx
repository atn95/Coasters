import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Park = () => {
  let { parkId } = useParams();
  const [coasters, setCoasters] = useState([]);

  useEffect(() => {
    async function getCoasters() {
      const res = axios
        .get(`http://localhost:3001/park/coaster/${parkId}`)
        .then((res) => {
          console.log(res.data);
          console.log(parkId + "1234");
          setCoasters(res.data);
        });
    }
    getCoasters();
  }, [parkId]);

  return (
    <div className="parkPage">
      <main>
        {coasters.map((coaster) => (
          <div key={coaster.name}>
            <h1>{coaster.name}</h1>
            <img src={coaster.image} />
            <p className="info">Top Speed: {coaster.top_speed}</p>
            <p className="info">Duration: {coaster.duration}</p>
            <p className="info">Max Altitude: {coaster.height}</p>
            <p className="info"> {coaster.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Park;
