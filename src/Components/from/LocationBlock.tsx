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
        <div className='Container'>
            <label htmlFor="" className="area">
                <h3>Виберіть область</h3>
            <Select name="area" options={areaOptions} />
            </label>
            <label htmlFor="" className="district">
                <h3>Виберіть район</h3>
                <Select name="district" options={districtOptions} />
            </label>
            <label htmlFor="" className="community">
                <h3>Виберіть громаду</h3>
                <Select name="community" options={communityOptions} />
            </label>
            <label htmlFor="" className="settlement">
                <h3>Виберіть населенний пункт</h3>
                <Select name="settlement" options={settlementOptions} />
            </label>
            <label htmlFor="">
                <h3>Введіть адресу</h3>
                <input name="address" type="text" placeholder='Введіть адресу'/>
            </label>
            
        </div>
    )
}