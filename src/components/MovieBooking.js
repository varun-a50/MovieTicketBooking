import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import './MovieBooking.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieBooking = (props) => {
    const location = useLocation();
    const data = location.state?.data;

    const [record, setRecord] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(data)}`)
            .then(response => response.json())
            .then(data => setRecord(data))
            .catch(err => console.log(err));
    }, [data]);

    return (
        <body style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'images/backgroudmoview.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
        <div className="card mx-auto mb-3" style={{ maxWidth: '540px' }}>
            {record && (
                <div>
                    <div className='con'>
                        <img
                            src={record.image && record.image.original ? record.image.original : './assets/place.png'}
                            class="card-img-top"
                            alt="..."
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = './assets/place.png';
                            }}
                        />
                        <div className='bootmm'>
                            <h4> Rating: {record.rating.average}
                                {' '}
                                {Array.from({ length: Math.floor(record.rating.average) }, (_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#FFD700' }} />
                                ))}
                            </h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 class="card-title">Movie : {record.name}</h5>
                        <b><p className="card-text">Language : {record.language}</p></b>
                        <p className="card-text" dangerouslySetInnerHTML={{ __html: record.summary }}></p>
                        <div className="text-center">
                            <a href="/TicketBooking" state={{ data: record.name }} className="btn btn-primary">
                                Book your Ticket
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        </body>

    );
};

export default MovieBooking;
