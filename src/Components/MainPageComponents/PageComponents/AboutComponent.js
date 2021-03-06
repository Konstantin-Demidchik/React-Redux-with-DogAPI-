import React, { Component } from 'react';
import {Media, Image} from 'react-bootstrap';
import styles from './CssModulesMainPage/AboutComponent.module.css'
import {PageHeader} from 'react-bootstrap'


class AboutComponent extends Component {

  render() {
    return (
      <div className = 'container'>

        <PageHeader>Обо мне</PageHeader>

        <Media className = {styles.media_space}>

          <Media.Left>
              <Image width={200} height={200} src="https://billionnews.ru/uploads/posts/2017-06/thumbs/1496736225_3.jpg" circle />
          </Media.Left>

          <Media.Body>
              <Media.Heading>Демидчик Константин Дмитриевич</Media.Heading>
                     <p>
                      Относится к категории декоративных собак.
                      У него маленькая мордочка и мягчайшая шерсть, размеры собаки тоже крайне небольшие.
                      История происхождения этой породы началась в Германии.
                      В Викторианскую эпоху порода попала в Англию, и шпицы стали излюбленными питомцами королевской знати.
                      Померанский шпиц до сих пор не получил популярности за пределами Европы.
                      Эта миниатюрная и красивая собачка отличается дружелюбием, преданностью своему хозяину, подвижностью и игривостью, что делает ее замечательным компаньоном.
                      Относится к категории декоративных собак.
                      У него маленькая мордочка и мягчайшая шерсть, размеры собаки тоже крайне небольшие.
                      История происхождения этой породы началась в Германии.
                      В Викторианскую эпоху порода попала в Англию, и шпицы стали излюбленными питомцами королевской знати.
                      Померанский шпиц до сих пор не получил популярности за пределами Европы.
                      Эта миниатюрная и красивая собачка отличается дружелюбием, преданностью своему хозяину, подвижностью и игривостью, что делает ее замечательным компаньоном.
                     </p>
              </Media.Body>
          </Media>
        </div>

    );
  }
}

export default AboutComponent;
