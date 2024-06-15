import { useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import './App.css';

function App() {
  const [input, setInput] = useState(["", "", "", ""]);

  const inputRefs = useRef([]);

  const handleOnchange = (index, inputValue) => {
    const newOtp = [...input];
    newOtp[index] = inputValue;

    if (inputValue && index < input.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    setInput(newOtp);
    console.log(input);
  }

  const handleKeyup = (index, e) => {
    if (e.key === 'Backspace' && index > 0) {
      const newOtp = [...input];
      newOtp[index] = "";
      inputRefs.current[index - 1].focus();
      setInput(newOtp);
    }

  }

  const submitOtp = () => {
    const CompleteOtp = Number(input.join(''));
    console.log(CompleteOtp);
  }

  return (
    <div className="App mt-20">
      <h2 className='text-[24px] font-semibold'>OTP Verification</h2>
      <p className='mt-5 text-[16px] font-medium'>Enter a 4 digit OTP you have recieved!</p>
      <div className="otp-container mt-5">
        {
          input.map((value, index) => (
            <input
              key={index}
              className='otp-input border-[1px] border-solid mr-2 w-12 h-12 text-xl text-center focus:outline-none focus:border-blue-500 shadow-md rounded-lg p-2 border-2'
              type='text'
              maxLength={1}
              value={value}
              onChange={e => handleOnchange(index, e.target.value)}
              onKeyUp={e => handleKeyup(index, e)}
              autoFocus={index === 0}
              ref={(ref) => {
                return (
                  inputRefs.current[index] = ref
                )
              }}
            />
          ))
        }
      </div>
      <div onClick={e => submitOtp()} className='inline-flex justify-center mt-10 bg-blue-300 p-3 rounded-full cursor-pointer text-white hover:text-blue-300 hover:bg-white transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-md'>
        <FaArrowRight className='text-[24px]' />
      </div>

    </div>

  );
}

export default App;
