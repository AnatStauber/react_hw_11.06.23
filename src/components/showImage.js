import React from 'react'


function ShowImage(props) {
    let imgSrc = "./images/" + props.result + ".png";
  return (
    <img src={imgSrc}></img>
  )
}

export default ShowImage