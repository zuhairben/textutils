import React from 'react'

// in line 6 we noticed that since we had an error on not being able to read the null or the property not being able to set to null, so for that
// we have used props.alert && which is like a conditional where we are treating the props.alert as boolean and evaluating it to true or false
// so if the props.alert is false(null) we will not get the return value else if true then we will get the return value.
//This happens because all the JSX is converted to JavaScript Calls
export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style = {{height: '50px'}}> 
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong className= "mx-2">{capitalize(props.alert.type)}</strong>{props.alert.msg}
        
    </div>}
    </div>
  )
}
