import React from 'react'

import './Ripple.css'

class Ripple extends React.Component {
  state = {
    isVisible: false,
    diameter: 0,
    x: 0,
    y: 0,
  }

  render() {
    const { isVisible, x, y, diameter } = this.state
    return (
      <div
        style={{
          width: 400,
          height: 200,
          boxShadow: '0 3px 5px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
        ref={container => (this.container = container)}
        onClick={this.show}
      >
        {isVisible && (
          <div
            className="Ripple"
            style={{ left: x, top: y, width: diameter, height: diameter }}
          />
        )}
      </div>
    )
  }

  show = event => {
    const { left, top, width, height } = this.container.getBoundingClientRect()
    const { clientX, clientY } = event
    const x = clientX - left
    const y = clientY - top
    const diskWidth = x < width / 2 ? width - x : x
    const diskHeight = y < height / 2 ? height - y : y
    const diameter = 2 * Math.hypot(diskWidth, diskHeight)
    this.setState({ isVisible: true, x, y, diameter })
    setTimeout(this.hide, 750)
  }

  hide = () => {
    this.setState({ isVisible: false })
  }
}

export default Ripple
