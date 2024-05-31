import { GoogleSpreadsheet } from "google-spreadsheet"

const APP_URL = 'https://script.google.com/macros/s/AKfycbyIxelXGJAYfdQdYBGZMOZtpBISJw8WK0PtMJyPrLXnnvGsbD5hB4-gtyzlP1YlRmWy/exec'
//const doc = new GoogleSpreadsheet(SHEET_ID)


export async function handleSubmitEvac(data){
    console.log("handle data >>> ", data)

    console.log('data >> ', data)
    await fetch(APP_URL, {
        method: "POST",
        body: JSON.stringify(data),
    })
}
