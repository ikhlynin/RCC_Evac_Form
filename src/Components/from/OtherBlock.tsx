import './OtherBlock.css'
import { useFormContext } from 'react-hook-form'

export function OtherBlock() {

    const {register, watch, formState: { errors }} = useFormContext()

    return (
        <div className="Container">
            <label htmlFor="" className="quantity">
                <h3>Кількість людей</h3>
                <input type="text" className="quantity" placeholder='Вкажіть кількість людей' {...register('quantity')} />
            </label>
            <h3>Фізичний стан</h3>
            <div className="sliderWrapper">
                <div className='title'>Сидячі</div>
                <label className="switch" htmlFor="checkbox1">
                    <input type="checkbox" id="checkbox1" {...register('physic')} />
                    <div className="slider round"></div>
                </label>
                <div className='title'>Лежачі</div>
            </div>
            <h3>Хто залишав заявку заявку</h3>
            <div className="sliderWrapper">
                <div className="title">Сам</div>
                <label className="switch" htmlFor="checkbox2">
                    <input type="checkbox" id="checkbox2" {...register('whoami')} />
                    <div className="slider round"></div>
                </label>
                <div className="title">За іншу людину</div>
            </div>
            <label htmlFor="" className="quantity">
                <h3>Тварини</h3>
                <input type="text" className="quantity" placeholder='Вкажіть є тварини' {...register('pets')} />
            </label>
            <label htmlFor="">
                <h3>Місце евакуації</h3>
                <input type="text" placeholder='Вкажіть до якого НП планується проводитись евакуація' {...register('destination')}/>
            </label>
            <label htmlFor="">
                <h3>Коментар</h3>
                <textarea className='Container' placeholder='Якщо є інформація не передбачена формою' {...register('otherInfo')}/>
            </label>
            <label htmlFor="" className="quantity">
                <h3>Дата евакуації</h3>
                <input type="date" className="quantity" {...register('evacDate')} />
            </label>
        </div>
    )
}