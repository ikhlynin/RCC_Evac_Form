import './LocationBlock.css'

export function LocationBlock() {
    
    return (
        <div className='location_block'>
            <label htmlFor="" className="area">
                Виберіть облатсь
                <select name="" id="" className="area">
                    <option value='value' selected>Оберіть область</option>
                </select>
            </label>
            <label htmlFor="" className="district">
                Виберіть район
                <select name="" id="" className="district">
                    <option value='value' selected>Оберіть район</option>
                </select>
            </label>
            <label htmlFor="" className="community">
                Виберіть громаду
                <select name="" id="" className="communityt">
                    <option value='value' selected>Оберіть громаду</option>
                </select>
            </label>
            <label htmlFor="" className="settlement">
                Виберіть населенний пункт
                <select name="" id="" className="settlement">
                    <option value='value' selected>Оберіть населенний пункт</option>
                </select>
            </label>
        </div>
    )
}