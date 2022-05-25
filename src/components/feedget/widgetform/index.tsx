import { useState } from "react";
import bugImageUrl from '../../../assets/bug.svg';
import ideaImageUrl from '../../../assets/idea.svg';
import thoughtImageUrl from '../../../assets/thought.svg';
import { FeedBackTypeStep } from "./steps/FeedbackType";
import { FeedbackContentStep } from "./steps/feedbackContent";
import { FeedbackSucessStep } from "./steps/feedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um Lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uum balão de pensamento'
        }
    }
} 

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm  =  () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSend, SetFeedbackSend] = useState(false);

    const HandleRestartFeedback = () => {
        setFeedbackType(null);
        SetFeedbackSend(false);
    }

    return (
        <div className="bg-zinc-900 text-zinc-400 p-4 rounded-2xl relative mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]  md:w-auto">
            { feedbackSend &&
                <FeedbackSucessStep onfeadbackRestart={HandleRestartFeedback} />
            } { !feedbackSend &&
                <>
                    {!feedbackType &&
                        <FeedBackTypeStep onfeedbackChanged={setFeedbackType}/>
                    } {feedbackType &&
                        <FeedbackContentStep 
                        onFeedbackRestart={HandleRestartFeedback}
                        feedbackType={feedbackType}
                        onFeedbacksend={() => SetFeedbackSend(true)}
                        />
                    }
                </>
            }
        </div>
    );
}