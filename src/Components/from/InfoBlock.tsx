import { useFormContext } from 'react-hook-form'
import Popup from 'reactjs-popup'

export function InfoBlock() {

    const { register, watch, formState: { errors } } = useFormContext()

    const name = watch('name')
    
    return (
        <div className='p-5 dark:border rounded-xl flex flex-wrap flex-row justify-between dark:bg-darkBg2 my-10'>
            <h2 className='text-3xl mb-10 text-navy flex w-full font-bold dark:text-darkText'>Персональні данні</h2>
            <label className='h-20 my-2 w-[100%] md:w-[30%]'>
                <h3 className='text-navy text-lg mb-2 inline-block dark:text-darkText'>Прізвище</h3>
                
                <Popup 
                    trigger={<span className='border border-navy inline-block rounded-full mb-2 w-4 h-4 mx-2 text-xs text-center'>?</span>} 
                    position="top center">
                    <div className=' bg-lightGrey w-fit h-6 text-align center text-navy'>Введіть ім'я людини яка <b>буде евакуйовуватись</b></div>
                </Popup>
                <input type="text" className='w-full h-12 rounded-full px-6 shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive' placeholder='Вкажіть ПІБ контактної людини' {...register('firstName')} />
            </label>
            <label className='h-20 my-2 w-[100%] md:w-[30%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Ім'я</h3>
                <input type="text" className='w-full h-12 rounded-full px-6 shadow-lg  dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive' placeholder='Вкажіть ПІБ контактної людини' {...register('lastName')} />
            </label>
            <label className='h-20 my-2 w-[100%] md:w-[30%]'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>По-батькові</h3>
                <input type="text" className='rounded-full h-12 px-6 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive' placeholder='Вкажіть ПІБ контактної людини' {...register('surname')} />
            </label>
            <label className="h-20 my-2 basis-full">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Введіть номер телефону</h3>
                <input type="tel" className="rounded-full px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive" placeholder='Вкажіть телефон людини що буде евакуйовуватись' {...register('phone')} />
            </label>
        </div>
    )
}