import React, { createContext, useState, useEffect } from "react";


const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'InfoBlock',
        1: 'LocationBlock',
        2: 'OtherBlock'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        Name: "",
        PhoneNumber: "",
        SecondaryPhoneNumber: "",
        Area: "",
        District: "",
        Community: "",
        Settlement: "",
        Address: "",
        Quantity: "",
        Physical: "",
        Pets: "",
        DestinationPlace: "",
        OtherInformation: "",
        DateOfEvacuation: ""
    })


    return (
        <FormContext.Provider value={{data, setData}}>
            {children}
        </FormContext.Provider>
    )
}

export FormContext