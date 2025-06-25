import style from '../MainPage/style.module.scss'
import styleitem from './style.module.scss'
import Card from '../MainPage/Card';

import vacancies from '../../context/array';
import { useParams } from 'react-router-dom';
function ItemPage() {
    const { id } = useParams()
    const arr = vacancies.filter((el) => el.id == id)
    return (
        <div className={style.content}>

            {arr.map(el => <Card key={el.id} id={el.id} title={el.title} salary={el.salary} schedule={el.schedule} location={el.location}></Card>)}



            <div className={styleitem.block}>
                <h1>Обязанности:</h1>

                <ul>
                    {arr.map(el => {
                        return el.responsibilities.map((el, key) => <li key={key}>{el}</li>);
                    })}
                </ul>
                <h1>Требования:</h1>
                <ul>
                    {arr.map(el => {
                        return el.requirements.map((el, key) => <li key={key}>{el}</li>);
                    })}
                </ul>
                <h1>Условия:</h1>
                <ul>
                    {arr.map(el => {
                        return el.conditions.map((el, key) => <li key={key}>{el}</li>);
                    })}
                </ul>
            </div>
        </div>
    );
}
export default ItemPage