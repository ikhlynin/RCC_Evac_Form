import { useFormContext, Controller } from 'react-hook-form'
import ReactSelect from "react-select"
import './Select.css'


type SelectProps = {
    name: string
    options: Array<{ label: string, value: string }>
}

export function Select({ name, options }: SelectProps){
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({field: { value, onChange}}) => (
                <ReactSelect className='location_select' options={options} onChange={({ value }) => onChange(value)} value={{value, label: value}}  />
            )}
        />
       
    )
}