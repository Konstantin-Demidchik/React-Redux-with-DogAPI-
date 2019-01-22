import React, { Component } from 'react';
import {Media, Image} from 'react-bootstrap'
import styles from './CssModules/AboutComponent.module.css'
import {PageHeader} from 'react-bootstrap'



class DescribeComponent extends Component {
  render() {

    return(
      <div className = 'container'>

          <PageHeader>Какие они бывают? <small>о собаках</small></PageHeader>

          <div className = {styles.media_space}>
          <Media>

                 <Media.Left>
                    <Image width={150} height={150} src="https://billionnews.ru/uploads/posts/2017-06/thumbs/1496736225_3.jpg" circle />
                 </Media.Left>

                 <Media.Body>
                     <Media.Heading>Померанский шпиц</Media.Heading>
                       <p>
                        Относится к категории декоративных собак.
                        У него маленькая мордочка и мягчайшая шерсть, размеры собаки тоже крайне небольшие.
                        История происхождения этой породы началась в Германии.
                        В Викторианскую эпоху порода попала в Англию, и шпицы стали излюбленными питомцами королевской знати.
                        Померанский шпиц до сих пор не получил популярности за пределами Европы.
                        Эта миниатюрная и красивая собачка отличается дружелюбием, преданностью своему хозяину, подвижностью и игривостью, что делает ее замечательным компаньоном.
                       </p>
                 </Media.Body>
               </Media>

          <Media className = {styles.media_space}>
               <Media.Body>
                  <Media.Heading>Тайский риджбек </Media.Heading>
                     <p>
                       Считается природной породой собак: это означает, что никто ее не выводил.
                       Первых тайских риджбеков нашли в Таиланде.
                       Именно там сейчас проживает большинство представителей этой породы.
                       В Азии их тоже достаточно, а вот в других странах тайские риджбеки встречаются крайне редко.
                       Главная отличительная черта этой уникальной собаки - ее шерсть, которая растет своеобразным гребнем.
                     </p>
                </Media.Body>

               <Media.Right>
                  <Image width={150} height={150} src="https://billionnews.ru/uploads/posts/2017-06/1496736232_5-1.jpg" circle />
               </Media.Right>

           </Media>

           <Media>

                  <Media.Left>
                     <Image width={150} height={150} src="http://petstime.ru/sites/default/files/styles/article-500/public/field/image/1_4.jpg?itok=mBFEwEa9" circle />
                  </Media.Left>

                  <Media.Body>
                      <Media.Heading>Шарпей</Media.Heading>
                        <p>
                        Шарпей, которому часто также дают приставку "китайский", является относительно крупной породой.
                        Это энергичные и уверенные в себе собаки, имеющие китайское происхождение.
                        Шарпея трудно не заметить из-за его массивных складок, которые создают вид "глубоких морщин".
                        </p>
                  </Media.Body>
            </Media>

          </div>
      </div>

    )
  }
}

export default DescribeComponent;
