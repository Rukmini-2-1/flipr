import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import './card-style.css';
function Home(){
    const Data=[
    {"imagesrc":"https://drchatterjee.com/wp-content/uploads/2020/09/JS-YT-Thumbnail.jpeg","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_eTn6kMjNDrZt3RWUcw0wHKuLA6LEZr-zw&usqp=CAU","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://variety.com/wp-content/uploads/2021/09/Joe-Rogan-Covid.jpg?w=681&h=383&crop=1","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://i.ytimg.com/vi/PlAJIUvwZ0E/maxresdefault.jpg","title":"podcast","duration":"10:12"}];
    
    return(
      <div style={{width:'100vw'}}>
         {/* <DashBoard/> */}
        <Row xs="1" sm="2" md="3" lg="4" className="text-center g-4 container-fluid mx-auto justify-content-between my-3  border border-info">
        {Data.map(item=> (
          <Col>
            <Card style={{width:"13rem"}}>
              <Card.Img variant="top" src={item.imagesrc}/>
              {(() => {
        if (item.duration) {
          return (
            <p className='duration'>{item.duration}</p>
          )}
      })()}
              <Card.Body>
                <Card.Title className='fs-6'>{item.title}</Card.Title>
                <Card.Text>
                    {item.desc}
                </Card.Text>
                {/* <button type="button" className="btn btn-primary" >Play podcast</button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </div>
    );
  }
export default Home;