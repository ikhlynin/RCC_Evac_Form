import './Form.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InfoBlock } from './info-block/InfoBlock'
import { LocationBlock } from './location-block/LocationBlock'
import { OtherBlock } from './other-block/OtherBlock'
//import { submit } from '../../api/handleSubmit'

interface evacForm {
    infoBlock: React.FC;
    LocationBlock: React.FC;
    OherBlock: React.FC
}

export function Form() {
    const {
        register, 
        handleSubmit
    } = useForm<evacForm>({

    })

    const submit: SubmitHandler<evacForm> = data =>{
        alert(JSON.stringify(data))
    }

    return (
        <>
        <form className='main_form' onSubmit={handleSubmit(submit)}>
            <h2>Персональні данні</h2>
            <InfoBlock />
            <h2>Геоданні</h2>
            <LocationBlock />
            <h2>Загальна інформація</h2>
            <OtherBlock />
            <button className="submitButton">Відправити заявку</button>
        </form>
        
        </>
    )
}