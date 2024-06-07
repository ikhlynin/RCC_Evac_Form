import { GoogleSpreadsheet } from "google-spreadsheet"
import { EvacForm } from "../Components/from/Form"

const APP_URL = 'https://script.google.com/macros/s/AKfycbw8W4pGeJb54tE0jzNPRipSydfeIMQcz3y7H28HR4-n1S6vpCFd95zPqDi7akGSQJNV/exec'
//const doc = new GoogleSpreadsheet(SHEET_ID)


export async function handleSubmitEvac(data){
    console.log("handle data >>> ", JSON.stringify(data))

    const res = await fetch(APP_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
              // 'Content-Type': 'application/json'
        }
    })

    const jsonData = await res.json()

    console.log("Response >> ", jsonData)
}
