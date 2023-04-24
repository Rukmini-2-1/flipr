import React from 'react';
function Cards(props){
    return(
      <div className="text-center">
        <div className="card" style={{ height:"10rem",width:"15rem"}}>
        <div>
          <img src={props.imgsrc} alt="image1" className='card-img-top' width="w-20"/>
        </div>
        <div className="card-body text-dark">
          <h6 className="card-title">{props.title}</h6>
          <p>{props.description}</p>
          <a href="#" className='btn btn-primary'>play</a>
        </div>
      </div>
      </div>
    );
}
export default Cards;