
import React from "react";
import Enhanced from './Hoc'
   
class App extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.val}</h1>
      </>
    )
  }
}
export default Enhanced(App)