import React, { useEffect, useState } from 'react'
import './ShowData.css'

import {
    Link

} from "react-router-dom";


function ShowData(props) {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, []);

    

    return (
        <body style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'images/bghome.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex-container">
                {records.map((list, index) => (
                    <div key={index}>
                        
                        <div className="card w-100 h-100">
                            <div className="img">
                                {list.show.image && list.show.image.original && (
                                    <img
                                        src={list.show.image.original = (list.show.image.original !== null) ? list.show.image.original : 'images/backgroudmoview.jpg'
                                    }
                                        className="card-img-top"
                                        alt='HEY'
                                        style={{ height: '440px' }}
                                        
                                    />
                                )}
                            </div>


                            <div className="card-body">
                                <h1 className="card-title">{list.show.name}</h1>
                                <p className="card-text">{list.show.language}</p>
                                <Link to="/MovieBooking" state={{ data: list.show.name }} className="btn btn-primary">More</Link>

                            </div>
                        
                        </div>
                    </div>

                ))}
            </div>
            </body>
        
    );
};

export default ShowData
