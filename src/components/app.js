import React from 'react'
import {connect} from 'react-redux'
//import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import {increment ,decrement ,reset} from '../store/action'
import Step from './step'
function App (props){
    return (
        <>
          <h2>counter</h2>
          <p>{props.count}</p>
          <button onClick={() => props.dispatch(increment())}>Increment</button>
          <button onClick={() => props.dispatch(decrement())}>Decrement</button>
          <button onClick={() => props.dispatch(reset())}>Reset</button>
          <Step/>
        </>
    )
}
function count (state){
   return {
       count :state.value
   }
}
export default connect(count)(App);