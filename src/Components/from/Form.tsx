import { SubmitHandler, useForm, FormProvider, SubmitErrorHandler } from 'react-hook-form'
import { InfoBlock } from './InfoBlock'
import { LocationBlock } from './LocationBlock'
import { OtherBlock } from './OtherBlock'
import { handleSubmitEvac } from '../../api/handleSubmit'
import Popup from 'reactjs-popup'
import { Modal, Box, Typography } from 'react-modal'



export function Form() {
    const context = useForm<EvacForm>({
        defaultValues: evacDefaultValues
    })

    const {
        register, 
        handleSubmit,
        reset
    } = context

    const submit: SubmitHandler<EvacForm> =async( data) => {
       await handleSubmitEvac(data)
        reset()
    }

    const error: SubmitErrorHandler<EvacForm> = data => alert(JSON.stringify(data))

    return (

        <form className='w-[65%] mx-auto font-inter' onSubmit={handleSubmit(submit)}>
            <FormProvider {...context}>
                <h1 className='text-6xl text-navy mt-20 mb-10 font-bold dark:text-darkText'>Форма евакуації</h1>
                
                <InfoBlock />
                
                <LocationBlock />
                
                <OtherBlock />
                <button type='submit' className="submitButton text-3xl mt-10 p-4 w-full text-navy border-4 border-navy rounded-full shadow-lg active:tracking-wide hover:bg-navy hover:text-white transition duration-500 dark:bg-darkBg2 dark:border-2 dark:border-darkBorder dark:hover:bg-darkBorder dark:hover:text-white">
                    <div className="before:content-['Відправити заявку'] dark:text-darkText">Відправити заявку</div>
                </button>
            </FormProvider> 
        </form>
    )
}

// @ts-ignore
const evacDefaultValues: EvacForm = {
    timeStamp: null,
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    area: "",
    district: "",
    community: "",
    settlement: "",
    address: "",
    quantity: null,
    physic: "",
    whoami: "",
    pets: "",
    destination: "",
    accommodation: "",
    otherInfo: ""
}

export type EvacForm = {
    timeStamp:Date
   firstName: string
   lastName: string
   surname: string
   phone: string
   area: string
   district: string
   community: string
   settlement: string
   address: string
   quantity: number
   physic: string
   whoami: string
   pets: string
   destination: string
   accommodation: string
   otherInfo: string
   evacDate: Date
}

