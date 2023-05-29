import {useState, useEffect} from "react";
import axios from "axios";

const apiUrl = "https://ironbnb-m3.herokuapp.com/apartments";

export function IronbnbList(){
   const [fetching,setFetching] = useState(true);
   const [apartments, setApartments] = useState([])

   useEffect(() => {
     axios.get(apiUrl).then((data) => {
        setApartments(data.data)
        setFetching(false)
     })
   }, []);

   return(
    <div>
         {fetching && <p>....Loading</p>}
         {apartments.map((apt) => {
            return(
               <div key={apt._id}>
                  <h4>{apt.title}</h4>
                  <img style={{width: "150px"}} src={apt.img} alt="" />
                  <p>Price: {apt.pricePerDay}</p>
               </div>
            );
         })}
    </div>
   );
}