import { feedbackTypes } from "..";
import { FeedbackType } from "../index";
import { CloseButton } from "../../closeButton"

type Props = {
    onfeedbackChanged: (type: FeedbackType) => void;
}

export const FeedBackTypeStep = ({onfeedbackChanged}: Props ) => {
    return (
        <>
        <header>
                <span className="text-xl leading-6 text-zinc-400">Deixe seu Feedback</span>
                <CloseButton/>
        </header>
       
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => (
                <button 
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#FFA500] focus:border-[#FFA500] focus:outline-none"
                type="button"
                onClick={e => onfeedbackChanged(key as FeedbackType)}
                >
                    <img src={value.image.source} alt={value.image.alt}/>
                    <span>{value.title}</span>
                </button>
            ))}
        </div> 
        </>
    );
}