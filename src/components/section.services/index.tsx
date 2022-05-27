import { Calendar, GoogleChromeLogo, Ruler, Scissors } from "phosphor-react"

export const Services = () => {
    return (
        <div className="bg-black pb-[50px] flex border-t-2 border-b-2 border-[#333] justify-center items-center flex-col" >
            <h1 className="font-bold text-[30px] text-white my-[20px]" >
                Serviços
            </h1>
            <div className="flex" >
                <div className="bg-[#111] border-2 rounded-xl p-[20px] border-[#333] text-white mx-[10px] flex flex-col justify-center items-center w-[250px] h-[250px]" >
                    <Scissors className="text-[#FFA500]" size={80} weight="bold"/>
                    <h1 className="font-bold text-center">Cortes de cabelo, sobrancelha e barba</h1>
                </div>
                <div className="bg-[#111] border-2 rounded-xl p-[20px] border-[#333] text-white mx-[10px] flex flex-col justify-center items-center w-[250px] h-[250px]" >
                    <Ruler className="text-[#FFA500]" size={80} weight="bold" />
                    <h1 className="font-bold text-center">Recortes milimétricos e precisos</h1>
                </div>
                <div className="bg-[#111] border-2 rounded-xl p-[20px] border-[#333] text-white mx-[10px] flex flex-col justify-center items-center w-[250px] h-[250px]" >
                    <Calendar className="text-[#FFA500]" size={80} weight="bold" />
                    <h1 className="font-bold text-center">Serviços sobre agendamento</h1>
                </div>
                <div className="bg-[#111] border-2 rounded-xl p-[20px] border-[#333] text-white mx-[10px] flex flex-col justify-center items-center w-[250px] h-[250px]" >
                    <GoogleChromeLogo className="text-[#FFA500]" size={80} weight="bold" />
                    <h1 className="font-bold text-center">Agendamento online sem ligar ou sair de casa</h1>
                </div>
            </div>
        </div>
    )
}