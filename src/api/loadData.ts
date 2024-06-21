import parser from 'papaparse'

const fullData: Array<Array<string>> = []


export async function initCsvData(){ 
    const content = await fetch('DB.csv')
    const textContent = await content.text()
    const fullContent = parser.parse(textContent).data

    // @ts-ignore
    fullData.push(...fullContent.slice(1))
}

export function getArea() {
    const areas = Array.from(new Set(fullData.map(row => row[1])))
    const uniqueAreas = areas.map(area => ({
        label: area,
        value: area,
    }))
    return uniqueAreas
}

export function getDistrict(area: string) {
    const districtsInArea = fullData.filter((element) => {
        return element[1] === area
    })
    const districts = Array.from(new Set(districtsInArea.map(row => row[2])))
    const uniqueDistricts = districts.map(districts => ({
        label: districts,
        value: districts,
    }))
    return uniqueDistricts
}

export function getCommunity(district: string) {
    const communityInDistricts = fullData.filter((element) => {
        return element[2] === district
    })
    const community = Array.from(new Set(communityInDistricts.map(row => row[3])))
    const uniqueCommunity = community.map(community => ({
        label: community,
        value: community,
    }))
    return uniqueCommunity
}

export function getSettlement(community: string) {
    const settlementInComunity = fullData.filter((element) => {
        return element[3] === community
    })
    const settlement = Array.from(new Set(settlementInComunity.map(row => row[4])))
    const uniqueSettlement = settlement.map(settlement => ({
        label: settlement,
        value: settlement,
    }))
    return uniqueSettlement
}
