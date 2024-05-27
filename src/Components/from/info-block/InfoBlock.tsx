import './InfoBlock.css'


export function InfoBlock() {
    
    return (
        <div className='info_block'>
            <label className='fName'>
                Введіть ПІБ
                <input type="text" className='Name' placeholder='Вкажіть ПІБ контактної людини' />
            </label>
            <label className="phone1">
                Введіть номер телефону
                <input type="tel" className="phone1" placeholder='Вкажіть телефон людини що буде евакуйовуватись' />
            </label>
        </div>
    )
}