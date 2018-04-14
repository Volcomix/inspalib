import React from 'react'
import classNames from 'classnames'

import './Ripple.css'

class Ripple extends React.Component {
  state = {
    isVisible: false,
    isEntering: false,
    isExiting: false,
    diameter: 0,
    x: 0,
    y: 0,
  }

  render() {
    const { isVisible, isEntering, isExiting, x, y, diameter } = this.state
    return (
      <div
        className={classNames('Ripple-container', this.props.className)}
        style={this.props.style}
        ref={container => (this.container = container)}
        onMouseDown={this.setVisible}
      >
        {this.props.children}
        {isVisible && (
          <div
            className={classNames('Ripple', {
              'Ripple-exiting': !isEntering && isExiting,
            })}
            style={{ left: x, top: y, width: diameter, height: diameter }}
            onAnimationEnd={this.setEntered}
            onTransitionEnd={this.setExited}
          />
        )}
      </div>
    )
  }

  setVisible = event => {
    const ripple = this.computeRipple(event)
    if (this.state.isVisible) {
      this.setState({ isVisible: false, isEntering: false, isExiting: false })
      setTimeout(() => this.setEntering(ripple))
    } else {
      this.setEntering(ripple)
    }
  }

  computeRipple = ({ clientX, clientY }) => {
    const { left, top, width, height } = this.container.getBoundingClientRect()
    const x = clientX - left
    const y = clientY - top
    const rippleWidth = x < width / 2 ? width - x : x
    const rippleHeight = y < height / 2 ? height - y : y
    const diameter = 2 * Math.hypot(rippleWidth, rippleHeight)
    return { x, y, diameter }
  }

  setEntering = ({ x, y, diameter }) => {
    this.setState({ isVisible: true, isEntering: true, x, y, diameter })
    document.addEventListener('mouseup', this.setExiting)
  }

  setEntered = () => {
    this.setState({ isEntering: false })
  }

  setExiting = () => {
    this.setState({ isExiting: true })
    document.removeEventListener('mouseup', this.setExiting)
  }

  setExited = () => {
    this.setState({ isVisible: false, isExiting: false })
  }
}

export default Ripple
