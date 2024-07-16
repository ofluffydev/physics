import React, {useState} from 'react';
import {Alert, AlertDescription} from "@site/src/components/ui/alert";
import {Button} from "@site/src/components/ui/button";

const PracticeQuestion = ({question, options, correctAnswer}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [attempts, setAttempts] = useState(0);

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = () => {
        if (selectedAnswer === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            setAttempts(attempts + 1);
        }
    };

    const handleTryAgain = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    return (
        <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">{question}</h2>
            <div className="space-y-2">
                {options.map((option, index) => (
                    <Button
                        key={index}
                        variant={selectedAnswer === option ? "default" : "outline"}
                        className="w-full text-white rounded-2xl justify-start"
                        onClick={() => handleAnswerSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>
            <div className="mt-4">
                <Button className="text-white" onClick={handleSubmit} disabled={selectedAnswer === null}>
                    Submit Answer
                </Button>
            </div>
            {isCorrect !== null && (
                <Alert className={`mt-4 text-black ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <AlertDescription>
                        {isCorrect
                            ? "Correct! Well done!"
                            : `Incorrect. You've made ${attempts} incorrect attempt(s). Try again!`}
                    </AlertDescription>
                </Alert>
            )}
            {!isCorrect && attempts > 0 && (
                <Button onClick={handleTryAgain} className="mt-2 text-white">
                    Try Again
                </Button>
            )}
        </div>
    );
};

export default PracticeQuestion;