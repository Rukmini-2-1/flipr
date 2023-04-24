import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './card-style.css';
import {Link} from 'react-router-dom';
function Home(){
    const Data=[{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a3b10290180c74ab82e72e362 ",
    "title":"JayShetty"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8aa35fd221a1116cd6dd1ddcc5",
    "title":"The Ranveer Show"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8aad590d35f6b3a5c3c294f618",
    "title":"podcast"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8afb746c0c706effd032d75360" ,"title":"podcast"},
    {"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a136cd5352cc22be3a1f6be1f","title":"Stuff you should know"},
    {"imagesrc":"https://images.indianexpress.com/2018/07/3-things-2000x2000.jpg","title":"podcast"},
    {"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a36dbb0b2d65004488fcc322f","title":"podcast"},
    {"imagesrc":"https://pi.tedcdn.com/r/pb-assets.tedcdn.com/system/baubles/files/000/005/187/original/TED_Talks_Podcast_Thumbnail_Audio_600px.png?w=320","title":"podcast"},
    {"imagesrc":"https://drchatterjee.com/wp-content/uploads/2020/09/JS-YT-Thumbnail.jpeg","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_eTn6kMjNDrZt3RWUcw0wHKuLA6LEZr-zw&usqp=CAU","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://variety.com/wp-content/uploads/2021/09/Joe-Rogan-Covid.jpg?w=681&h=383&crop=1","title":"podcast","duration":"10:12"},
    {"imagesrc":"https://i.ytimg.com/vi/PlAJIUvwZ0E/maxresdefault.jpg","title":"podcast","duration":"10:12"}];
    return(
      <div >
         {/* <DashBoard/> */}
        <Row xs="1" sm="2" md="3" lg="4" className="text-center g-4 container-fluid mx-auto justify-content-between my-3 ">
        {Data.map(item=> (
          <Col>
            <Card style={{width:"13rem"}}>
            <Link className="nav-link" to="VideoPlay"><Card.Img variant="top" src={item.imagesrc}/></Link>
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
                <Link className="nav-link" to="AudioPlayer"><button type="button" className='btn btn-info'>play</button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </div>
    );
  }
export default Home;