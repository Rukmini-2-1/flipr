import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
function Audio(){
    const Data=[{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a3b10290180c74ab82e72e362 ",
    "title":"JayShetty"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8aa35fd221a1116cd6dd1ddcc5",
    "title":"The Ranveer Show"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8aad590d35f6b3a5c3c294f618",
    "title":"podcast"},{"imagesrc":"https://i.scdn.co/image/ab6765630000ba8afb746c0c706effd032d75360","title":"podcast"},
    {"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a136cd5352cc22be3a1f6be1f","title":"Stuff you should know"},
    {"imagesrc":"https://images.indianexpress.com/2018/07/3-things-2000x2000.jpg","title":"podcast"},
    {"imagesrc":"https://i.scdn.co/image/ab6765630000ba8a36dbb0b2d65004488fcc322f","title":"podcast"},
    {"imagesrc":"https://pi.tedcdn.com/r/pb-assets.tedcdn.com/system/baubles/files/000/005/187/original/TED_Talks_Podcast_Thumbnail_Audio_600px.png?w=320","title":"podcast"}];
    return(
      <div>
       {/* <DashBoard/> */}
          <Row xs="1" sm="2" md="3" lg="4" className="text-center g-4 container-fluid mx-auto justify-content-between my-3 border border-info">
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
                  <Link className="nav-link" to="AudioPlayer"><button type="button" className='btn btn-info'>play</button></Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
          </div>
    );
}
export default Audio;