import React from 'react'
function VideoPlay(){
    return(
        <div className="d-flex justify-content-center" style={{height:"90vh",width:"100vw"}}>
        <div className="d-flex justify-content-center my-auto">
            <iframe style={{height:"70vh",width:"50vw"}} className="responsive-iframe" src="https://www.youtube.com/embed/pWahNIMRxR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
    )
}
export default VideoPlay;