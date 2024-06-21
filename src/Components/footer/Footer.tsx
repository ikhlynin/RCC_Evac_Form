export function Footer() {
    
    return (
            <footer className="px-[9%] h-14 flex justify-between bg-navy mt-20 dark:bg-darkBg1 dark:border-t-2 dark:border-grey">
                <div className='text-2xl text-gold flex my-auto'>
                    RCC evacuation department
                </div>
                <div className='w-[60%] flex justify-end my-auto'><a href="#CRM" id='CRM' className='mx-[3%] text-grey target:text-gold hover:text-gold'><a href="https://rcc-ua.org/" target="_blank">RCC Site</a></a>
                </div>
            </footer>
    )
}