export const Scheduling = () => {
    return (
        <div className="border-t-2 border-b-2 border-[#333] bg-black h-[650px] flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-bold">
                Agendamento
            </h1>
            <form className="flex flex-col w-[600px]">
                <input type='text' placeholder="Seu nome" className="bg-transparent border-0 border-b-[1px] border-white text-white outline-none focus:ring-0 focus:border-b-2 focus:border-[#FFA500] focus:ring-[#FFA500] placeholder:text-white"/>
                <div className="flex">
                    <input type='date' placeholder="Data do serviço" className="bg-transparent w-[40%] border-0 border-b-[1px] border-white text-white focus:ring-0 outline-none focus:border-b-2 focus:border-[#FFA500] focus:ring-[#FFA500]"/>
                    <select className="w-[60%] ml-[20px] bg-transparent text-white border-0 border-b-[1px] border-white focus:border-0 focus-border-black focus:ring-0 focus:border-b-2 focus:bg-black focus:border-[#FFA500] focus:ring-[#FFA500]">
                        <option selected value={''} hidden>horários disponíveis</option>
                        <option value={''}>9:00</option>
                    </select>
                </div>
                <select className="bg-transparent text-white border-0 border-b-[1px] border-white focus:border-0 focus-border-black focus:ring-0 focus:border-b-2 focus:border-[#FFA500] focus:bg-black focus:ring-[#FFA500]" >
                    <option className="bg-black" selected value={''} hidden>Serviços</option>
                    <option value={'básico'}>Corte básico na tesoura</option>
                    <option value={'Degrade'}>Degradê</option>
                    <option value={'navalhado'}>Degradê navalhado</option>
                    <option value={'sobrancelha'}>Corte básico na tesoura</option>
                    <option value={'sobrancelha'}>Cabelo e barba R$ 75.00</option>
                </select>
                <textarea placeholder="Algo a adicionar?" className="max-w-full mt-5 min-w-full border-[1px] border-white min-h-[200px] bg-transparent max-h-[200px] placeholder:text-white focus:border-2 text-white focus:border-[#FFA500] focus:ring-[#FFA500]" />
                <button className="text-white bg-[#FFA500] py-[10px] rounded-xl border-2 border-black font-bold mt-[20px]" >Agendar horário</button>
            </form>
        </div>
    );
}