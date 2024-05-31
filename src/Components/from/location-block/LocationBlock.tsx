import { useFormContext, Controller } from 'react-hook-form'
import './LocationBlock.css'
import { useEffect, useState } from 'react'
import { Select } from './Select'
import { getCommunity, getDistrict, getSettlement, getArea, initCsvData } from '../../../api/loadData'

export function LocationBlock() {

    const { register, resetField, watch, getValues, formState: { errors } } = useFormContext()
    console.log('getValues >> ', getValues( ))
    const [area, district, community] = watch(['area', 'district', 'community'])
    const [areaOptions, setAreaOptions] = useState([])
    const [districtOptions, setDistrictOptions] = useState([])
    const [communityOptions, setCommunityOptions] = useState([])
    const [settlementOptions, setSettlementOptions] = useState([])

    const loadArea = async () => {
        await initCsvData()
        const options = await getArea()
        console.log('options >>> ', options)
        setAreaOptions(options)
    }


    const loadDistricts = async () => {
        console.log("area condition", area)
        const options = await getDistrict(area)
        console.log("options for district >>> ", options)
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

    console.log('Area options >>> ' + areaOptions)

    return (
        <div className='location_block'>
            <label htmlFor="" className="area">
                Виберіть область
            <Select name="area" options={areaOptions} />
            </label>
            <label htmlFor="" className="district">
                Виберіть район
                <Select name="district" options={districtOptions} />
            </label>
            <label htmlFor="" className="community">
                Виберіть громаду
                <Select name="community" options={communityOptions} />
            </label>
            <label htmlFor="" className="settlement">
                Виберіть населенний пункт
                <Select name="settlement" options={settlementOptions} />
            </label>
        </div>
    )
}