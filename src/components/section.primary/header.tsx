import { Scissors, User } from "phosphor-react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (    
        <div className="w-[980px] justify-between items-center flex bg-transparent m-auto h-full">
            <div className="flex text-white items-center">
                <Scissors className="text-[#FFA500]" size={44} weight="bold"/>
                <h1 className="text-[#FFA500] font-bold text-3xl">OnBarber</h1>
            </div>
            <div className="flex flex-1 justify-center items-center" >
                <ul className="flex">
                    <li><Link className="text-white font-bold m-3 border-b-2 border-transparent hover:border-[#FFA500] hover:text-[#DDD]" to='/'>Página inicial</Link></li>
                    <li><Link className="text-white font-bold m-3 border-b-2 border-transparent hover:border-[#FFA500] hover:text-[#DDD]" to='/'>Serviços</Link></li>
                    <li><Link className="text-white font-bold m-3 border-b-2 border-transparent hover:border-[#FFA500] hover:text-[#DDD]" to='/'>Agendamentos</Link></li>
                    <li><Link className="text-white font-bold m-3 border-b-2 border-transparent hover:border-[#FFA500] hover:text-[#DDD]" to='/'>Sobre</Link></li>
                </ul>
            </div>
            <div className="cursor-pointer flex justify-center items-center">
                <User size={40} className='text-white bg-transparent border-2 border-white rounded-full'/>
            </div>
        </div>        
    );
}