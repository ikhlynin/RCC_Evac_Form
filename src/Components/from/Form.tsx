import './Form.css'
import { SubmitHandler, useForm, FormProvider, SubmitErrorHandler } from 'react-hook-form'
import { InfoBlock } from './InfoBlock'
import { LocationBlock } from './LocationBlock'
import { OtherBlock } from './OtherBlock'
import { handleSubmitEvac } from '../../api/handleSubmit'
//import Popup from 'reactjs-popup'



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

        <form className='main_form' onSubmit={handleSubmit(submit)}>
            <FormProvider {...context}>
                <h2>Персональні данні</h2>
                <InfoBlock />
                <h2>Геоданні</h2>
                <LocationBlock />
                <h2>Інша інформація</h2>
                <OtherBlock />
                {/* <Popup trigger={}>
                    <div>Popup content</div>
                </Popup> */}
                <button className="submitButton" >Відправити заявку</button>
            </FormProvider> 
        </form>
    )
}

// @ts-ignore
const evacDefaultValues: EvacForm = {
    timeStamp: null,
    name:"",
    phone: "",
    area: "",
    district: "",
    community: "",
    settlement: "",
    address: "",
    quantity: null,
    physic: "Сидячий",
    whoami: "Сам",
    pets: "",
    destination: "",
    otherInfo: ""
}

export type EvacForm = {
    timeStamp:Date
   name: string
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
   otherInfo: string
   evacDate: Date
}

