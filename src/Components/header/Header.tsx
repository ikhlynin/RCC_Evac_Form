import logo from '../../assets/rcc-logo.png'
import '../../index.css'
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react'

export function Header() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme==='dark'? "light":"dark")
    }

    return (
            <header className="px-[9%] h-14 flex justify-between bg-navy dark:bg-darkBg1 dark:border-b-2 dark:border-grey" >
                <div className='text-2xl text-gold flex my-auto dark:text-darkText'>
                    RCC Evacuation
                </div>
                <button id='toggle' className='dark:text-darkText' onClick={handleThemeSwitch}>
                    toggle dark mode
                </button>
                
                <div className='w-[60%] flex justify-end my-auto bg-navy dark:bg-darkBg1'>       
                    <a href="#EvacForm" id='EvacForm' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:text-darkText dark:hover:text-darkBorder'>Скріпт діалогу</a>
                    <a href="https://nethunt.com/web/?rg=UA&l=uk&sign_in=1&_gl=1*1iisb7q*_gcl_aw*R0NMLjE3MTg5NzA2MzMuQ2p3S0NBand5ZFN6QmhCT0Vpd0FqMFhONEJfa1BuSmpUQU9nME5oYWJLaVNydEYzTjB0cEpuWjNZZXU3N3V3eGRTeHdhZGxpN0U2djJCb0NIZmNRQXZEX0J3RQ..*_gcl_au*MTU3MjI5Njc0OS4xNzE4Nzk4NzAw*_ga*NDM0OTYzODI2LjE3MTg3OTg3MDA.*_ga_1F3EQ4F96H*MTcxODk3MDYzMi4yLjAuMTcxODk3MDYzMi4wLjAuMTE1NDkzMTk5OA..#nethunt/JTdCJTIyd29ya3NwYWNlSWQlMjIlM0ElMjI2NjcxOGI1NjJjOWVlZDc1MWQyZGQxMTYlMjIlMkMlMjJ3b3Jrc3BhY2VEYXNoYm9hcmQlMjIlM0ElN0IlN0QlN0Q=" target='_blank' id='CRM' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:text-darkText dark:hover:text-darkBorder'>CRM</a>
                    <a href="https://docs.google.com/spreadsheets/d/1eBWIABW9dS46mq31HyVcCNFSBMK1CvSPdDdGIzMARpU/edit#gid=0" target='_black' id='SocialForm' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:hover:text-darkBorder'>Форма відповідей</a> 
                </div>
            </header>
    )
}