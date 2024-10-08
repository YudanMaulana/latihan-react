// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

class Props extends Component {
  render() {
    return (
        // eslint-disable-next-line react/prop-types
        <div>my name is : {this.props.name}</div>
    )
  }
}


export default function Person() {
  return (
    <div>
      <>
        <Props name="yudan" />
      </>
    </div>
  )
}
