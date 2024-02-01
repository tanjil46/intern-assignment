import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {

    const {id}=useParams()
    const idNumber=parseInt(id)
const[movies,setMovies]=useState([])


    useEffect(()=>{


        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    
    
    
    },[])


const matchMovies=movies.find(movie=>movie?.show?.id==id)

console.log(matchMovies)







const formHandler=e=>{
    e.preventDefault()

    const movieName=e.target.name.value
    const preDate=e.target.date.value
    const movieday=e.target.day.value
    const ticketPrice=e.target.price.value

 const movieInfo={movieName,preDate,movieday,ticketPrice}
 localStorage.setItem('booking', JSON.stringify(movieInfo))
 Swal.fire(
    'success',
    'Succesfully Booked Ticket',
    'success'
 )

}












    return (
        <div className="bg-slate-500 my-8 mx-6 p-6">
        <div className="w-full  h-full   flex md:flex-row flex-col   gap-3">
            <div className="md:w-[60%]">
         <img className=" md:h-[600px]" src={matchMovies?.show?.image?.original}></img>
         </div>

         <div className="md:w-[40%] space-y-6">
            <p className="text-slate-200 text-center md:text-2xl">{matchMovies?.show?.name}</p>
<div className="">
            <p className="text-slate-200">Genres:<span className="md:text-xl">{matchMovies?.show?.genres[0]}</span></p>
            <p className="text-slate-200">Country:<span className="md:text-xl">{matchMovies?.show?.network?.country?.name}</span></p>

</div>

         <div className="flex gap-4 ">
         <p className="text-slate-200">Schedule:{matchMovies?.show?.schedule?.time}PM ,<span className="">{matchMovies?.show?.schedule?.days[0]}</span></p>
         <p className="text-slate-200">Status:<span className="text-green-500">{matchMovies?.show?.status}</span></p>

         </div>

        
        <p className="text-center"> {matchMovies?.show?.summary}</p>




         </div>


         </div>
<div className="text-center my-3">
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Book Ticket</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    
<form onSubmit={formHandler}>



<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Movie name</span>
   
  </label>
  <input  type="text" name="name" placeholder="Name" defaultValue={matchMovies?.show?.name}   className="input  input-bordered  w-full " />
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">premiered Date</span>
   
  </label>
  <input  type="text" name="date" defaultValue={matchMovies?.show?.premiered} placeholder="date"className="input  input-bordered  w-full " />
  
</div>





<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Day</span>
   
  </label>
  <input  type="text" name="day" defaultValue={matchMovies?.show?.schedule?.days[0]} placeholder="date"className="input  input-bordered  w-full " />
  
</div>



<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Ticket Price</span>
   
  </label>
  <input  type="text" name="price" defaultValue={'40$'} placeholder="date"className="input  input-bordered  w-full " />
  
</div>

<button type="submit" className="btn ">Confim Ticket</button>
</form>

<div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>  
  </div>
  


</dialog>
</div>

        </div>



    );
};

export default Details;