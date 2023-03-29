import NextButtonArrow from '@/pages/ui/nextbuttonarrow/nextbuttonarrow';
import {useEffect, useRef, useState} from 'react';
import './input.scss';

export default function Input(props) {
  const { placeholder } = props;
  const [ isFocus, setIsFocus ]= useState(false);
  const [ hasContent, setHasContent ]= useState(false);
  const inputEmail = useRef(null);
  // console.log(placeholder, 'meow3333', props)
  // const [message, setMessage] = useState('');

  const handleChange = event => {
    // setMessage(event.target.value);
    if(inputEmail?.current?.value.length > 0){
      setHasContent(!hasContent);
    }
  };

  const focusedInput = () => {
    setIsFocus(!isFocus);
  };

  // useEffect (()=> {
  //   if(inputEmail.current.value.length > 0){
  //     setHasContent(true)
  //   }else{
  //     setHasContent(false);
  //   }

  // }, [])
  console.log(hasContent, 'meowcheck')
  // console.log(isFocus, inputEmail, inputEmail.current.value.length,'meowww22');
  // const handleClick = event => {
  //   event.preventDefault();
  //   if (message.trim().length !== 0) {
  //     console.log('input value is NOT empty');
  //   } else {
  //     console.log('input value is empty');
  //   }
  // };

  return (
    <span className='input-section--email-wrap'>
      <span className='input-section--input-wrap'>
        <p className={`${'input-section--label-check'} ${isFocus ? 'focused':'unFocused'} ${inputEmail?.current?.value?.length > 0 ? 'content': 'noContent'}`}>
          {placeholder}
        </p>
        <input
          className={`${'input-section--input-box'}`}
          id="message"
          name="message"
          onChange={handleChange}
          // autoComplete="on"
          placeholder={placeholder}
          type='email'
          onFocus={focusedInput}
          onBlur={focusedInput}
          ref={inputEmail}
        />
      </span>
      <span className='input-section--submit-button'>
        <NextButtonArrow arrowDirection={'right'}/>
      </span>
      {/* <button onClick={handleClick}>Check if input empty</button> */}
    </span>
  );
}