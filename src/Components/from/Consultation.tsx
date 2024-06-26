import { useContext } from "react"
import { Select } from "./Select"
import { useFormContext } from "react-hook-form"

const quetionTypeOption = [{
    label: 'Гуманіарна допомога',
    value: 'Гуманіарна допомога'
}, {
    label: 'Грошові виплати',
    value: 'Грошові виплати'
}, {
    label: 'Поселення та не продовольча допомога',
    value: 'Поселення та не продовольча допомога'
}, {
    label: 'Гуманітарна допомога (гігієна та хімія)',
    value: 'Гуманітарна допомога (гігієна та хімія)'
}, {
    label: 'Юридична допомога',
    value: 'Юридична допомога'
}, {
    label: 'Медична допомога',
    value: 'Медична допомога'
}, {
    label: 'Психологічна допомога',
    value: 'Психологічна допомога'
}, {
    label: 'Адміністративна допомога',
    value: 'Адміністративна допомога'
}, {
    label: 'Інша не гуманітарне питання',
    value: 'Інша не гуманітарне питання'
}, {
    label: 'Евакуація',
    value: 'Евакуація'
}, {
    label: 'Евакуація в іншу область',
    value: 'Евакуація в іншу область'
}]

export function ConsultationBlock() {
    const { register } = useFormContext()

    return (
        <div className="p-5 dark:border rounded-xl flex flex-wrap flex-row justify-between dark:bg-darkBg2 my-10">
            <h2 className='text-3xl mb-10 text-navy flex w-full font-bold dark:text-darkText'>Консультація</h2>
            <label htmlFor="" className="h-20 my-2 w-full md:w-full">
               <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Тип питання</h3>
                <Select name="quetionType" {...register('quetionType')} options={quetionTypeOption} />
            </label>
        </div>
    )
}
