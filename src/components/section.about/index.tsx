import { MapPin } from 'phosphor-react';
import mapa from '../../assets/mapa.jpg'

export const About = () => {
    return (
        <div className="flex items-center justify-center flex-col text-white py-20">
            <h1 className='font-bold text-[30px]' >Sobre nós</h1>
            <div className="flex w-[800px] pt-[20px] p-2 border-[1px] border-[#222]">
                <div className="w-[300px]">
                    ...
                </div>
                <div className="flex-1 bg-[#f00]">
                    <MapPin className='absolute text-black top-[1950px] left-[750px]' size={44} weight="bold" />
                    <img src={mapa}/>
                </div>
            </div>
        </div>
    );
}