import { GoogleSpreadsheet } from "google-spreadsheet"
import { EvacForm } from "../Components/from/Form"
import moment from "moment"
//import Popup from "reactjs-popup" 

const EVAC_URL = 'https://nethunt.com/service/automation/hooks/667bc0d6de08200008c83d43'
const STAT_URL = 'https://nethunt.com/service/automation/hooks/667c025bde08200008cad0c0'
const TRAIN_URL ='https://nethunt.com/service/automation/hooks/667c08f0a20cb5000810f64e'
const APP_URL = 'https://script.google.com/macros/s/AKfycbw8W4pGeJb54tE0jzNPRipSydfeIMQcz3y7H28HR4-n1S6vpCFd95zPqDi7akGSQJNV/exec'
//const doc = new GoogleSpreadsheet(SHEET_ID)


export async function handleSubmitEvac(data:EvacForm){
    data.timeStamp = moment().format("DD MM YYYY, hh:mm:ss")
    console.log('Data >> ', data)

    if(data.callType == 'Евакуація') {
        data.quetionType = 'Евакуація'
        if(data.accommodation == 'Потрібне поселення в іншій області (реєстрація на евак потяг)'){
            data.quetionType = 'Евакуація в іншу область'
            if(data.settlement != 'Харків'){

                 //     POST TO EVAC FOLDER        //

                 const resEvac = await fetch(EVAC_URL, {
                     method: "POST",
                     body: JSON.stringify(data),
                     headers: {
                         'Accept': 'application/json',
                           // 'Content-Type': 'application/json'
                     }
                 })

                 
            }
            const resTrain = await fetch(TRAIN_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                      // 'Content-Type': 'application/json'
                }
            })
               
        } else {
            data.quetionType = 'Евакуація'

            //     POST TO EVAC FOLDER        //
            const resEvac = await fetch(EVAC_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                      // 'Content-Type': 'application/json'
                }
            })
            //     POST TO EVAC FOLDER        //
            const resSheet = await fetch(APP_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                      // 'Content-Type': 'application/json'
                }
            })
            
        }
    }

    //      POST TO CALL FOLDER        //

    const resStat = await fetch(STAT_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
              // 'Content-Type': 'application/json'
        }
    })

    alert('Заявку внесено')
    //const jsonData = await res.json()

    //console.log("Response >> ", jsonData)


}
