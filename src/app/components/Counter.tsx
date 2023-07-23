'use client';

import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../../store/slice/counterSlice'
import { RootState } from '@/store/store';


export default function Counter() {

  // const [amount, setAmount] = useState(1)
    const dispatch = useDispatch();

    const counterValue= useSelector(
      (state: RootState)=>state.counterSlice.value
    );
      

    const increment = () => {
      dispatch(counterActions.increment());
      // amount >= 1 ? setAmount(amount + 1) : setAmount(6)
     
    }

    const decrement = () => {
      dispatch(counterActions.decrement());
      // amount > 1 ? setAmount(amount - 1) : setAmount(1)
  };

  return (
    <div className='flex'>
        {/* <div className='text-2xl'>
            <h1>Quantity:</h1>
        </div> */}
        <p>Quanatity:</p>
        <div className='flex ml-4'>
            <button onClick={decrement} className='bg-[#cdcdcd] pl-4 pr-4 rounded-full'>
                <FaMinus />
            </button>
            <div className='text-xl mx-4'>{counterValue}</div>
            <button onClick={increment} className='outline pl-4 pr-4 rounded-full'>
                <FaPlus />
            </button>
        </div>
    </div>

  )
}
