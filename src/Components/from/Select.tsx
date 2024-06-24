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
                <ReactSelect
                unstyled
                classNames={{
                    control: () => "rounded-full bg-white px-6 h-12 w-full shadow-lg dark:border-2 dark:bg-darkBg2 dark:border-darkBorder dark:text-darkText dark:focus:border-darkActive",
                    option: () => "px-6 h-12 w-full  dark:bg-darkBg2 my-2 dark:text-darkText",
                    menuList:() => "block rounded-3xl bg-white mt-2 pt-2  shadow-lg dark:bg-darkBg2 dark:border-2 dark:border-darkBorder dark:text-darkText",
                }}
                placeholder={'Виберіть опцію'} 
                options={options} 
                onChange={({ value }) => 
                    onChange(value)} value={{value, label: value}
                } 
                />
            )}
        />
       
    )
}