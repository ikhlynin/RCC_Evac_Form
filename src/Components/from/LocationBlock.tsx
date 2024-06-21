import { useFormContext, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Select } from './Select'
import { getCommunity, getDistrict, getSettlement, getArea, initCsvData } from '../../api/loadData'

export function LocationBlock() {

    const { register, resetField, watch, getValues, formState: { errors } } = useFormContext()
    const [area, district, community] = watch(['area', 'district', 'community'])
    const [areaOptions, setAreaOptions] = useState([])
    const [districtOptions, setDistrictOptions] = useState([])
    const [communityOptions, setCommunityOptions] = useState([])
    const [settlementOptions, setSettlementOptions] = useState([])

    const loadArea = async () => {
        await initCsvData()
        const options = await getArea()
        setAreaOptions(options)
    }


    const loadDistricts = async () => {
        const options = await getDistrict(area)
        setDistrictOptions(options)
    }
    
    const loadCommunity = async () => {
        const options = await getCommunity(district)
        setCommunityOptions(options)
    }

    const loadSettlement = async () => {
        const options = await getSettlement(community)
        setSettlementOptions(options)
    }

    useEffect(() => {

        loadArea()
    }, [])

    useEffect(() => {
        loadDistricts()
        if (area) {
            resetField('district')
        }
    }, [area])

    useEffect(() => {
        loadCommunity()
        if (district) {
            resetField('community')
        }
    }, [district])

    useEffect(() => {
        loadSettlement()
        if (community) {
            resetField('settlement')
        }
    }, [community])


    return (
        <div className='p-5 dark:border rounded-xl flex flex-wrap flex-row justify-between dark:bg-darkBg2  my-10'>
            <h2 className='text-3xl mb-10 text-navy flex w-full font-bold dark:text-darkText'>Геоданні</h2>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Виберіть область</h3>
            <Select name="area" options={areaOptions} />
            </label>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%] ">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Виберіть район</h3>
                <Select name="district" options={districtOptions} />
            </label>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Виберіть громаду</h3>
                <Select name="community" options={communityOptions} />
            </label>
            <label htmlFor="" className="h-20 my-2 w-full md:w-[46%]">
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Виберіть населенний пункт</h3>
                <Select name="settlement" options={settlementOptions}/>
            </label>
            <label htmlFor="" className='h-20 my-2 basis-full'>
                <h3 className='text-navy font-madium text-lg mb-2 dark:text-darkText'>Введіть адресу</h3>
                <input name="address" type="text" placeholder='Введіть адресу' className='rounded-full px-6 h-12 w-full shadow-lg'/>
            </label>
            
        </div>
    )
}