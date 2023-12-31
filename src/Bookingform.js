import './bookingform.css';
import React, {useState} from 'react';

function Bookingform(){
const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');
const [selectedGuests, setSelectedGuests] = useState(1);
const [selectedOccasion, setSelectedOccasion] = useState('Birthday');


const availableTime = ['17:00', '18:00', '19:00', '20:00', '21:00'];


return(

<form className='booking-form'>
<label htmlFor="res-date">Choose date</label>

<input type="date" id="res-date" value={selectedDate}
onChange={(e) => setSelectedDate(e.target.value)}
/>

<label htmlFor="res-time">Choose time</label>

<select id="res-time" value={selectedTime} 
onChange={(e) => setSelectedTime(e.target.vlaue)}
>
{availableTime.map((time) => (
    < option key={time} value={time}>
{time}
    </option>
))}
</select>

<label htmlFor="guests">Number of guests</label>
<input type="number" placeholder='1' min="1" max="10"
id="guests" value={selectedGuests} onChange={(e => setSelectedGuests(e.target.value))}
/>

<label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={selectedOccasion}
        onChange={(e) => setSelectedOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
</form>

);


} 

export default Bookingform;

