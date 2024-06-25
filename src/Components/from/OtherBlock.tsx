import { useFormContext } from 'react-hook-form'
import { Select } from './Select'

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

const accommodationOptions = [{
    label: 'Потрібно поселення',
    value: 'Потрібно поселення'
}, {
    label: 'Потрібно поселення з доглядом',
    value: 'Потрібно поселення з доглядом'
}, {
    label: 'Є житло',
    value: 'Є житло'
}, {
    label: 'Є житло в іншій області',
    value: 'Є житло в іншій області'
}, {
    label: 'Потрібне поселення в іншій області (реєстрація на евак потяг)',
    value: 'Потрібне поселення в іншій області (реєстрація на евак потяг)'
}]


export function OtherBlock() {

    const {register, watch, formState: { errors }} = useFormContext()
 
    return (
        <div className="p-5 dark:border rounded-xl flex flex-wrap flex-row justify-between dark:bg-darkBg2 my-10">
            <h2 className='text-3xl mb-10 text-navy flex w-full font-bold dark:text-darkText'>Інша інформація</h2>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Кількість людей</h3>
                <input type="text" className="rounded-full px-6 h-12 w-full shadow-lg dark:bg-darkBg2 dark:border-2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Вкажіть кількість людей' {...register('quantity')} />
            </label>
            <label htmlFor='physic' className='h-20 my-2 w-full md:w-[46%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Фізичний стан</h3>
                <Select name="physic" options={physicOptions} />
            </label>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Тварини</h3>
                <input type="text" className="rounded-full px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Вкажіть є тварини' {...register('pets')} />
            </label>
            <label htmlFor="whoami" className='h-20 my-2 w-full md:w-[46%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Хто робив заявку</h3>
                <Select name="whoami" options={whoamiOptions} />
            </label>
            <label htmlFor="" className='h-20 my-2 w-full md:w-[46%]   '>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>НП евакуації</h3>
                <input type="text" className="rounded-full px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Вкажіть до якого НП планується проводитись евакуація' {...register('destination')}/>
            </label>
            <label htmlFor="" className='h-20 my-2 w-full md:w-[46%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Поселення</h3>
                <Select name="accommodation" options={accommodationOptions} />
            </label>
            
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Коментар</h3>
                <input className="resize-none rounded-full px-6 py-2 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Якщо є інформація не передбачена формою' {...register('otherInfo')}/>
            </label>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Дата евакуації</h3>
                <input type="date" className=" rounded-full px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" {...register('evacDate')} />
            </label>
        </div>
    )
}