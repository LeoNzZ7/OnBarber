export const Scheduling = () => {
    return (
        <div className="border-t-2 border-b-2 border-[#333] bg-black text-center">
            <h1 className="text-white">
                Agendamento
            </h1>
            <form className="flex flex-col">
                <input type='text' className="bg-transparent"/>
                <input type='datetime-local' className="bg-transparent" />
            </form>
        </div>
    );
}