import './OtherBlock.css'
import { useFormContext } from 'react-hook-form'
import { Switch } from './Switch'

const physicOptions = [{
    label: 'Сидячий',
    value: 'Сидячий'
}, {
    label: 'Лежачий',
    value: 'Лежачий'
}]

const whoamiOptions = [{
    label: 'Сам',
    value: 'Сам'
}, {
    label: 'Для іншої людини',
    value: 'Для іншої людини'
}]

export function OtherBlock() {

    const {register, watch, formState: { errors }} = useFormContext()
 
    return (
        <div className="Container">
            <label htmlFor="" className="quantity">
                <h3>Кількість людей</h3>
                <input type="text" className="quantity" placeholder='Вкажіть кількість людей' {...register('quantity')} />
                </label>
                <Switch name="physic" header='Фізичний стан' options={physicOptions}/>
                <Switch name="whoami" header='Хто робив заявку' options={whoamiOptions}/>
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