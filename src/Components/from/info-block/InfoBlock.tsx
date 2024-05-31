import { useFormContext } from 'react-hook-form'
import './InfoBlock.css'


export function InfoBlock() {

    const { register, watch, formState: { errors } } = useFormContext()

    const name = watch('name')
    
    return (
        <div className='info_block'>
            <label className='fName'>
                Введіть ПІБ
                <input type="text" className='Name' placeholder='Вкажіть ПІБ контактної людини' {...register('name')} />
            </label>
            <label className="phone1">
                Введіть номер телефону
                <input type="tel" className="phone1" placeholder='Вкажіть телефон людини що буде евакуйовуватись' {...register('phone')} />
            </label>
        </div>
    )
}