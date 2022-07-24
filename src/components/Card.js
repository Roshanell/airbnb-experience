
function Card (){
  return(
    <div className = "card">
      <img src="/img/katie.png" className="card-img"/>

      <div className= "card-stats">
      <span><img src="/img/star.png" className="card-star"/>5.0</span>
      <span className="gray"> (6)</span >
      <span className="gray"> USA</span>
      </div>
    
      <p> Life Lessons with Katie Zaferes </p>
      <p><span className="bold">From 136 </span> / person </p>
   
    </div>
  )
}

// Challenge: Build the Card component
// For now, hard-code in the data (like 
// the rating, title, price, etc.)

// Notes:
// - Only render 1 instance (I already did this for you)
// - The star icon and photo (katie-zaferes.png) are in the images 
//   folder for your use
// - Make sure to include:
//     - image
//     - star icon (star.png), rating, and review count
//     - title
//     - cost/person
// - The main purpose of this challenge is to show you where our limitations
//   currently are, so don't worry about the fact that you're hard-coding all
//   this data into the component.

export default Card