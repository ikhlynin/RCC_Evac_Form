import './OtherBlock.css'
import { useFormContext } from 'react-hook-form'

export function OtherBlock() {

    const {register, watch, formState: { errors }} = useFormContext()

    return (
        <div className="otherBlock">
            <label htmlFor="" className="quantity">
                Кількість людей
                <input type="text" className="quantity" placeholder='Вкажіть кількість людей' {...register('quantity')} />
            </label>
            <label htmlFor="" className="physical">
                <span>Фізичний стан людини</span><br />
                    <input type="checkbox" id="lezh" {...register('physic')}/>
                    <label htmlFor="lezh" className='lableCheck' >Є лежачі</label>
            </label>
            <label htmlFor="" className="physical">
                <span>Хто робив заявку</span><br />
                    <input type="checkbox" id="lezh" {...register('whoami')} />
                    <label htmlFor="lezh" className='lableCheck' >Заявка за іншу людину</label>
            </label>
            <label htmlFor="" className="quantity">
                Тварини
                <input type="text" className="quantity" placeholder='Вкажіть є тварини' {...register('pets')} />
            </label>
            <label htmlFor="">
                Місце евакуації
                <input type="text" placeholder='Вкажіть до якого НП планується проводитись евакуація' {...register('destination')}/>
            </label>
            <label htmlFor="">
                Коментар <br />
                <textarea placeholder='Якщо є інформація не передбачена формою' {...register('otherInfo')}/>
            </label>
            <label htmlFor="" className="quantity">
                Дата евакуації
                <input type="date" className="quantity" {...register('evacDate')} />
            </label>
        </div>
    )
}