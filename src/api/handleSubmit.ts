import { EvacForm } from "../Components/from/Form"

const sheetID = '   '

export function handleSubmitEvac(data:EvacForm){
    alert(
        "Name: " + data.name +
        "\nPhone: " + data.phone + 
        "\nArea: " + data.area +
        "\nDistrict: " + data.district +
        "\nCommunity: " + data.community +
        "\nSettlment" + data.settlement +
        "\nQuantity of ppl: " + data.quantity +
        "\nPhysical: " + data.physic +
        "\nwhoami: " + data.whoami +
        "\nPets: " + data.pets +
        "\nDestination: " + data.destination +
        "\nOhet info: " + data.otherInfo +
        "\nDate of evacuation: " + data.evacDate

    )
}
