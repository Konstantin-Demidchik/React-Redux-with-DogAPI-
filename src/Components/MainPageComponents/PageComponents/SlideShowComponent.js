import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'



class SlideShow extends Component {
  render() {
    return (


    <Carousel width="100%" height="100%">

        <Carousel.Item>
            <img width="100%" height="100%" alt="900x500" src="https://www.petgazette.biz/wp-content/uploads/2018/12/puppy-dog-mammal-weimaraner-snout-vertebrate-626898-pxhere.com_-e1544098188753-1140x570.jpg" />

            <Carousel.Caption>
              <h3>Демонстрация работы с DOG API</h3>
              <p>Выбери себе питомца</p>
            </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
              <img width="100%" height="100%" alt="900x500" className = "efImg" src="https://cdn.lifehacker.ru/wp-content/uploads/2016/01/cover_1453891990-1140x570.jpg" />

              <Carousel.Caption>
                <h3>Список пород с описанием</h3>
                <p>Полный список пород собак Dog API</p>
              </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
              <img width="100%" height="100%" alt="900x500" src="https://www.petgazette.biz/wp-content/uploads/2018/07/puppy-dog-pet-young-mammal-vertebrate-1208199-pxhere.com_-e1531395479829-1140x570.jpg" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>

       </Carousel.Item>
   </Carousel>

    );
  }
}

export default SlideShow;
