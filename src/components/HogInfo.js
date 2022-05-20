import React, {useState} from "react";

function HogInfo({hog}) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    
    <div onClick={() => setShowInfo(!showInfo)}>
      <>
        <h1 key={hog.name}>{hog.name}</h1>
        <img key={hog.specialty} src={hog.image} alt={hog.image}/>
      </>
      {showInfo && (
        <>
          <p key={hog.specialty}>Specialty: {hog.specialty}</p> 
          <p key={hog.greased}>{hog.greased ? "Greased" : "Not Greased"}</p>
          <p key={hog.weight}>{hog.weight} lbs</p>
          <p key={hog.highestMedalAchieved}>Highest Medal Achieved: {hog.highestMedalAchieved}</p>
        </>)}
    </div>
  )
}
export default HogInfo