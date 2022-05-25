import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../../closeButton";
import { FeedbackType, feedbackTypes } from "../index";
import { ScreenshotButton } from "../screenshotButton";
import { Loading } from '../loading'
 
type Props = {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbacksend: () => void;
}

export const FeedbackContentStep = ({feedbackType, onFeedbackRestart, onFeedbacksend}: Props ) => {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)
    
    const handleSubmitFeedback = async (event: FormEvent) => {
        event.preventDefault();
    
        setIsSendingFeedback(true);

        setIsSendingFeedback(false);

        onFeedbacksend();
    }

    return (
        <>
        <header>
            <button onClick={onFeedbackRestart} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" > 
                <ArrowLeft weight="bold" className="h-4 w-4" />
            </button>
            <span className="text-xl text-zinc-400 leading-6 flex items-center gap-2">
            <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
            {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
        </header>
       
        <form className="my-4 w-full" onSubmit={handleSubmitFeedback} >
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-[#EE9400] bg-transparent rounded-md focus:border-[#FFA500] focus:ring-[#FFA500] focus: ring-1 resize-none outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={e => setComment(e.target.value)}
            />
            
            <footer className="flex gap-2 mt-2" >
                <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                />
                <button
                type="submit"
                disabled={comment.length === 0 || isSendingFeedback ? true : false}
                className="p-2 bg-[#FFA500] rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-[#EE9400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#FFA500] transition-colors disabled:opacity-50 disabled:hover:bg-[#EE9400]"
                >
                    {isSendingFeedback ? <Loading/> : 'Enviar Feedback'}
                </button>
            </footer>
        </form>
        </>
    );
}