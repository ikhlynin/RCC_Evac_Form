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
                
                
                <div className='w-[60%] flex justify-end my-auto bg-navy dark:bg-darkBg1'>       
                    <a href="#EvacForm" id='EvacForm' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:text-darkText dark:hover:text-darkBorder my-auto'>Скріпт діалогу</a>
                    <a href="https://nethunt.com/web/?rg=UA&l=uk&sign_in=1&_gl=1*1iisb7q*_gcl_aw*R0NMLjE3MTg5NzA2MzMuQ2p3S0NBand5ZFN6QmhCT0Vpd0FqMFhONEJfa1BuSmpUQU9nME5oYWJLaVNydEYzTjB0cEpuWjNZZXU3N3V3eGRTeHdhZGxpN0U2djJCb0NIZmNRQXZEX0J3RQ..*_gcl_au*MTU3MjI5Njc0OS4xNzE4Nzk4NzAw*_ga*NDM0OTYzODI2LjE3MTg3OTg3MDA.*_ga_1F3EQ4F96H*MTcxODk3MDYzMi4yLjAuMTcxODk3MDYzMi4wLjAuMTE1NDkzMTk5OA..#nethunt/JTdCJTIyd29ya3NwYWNlSWQlMjIlM0ElMjI2NjcxOGI1NjJjOWVlZDc1MWQyZGQxMTYlMjIlMkMlMjJ3b3Jrc3BhY2VEYXNoYm9hcmQlMjIlM0ElN0IlN0QlN0Q=" target='_blank' id='CRM' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:text-darkText dark:hover:text-darkBorder my-auto'>CRM</a>
                    <a href="https://docs.google.com/spreadsheets/d/1eBWIABW9dS46mq31HyVcCNFSBMK1CvSPdDdGIzMARpU/edit#gid=0" target='_black' id='SocialForm' className='mx-[3%] text-grey target:text-gold hover:text-gold dark:text-darkText dark:hover:text-darkBorder my-auto'>Форма відповідей</a> 
                    <button id='toggle' className='dark:text-darkText w-10 h-10 flex my-auto' onClick={handleThemeSwitch}>
                    <svg className="fill-[#6d28d9] block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg className="fill-[#eab308] hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </button>
                </div>
            </header>
    )
}