import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import styles from './CssModules/InfoComponent.module.css'

class InfoComponent extends Component {

  render() {
    return (
      <div className = {styles.info_container}>

        <Grid className = {styles.info_content}>
          <Row className="show-grid">

            <Col md={6}>
              <h1>Определена порода чаще всего кусающих людей собак</h1>
            </Col>

            <Col md={6}>
              Британские исследователи определили породу собак, представители которой чаще всего нападают на людей. Больше всего исков о возмещении личного ущерба после нападения животных в стране было подано из-за лабрадоров. Об этом сообщает The Independent.
              Исследование провели эксперты компании Animal Friends, которая занимается страхованием животных. Выяснилось, что лабрадоры, которых называют лучшими друзьями детей, оказались заклятыми врагами почтальонов — почти в трети инцидентов участвовали курьеры и сотрудники почты. Мужчин лабрадоры кусали гораздо чаще женщин. За 2015 год только Королевская почтовая служба зафиксировала 2,6 тысячи случаев нападений на своих сотрудников.
              По мнению специалиста по психологии животных Роджера Магфорда (Roger Mugford), собаки нападают на приходящих в дом незнакомцев, воспринимая их как угрозу своей «стае» — семье. Летом атаки учащаются на десять процентов, когда дети и домашние животные проводят много времени в саду.
              Магфорд советует почтальонам заводить дружбу с местными собаками и «подкупать» их угощением. По его мнению, собаки хорошо запоминают людей и не будут кусать того, кто хорошо к ним относится.
              Наиболее распространенные последствия нападений — ампутация пальцев, образование рубцов и нервные потрясения. Помимо лабрадоров, на людей чаще всего нападают немецкие овчарки, стаффордширские бультерьеры и бордер-колли.
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

export default InfoComponent;