import { useEffect, useState } from "react";
import BookingType from "../types/BookingTypes";
import axios from "axios";


function Booking(){

   
    const[checkIn,setCheckIn]= useState<string>("");
    const[checkOut,setCheckOut]= useState<string>("");
    const[room,setRoom]=useState<string>("");
    const[guest,setGuest]= useState<string>("");
    const[name,setName]=useState<string>("");
    const[email,setEmail]=useState<string>("");

    async function addbooking(){
        await axios.post("http://localhost:8000/api/booking",{
            name:name,
            checkIn:checkIn,
            checkOut:checkOut,
            room:room,
            guest:guest,
            email:email
        });
        setCheckIn("");
        setCheckOut("");
        setRoom("");
        setGuest("");
        setName("");
        setEmail("");
        alert("your booking is successful")
    }

   

    function handleCheckIn(event:any){
        setCheckIn(event.target.value);
    }

    function handleCheckOut(event:any){
        setCheckOut(event.target.value);
    }

    function handleRoom(event:any){
        setRoom(event.target.value);
    }

    function handleGuest(event:any){
        setGuest(event.target.value);
    }

    function handleName(event:any){
        setName(event.target.value);
    }

    function handleEmail(event:any){
        setEmail(event.target.value);
    }
  

    return(
        
        

        

        <div className="w-[550px] border border-slate-200 px-4 py-3 rounded-lg shadow-2xl">
           

            <label className="text-sm text-slate-600 block mb-3">Enter the Full name</label>
            <input type="text" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={name}  onChange={handleName}/>

            <label className="text-sm text-slate-600 block mb-3">Enter the Email Address</label>
            <input type="email" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={email}  onChange={handleEmail}/>


            <label className="text-sm text-slate-600 block mb-3">Check in</label>
            <input type="date" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={checkIn}  onChange={handleCheckIn}/>

            <label className="text-sm text-slate-600 block mb-3">Check out</label>
            <input type="date" className="block w-full p-2 border border-slate-300 rounded-lg text-slate-600 text-sm mb-4 " value={checkOut}  onChange={handleCheckOut}/>

           


            <label className="text-sm text-slate-600 block mb-3">Room</label>
            <select className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={room} onChange={handleRoom}>
                        <option value="">Select Rooms</option>
                        <option value="Double Deluxe Room">Double Deluxe Room</option>
                        <option value="Single Deluxe Room">Single Deluxe Room</option>
                        <option value="Honeymoon Suit">Honeymoon Suit</option>
                        <option value="Economy Double">Economy Double</option>
            </select> 

            <label className="text-sm text-slate-600 block mb-3">Guest</label>
            <select className="block w-full p-2 border border-salte-300 rounded-lg text-slate-600 text-sm mb-4" value={guest} onChange={handleGuest}>
                        <option value="">Select Guest</option>
                        <option value="Guest 1">Guest 1</option>
                        <option value="Guest 2">Guest 2</option>
                        <option value="Guest 3">Guest 3</option>
                        <option value="Guest 4">Guest 4</option>
            </select> 



            <button className="py-2 px-3 rounded-lg bg-slate-800 text-white hover:bg-slate-950" onClick={addbooking}>Add Booking</button>

        </div>

    

    )
}

export default Booking;