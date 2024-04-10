import React, { useEffect, useState } from "react";

export default function Home() {
    const [location, setLocation] = useState('');
    
    useEffect(() => {
        if (!location){
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
        error => {
            console.error('Error fetching data:', error);
        })};
    },[])

    return (
        <div>
            Home
            {location && <p>{location}</p>}
        </div>
    )
}