import React from "react";
import './footer.css';

export default function Star({ rating, setRating }) {
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setRating(index)}
                    >
                        {index <= rating ? "★" : "☆"}
                    </button>
                );
            })}
        </div>
    );
}

