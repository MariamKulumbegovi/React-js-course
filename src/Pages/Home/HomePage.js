
import axios from 'axios';
import { useEffect } from 'react';
import { Counter } from '../../components/counter/Counter';
import { withUserList } from '../../hoc/withUserList';
import {Carousel} from 'react-bootstrap'
import img from '../../img/..jpg'
import img1 from '../../img/...jpg'
import img2 from '../../img/....jpg'
import video from '../../video/video.mp4'
import styles from './home.module.css'
const HomePage = ({ userList }) => {
  useEffect(() => {}, [userList]);
    
  // const data=async()=>{
  //   try{
  //     const countries= await axios.get('https://restcountries.com/v3.1/currency/dollar')
  //   return console.log(countries.data)
    
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
   
  // }
  // useEffect(()=>{ data()},[])
  


  return (
    <div className="">
      {/* <Counter /> */}
      {/* <video width="750" height="500" controls >
      <source src={video} />
     </video> */}
     <div className="content">
     <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
      <div >
        {userList.map(user => {
          return  (  
            <div className="box" key={user.id}>
          <div>{user.email} </div>
          <div ><img width="auto" height="auto" src={user.avatar} /></div>
           </div>)
        
        })}
      </div>
    </div>
  );
};

export default withUserList(HomePage);
