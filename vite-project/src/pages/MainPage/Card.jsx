import style from './style.module.scss'

function Card(obj) {
    return (
        <a style={{ textDecoration: 'none', color: 'inherit' }} href={obj.id}>
            <div className={style.card}>
                <h2>{obj.title}</h2>
                <div className={style.cost}>
                    <h3>{obj.salary}</h3>
                    <p>{obj.schedule}</p>
                </div>
                <p>{obj.location}</p>
            </div>
        </a>
    );
}
export default Card