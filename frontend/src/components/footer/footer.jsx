import React, {useState} from "react";
import './footer.css';
import Star from './Star.jsx';

export default function Footer() {

    const [rating, setRating] = useState(0);

    return (
        <footer>

            <div><Star rating={rating} setRating={setRating}/>
            <span className="Rating">Rating Us</span></div><br />

            <span className="Slogan">AccuWeather . The Most Accurate . Forecasting System</span><br />

            <br /><span className="Copyright">@Copyright 2024</span>
        </footer>
    )
}