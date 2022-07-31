import { faBorderNone, faDisplay } from "@fortawesome/free-solid-svg-icons"

function Card (props){
  console.log(props.data)
  let badgeText
  //badgetext is undefined
  if (props.data.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }


  return(
    <div className = "card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
    {/* if badge text exists ( and not undefined then run the function) */}
      <img src={`/img/${props.data.coverImg}` }className="card-img"/>

      <div className= "card-stats">
      <span><img src="/img/star.png" className="card-star"/> {props.data.stats.rating }</span>
      <span className="gray"> ({props.data.stats.reviewCount}) </span >
      <span className="gray"> •{props.data.location}</span>
      </div>
    
      <p className ="card-title"> {props.data.title}</p>
      <p className ="card-price"><span className="bold">From ${props.data.price} </span> / person </p>
   
    </div>
  )
}


export default Card