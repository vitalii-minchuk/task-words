import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { goToNextQuestion, selectAnswer } from '../../store/Slices/wordsSlice';
import Answer from './Answer';

function Question() {
  const { wordsForQuiz, currentQuestionIndex, answers, currentAnswer } =
    useAppSelector((state) => state.words);
  const [touched, setTouched] = useState(false);
  const dispatch = useAppDispatch();
  const question = wordsForQuiz[currentQuestionIndex]?.question;

  const handleClick = (answer: string) => {
    setTouched(true);
    dispatch(selectAnswer(answer));
  };

  useEffect(() => {
    if (!touched) return;
    const timer = setTimeout(() => {
      setTouched(false);
      dispatch(goToNextQuestion());
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, touched]);
  return (
    <>
      <div>{question}</div>
      {answers?.map((el) => {
        // const correct =
        //   touched &&
        //   currentAnswer === wordsForQuiz[currentQuestionIndex]?.correct;
        // const incorrect = touched && currentAnswer === el;
        return (
          <Answer
            onClick={handleClick}
            currentAnswer={currentAnswer}
            key={el}
            correct={wordsForQuiz[currentQuestionIndex]?.correct}
            answer={el}
          />
        );
      })}
    </>
  );
}

export default Question;
