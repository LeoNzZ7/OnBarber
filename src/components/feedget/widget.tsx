import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './widgetform';

export const Widget = () => {
    return (    
        <Popover className='fixed bottom-4 right-4 md:bottom-10: md:right-10 flex flex-col items-end'> 
            <Popover.Panel><WidgetForm/></Popover.Panel>
            <Popover.Button className='bg-[#FFA500] rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6 text-black'/>
                <span className='max-w-0 text-black overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    Feedback
                </span>
            </Popover.Button >
        </Popover>
    );
}