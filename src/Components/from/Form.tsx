import './Form.css'
import { SubmitHandler, useForm, FormProvider, SubmitErrorHandler } from 'react-hook-form'
import { InfoBlock } from './InfoBlock'
import { LocationBlock } from './LocationBlock'
import { OtherBlock } from './OtherBlock'
import { handleSubmitEvac } from '../../api/handleSubmit'



export function Form() {
    const context = useForm<EvacForm>({
        defaultValues: evacDefaultValues
    })

    const {
        register, 
        handleSubmit,
    } = context

    const submit: SubmitHandler<EvacForm> = data => handleSubmitEvac(data)

    const error: SubmitErrorHandler<EvacForm> = data => alert(JSON.stringify(data))

    return (

        <form className='main_form' onSubmit={handleSubmit(submit)}>
            <FormProvider {...context}>
                <h2>Персональні данні</h2>
                <InfoBlock />
                <h2>Геоданні</h2>
                <LocationBlock />
                <h2>Інша інформація</h2>
                <OtherBlock />
                <button className="submitButton" >Відправити заявку</button>
            </FormProvider> 
        </form>
    )
}

// @ts-ignore
const evacDefaultValues: EvacForm = {
    name:"",
    phone: "",
    area: "",
    district: "",
    community: "",
    settlement: "",
    address: "",
    quantity: 0,
    physic: false,
    whoami: false,
    pets: "",
    destination: "",
    otherInfo: ""
}

export type EvacForm = {
   name: string
   phone: string
   area: string
   district: string
   community: string
   settlement: string
   address: string
   quantity: number
   physic: boolean
   whoami: boolean
   pets: string
   destination: string
   otherInfo: string
   evacDate: Date
}

