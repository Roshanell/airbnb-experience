function Hero (){
  return(
    <section className="hero-container">
    <div className="photo-grid-container">
    <img src = "/img/photo-grid.png" className="photo-grid"/>
    </div>
    {/* // centered img
    // words left aligned with padding */}
    <div className="hero-text-container">

   
    <h1>Online Experiences</h1>
    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
</div>
</section>
    
  )
}

export default Hero;