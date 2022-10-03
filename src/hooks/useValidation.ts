import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Word } from '../types';

interface IUseValidationProps {
  values: Word;
  setValues: Dispatch<SetStateAction<Word>>;
}

function useValidation({ setValues, values }: IUseValidationProps) {
  const [touched, setTouched] = useState({
    word: false,
    translation: false,
  });
  const [errors, setErrors] = useState({
    word: '',
    translation: '',
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!values.word.trim()) {
      setErrors((prev) => ({ ...prev, word: 'Field is required' }));
    } else {
      setTouched((prev) => ({ ...prev, word: true }));
    }
    if (!values.translation.trim()) {
      setErrors((prev) => ({ ...prev, translation: 'Field is required' }));
    } else {
      setTouched((prev) => ({ ...prev, translation: true }));
    }
  }, [values.translation, values.word]);

  const handleTouche = (e: FormEvent) => {
    switch (e.currentTarget.id) {
      case 'word':
        setTouched((prev) => ({ ...prev, word: true }));
        break;
      case 'translation':
        setTouched((prev) => ({ ...prev, translation: true }));
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.id) {
      case 'word':
        setValues((prev) => ({ ...prev, word: e.target.value }));
        if (e.target.value.length > 50) {
          setErrors((prev) => ({ ...prev, word: 'Too long' }));
        } else if (e.target.value.length < 2) {
          setErrors((prev) => ({ ...prev, word: 'Too short' }));
        } else {
          setErrors((prev) => ({ ...prev, word: '' }));
        }
        break;
      case 'translation':
        setValues((prev) => ({ ...prev, translation: e.target.value }));
        if (e.target.value.length > 70) {
          setErrors((prev) => ({ ...prev, translation: 'Too long' }));
        } else if (e.target.value.length < 2) {
          setErrors((prev) => ({ ...prev, translation: 'Too short' }));
        } else {
          setErrors((prev) => ({ ...prev, translation: '' }));
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!errors.word.length && !errors.translation.length) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors.word.length, errors.translation.length]);

  return { handleChange, handleTouche, errors, touched, isValid };
}

export default useValidation;
