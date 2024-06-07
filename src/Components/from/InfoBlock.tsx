import { useFormContext } from 'react-hook-form'


export function InfoBlock() {

    const { register, watch, formState: { errors } } = useFormContext()

    const name = watch('name')
    
    return (
        <div className='Container'>
            <label className='fName'>
                <h3>Введіть ПІБ</h3>
                <input type="text" className='Name' placeholder='Вкажіть ПІБ контактної людини' {...register('name')} />
            </label>
            <label className="phone1">
                <h3>Введіть номер телефону</h3>
                <input type="tel" className="phone1" placeholder='Вкажіть телефон людини що буде евакуйовуватись' {...register('phone')} />
            </label>
        </div>
    )
}