import React, { useEffect, useState } from 'react';
import './TicketBooking.css'
import { useLocation, Link } from 'react-router-dom';

const TicketBooking = (props) => {
    const location = useLocation();
    const data = location.state?.data;

    const [record, setRecord] = useState(null);

    
    useEffect(() => {
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(data)}`)
            .then(response => response.json())
            .then(data => setRecord(data))
            .catch(err => console.log(err));
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        var number = document.getElementById('value').value; 
    var total = number * 120;
        alert(number!=0? `The ticket for  ${number} persons,totaling ${total}, has been booked!`:'first type number of persons');
      };
      

    return (
        <div className='body d-flex justify-content-center p-5'>
            {record && (
                <form className='p-2' action='#' onSubmit={handleSubmit}>
                    <div className='con'>
                        <img
                            src={record.image && record.image.original ? record.image.original : './assets/place.png'}
                            class="img-top"
                            alt="..."
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = './assets/place.png';
                            }}
                        />
                        <div className='bootm'>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">Movie Name</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <h3><label id='name'>{record.name}</label></h3>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">Premiered Date</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <h3><label id='name'>{record.premiered}</label></h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">Movie Duration</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <h3><label id='name'>{record.runtime} min</label></h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">Movie Day</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <h3><label id='name'>{record.schedule.days}</label></h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">Movie Price</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <h3><label id='name'>120</label></h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4><label htmlFor="name" className="name">No. of Persons</label></h4>
                                </div>
                                <div className="col-md-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">$</span>
                                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" id="value"/>
                                    </div>
                                </div>
                            </div>



                            <button type="submit" className="btn btn-primary">Book</button>
                        </div>
                    </div>

                </form>
            )}

        </div>
    )
}

export default TicketBooking
