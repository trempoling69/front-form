import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type QuizContextType = {
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  setFormLength: Dispatch<SetStateAction<number>>;
  isLastQuestion: boolean;
  setAnswer: Dispatch<any>;
  answer: any;
};
export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState();
  const [formLength, setFormLength] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  useEffect(() => {
    const toEnd = formLength - currentStep;
    if (toEnd <= 1) {
      setIsLastQuestion(true);
    } else {
      setIsLastQuestion(false);
    }
  }, [currentStep, formLength]);

  const nextStep = () => {
    if (currentStep < formLength - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const previousStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <QuizContext.Provider
      value={{ currentStep, nextStep, setFormLength, isLastQuestion, previousStep, answer, setAnswer }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};
