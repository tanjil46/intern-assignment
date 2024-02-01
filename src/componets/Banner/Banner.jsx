

import backImage from '../img/back.jpg'
const Banner = () => {






    
      const backGroundImage={
      backgroundImage:`url(${backImage})`,
       backgroundSize:'100%'
    
    
    
    
     }
    
    
    
    





    return (
        <div>
            <div className="hero my-4    " style={backGroundImage}>
  <div className="hero-overlay  bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      
    <h1 className="mb-5 text-2xl md:text-4xl font-bold">WELCOME </h1>
      <p className="mb-5 text-slate-300">The booking process is typically straightforward, allowing users to select their preferred movie, choose a convenient showtime, and pick their seats from an interactive seating map. </p>
     
     


    </div>
  </div>
</div>
         
        </div>
    );
};

export default Banner;