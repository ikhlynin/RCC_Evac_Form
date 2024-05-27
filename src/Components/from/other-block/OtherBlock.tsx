import './OtherBlock.css'

export function OtherBlock() {
    
    return (
        <>
            <label htmlFor="" className="quantity">
                Кількість людей
                <input type="text" className="quantity" placeholder='Вкажіть кількість людей' />
            </label>
            <label htmlFor="" className="physical">
                <span>Фізичний стан людини</span><br />
                <div>
                    <input type="checkbox" id="syd" value={'sydachi'} />
                    <label htmlFor="syd" className='lableCheck'>Сидячі</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="lezh" value={'lezhachi'} />
                    <label htmlFor="lezh" className='lableCheck'>Лежачі</label>
                </div>
            </label>
            <label htmlFor="" className="quantity">
                Тварини
                <input type="text" className="quantity" placeholder='Вкажіть є тварини' />
            </label>
            <label htmlFor="" className="quantity">
                Місце евакуації
                <input type="text" className="quantity" placeholder='Вкажіть до якого НП планується проводитись евакуація' />
            </label>
            <label htmlFor="" className="quantity">
                Коментар
                <input type="text" className="quantity" placeholder='Якщо є інформація не передбачена формою' />
            </label>
            <label htmlFor="" className="quantity">
                Дата евакуації
                <input type="date" className="quantity" />
            </label>
        </>
    )
}