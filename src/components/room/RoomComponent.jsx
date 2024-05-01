import React, { useEffect, useState } from 'react'
import AppService from '../service/AppService'

const RoomComponent = ()=> {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        AppService.getRoom().then((response) => {
            setRooms(response.data);
            console.log("room value"+response.data);
        })
    }, [])
    return(
        <div className = "container">
            	<div className="wrapper style2">
				<section className="container">
					<header className="major">
						<h2>WHAT WE OFFER FOR ROOMS</h2>
						<span className="byline"><i>Rooms below </i></span>
					</header>
					<div className="row no-collapse-1">
						<section className="4u">
							
							<p>This Residency has one, two, three bedrooms with bathroom. You can book the hotel by calling us. Right now the available rooms are {rooms} </p>
						</section>
						<section className="4u">
							
							<p></p>
						</section>
						<section className="4u">
							
							<p></p>
						</section>
	
					</div>
				</section>
			</div>
           
        </div>
    )
        
}

export default RoomComponent