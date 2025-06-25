import { useContext, useState } from 'react';
import style from './style.module.scss';
import Card from './Card';
// import vacancies from '../../context/array';
import vacCont from '../../context';
function MainPage() {
    const vacancies = useContext(vacCont)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredVacancies, setFilteredVacancies] = useState(vacancies);

    const handleSearch = () => {
        const filtered = vacancies.filter(el => 
            el.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredVacancies(filtered);
    };

    return (
        <div className={style.content}>
            <div className={style.filter}>
                <input
                    className={style.search}
                    placeholder='Введите название вакансии'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    className={style.searchbutton} 
                    onClick={handleSearch}
                >
                    Поиск
                </button>
            </div>

            
            {filteredVacancies.map(el => (
                <Card 
                    key={el.id}
                    id={el.id} 
                    title={el.title} 
                    salary={el.salary} 
                    schedule={el.schedule} 
                    location={el.location}
                />
            ))}

            <div className={style.swipe}>
                <div className={style.block}>&larr;</div>
                <div className={style.block}>1</div>
                <div className={style.block}>2</div>
                <div className={style.block}>3</div>
                <div className={style.block}>&rarr;</div>
            </div>
        </div>
    );
}

export default MainPage;