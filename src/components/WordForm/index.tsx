import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import useValidation from '../../hooks/useValidation';
import { Word } from '../../types';

type IWordFormProps = {
  isLoading: boolean;
  values: Word;
  setValues: Dispatch<SetStateAction<Word>>;
  handleSave: (e: FormEvent) => void;
};

function WordForm({
  values,
  setValues,
  handleSave,
  isLoading,
}: IWordFormProps) {
  const { errors, touched, isValid, handleChange, handleTouche } =
    useValidation({ values, setValues });

  return (
    <Flex as="form" direction="column" gap="30px" mt="30px">
      <FormControl isInvalid={touched.word && !!errors.word}>
        <FormLabel>Word:</FormLabel>
        <Input
          height="54px"
          onBlur={handleTouche}
          value={values.word}
          onChange={handleChange}
          type="text"
          id="word"
        />
        <FormErrorMessage>{errors.word}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={touched.translation && !!errors.translation}>
        <FormLabel>Translation:</FormLabel>
        <Input
          height="54px"
          onBlur={handleTouche}
          value={values.translation}
          onChange={handleChange}
          type="text"
          id="translation"
        />
        <FormErrorMessage>{errors.translation}</FormErrorMessage>
      </FormControl>
      <Button
        color="blue"
        type="submit"
        onClick={handleSave}
        disabled={!isValid || isLoading}
      >
        save
      </Button>
    </Flex>
  );
}

export default WordForm;

// import { Dispatch, FormEvent, SetStateAction } from 'react';
// import useValidation from '../../hooks/useValidation';
// import { Product } from '../../types';
// import Button from '../common/Button';
// import styles from './ProductForm.module.css';

// interface IProductForm {
//   isFetching: boolean;
//   values: Product;
//   setValues: Dispatch<SetStateAction<Product>>;
//   handleSave: () => void;
// }
// function ProductForm({
//   values,
//   setValues,
//   handleSave,
//   isFetching,
// }: IProductForm) {
//   const { errors, touched, isValid, handleChange, handleTouche } =
//     useValidation({ values, setValues });

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     handleSave();
//   };

//   return (
//     <form className={styles.box}>
//       <div className={styles.inputBox}>
//         <label className={styles.label} htmlFor="title">
//           Product name:
//           <input
//             className={styles.input}
//             onBlur={handleTouche}
//             value={values.title}
//             onChange={handleChange}
//             type="text"
//             id="title"
//           />
//         </label>
//         {errors.title && touched.title && (
//           <p className={styles.errorMessage}>{errors.title}</p>
//         )}
//       </div>
//       <div className={styles.inputBox}>
//         <label className={styles.label} htmlFor="price">
//           Product price:
//           <input
//             className={styles.input}
//             onBlur={handleTouche}
//             value={values.price}
//             onChange={handleChange}
//             type="number"
//             id="price"
//           />
//         </label>
//         {errors.price && touched.price && (
//           <p className={styles.errorMessage}>{errors.price}</p>
//         )}
//       </div>
//       <div className={styles.inputBox}>
//         <label className={styles.label} htmlFor="description">
//           Product description:
//           <textarea
//             className={styles.textarea}
//             onBlur={handleTouche}
//             value={values.description}
//             onChange={handleChange}
//             id="description"
//           />
//         </label>
//         {errors.description && touched.description && (
//           <p className={styles.errorMessage}>{errors.description}</p>
//         )}
//       </div>
//       <Button
//         color="blue"
//         type="submit"
//         onClick={handleSubmit}
//         disabled={!isValid || isFetching}
//       >
//         save
//       </Button>
//     </form>
//   );
// }

// export default ProductForm;
