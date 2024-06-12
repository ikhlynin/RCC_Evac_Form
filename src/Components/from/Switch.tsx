import { useFormContext, Controller } from 'react-hook-form'
import { Header } from '../header/Header'
import { Fragment } from 'react/jsx-runtime'
import './OtherBlock.css'


type SwitchProps = {
    name: string,
    header: string,
    options: Array<{ label: string, value: string }>
}

export function Switch({ name, header, options }: SwitchProps){
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({field: { value, onChange}}) => (
                <>
                <h3>{header}</h3>
                <div className="sliderWrapper">
                    <div className='title'>{options[0].label}</div>
                    <label className="switch" htmlFor={name}>
                        <input type="checkbox" id={name} checked={value === options[1].value} onChange={(event) => {
                            onChange(!event.target.checked ? options[0].value : options[1].value)
                        }} />
                        <div className="slider round"></div>
                    </label>
                    <div className='title'>{options[1].label}</div>
                </div>
                </>
            )}
        />
       
    )
}