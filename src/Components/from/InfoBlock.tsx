import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Select } from './Select'

const callOptions = [{
    label: 'Евакуація',
    value: 'Евакуація'
}, {
    label: 'Консультація',
    value: 'Консультація'
}]

export function InfoBlock() {

    const { register, watch, formState: { errors } } = useFormContext()

    const name = watch('name')

    return (
        <div className='p-5 dark:border rounded-xl flex flex-wrap flex-row justify-between dark:bg-darkBg2 my-10'>
            <h2 className='text-3xl mb-10 text-navy flex w-full font-bold dark:text-darkText'>Загальні питання</h2>
            <label className='h-20 my-2 w-full'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>ПІБ</h3>
                <input type="text" className='rounded-full h-12 px-6 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive' placeholder='Вкажіть ПІБ контактної людини' {...register('name')} />
            </label>
            <label className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Введіть номер телефону</h3>
                <input type="tel" className="rounded-full px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Вкажіть телефон людини що буде евакуйовуватись' {...register('phone')} />
            </label>
            <label className='h-20 my-2 w-full md:w-[46%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Вік</h3>
                <input type="number" className='rounded-full h-12 px-6 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive' placeholder='Вкажіть вік людини яка дзвонила' {...register('age')} />
            </label>
            <label htmlFor="" className='h-20 my-2 w-full md:w-[100%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Воронка</h3>
                <Select name="accommodation" options={callOptions}  {...register('callType')}/>
            </label>
        </div>
    )
}