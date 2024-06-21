import { useFormContext, Controller } from 'react-hook-form'
import ReactSelect from "react-select"


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
                // styles={{clearIndicator: () => ({}), container: () => ({}), control: () => ({}), ...}}
                <ReactSelect
                // classNames={{
                //     control: () => "h-[48px] border-0 rounded-[9999px] "
                // }}
                placeholder={'Виберіть опцію'} 
                options={options} 
                onChange={({ value }) => 
                    onChange(value)} value={{value, label: value}
                }
                styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      height: '48px',
                      border: 0,
                      borderRadius: '9999px',
                      padding: '0px 1.25rem',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                      
                    }),
                  }}  
                  />
            )}
        />
       
    )
}