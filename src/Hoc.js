import React from 'react'
  
function Enhanced(Comp){
    return class New extends React.Component{
        render(){
            return <Comp val="Newdata"/>
        }
    }
}
  
export default Enhanced;