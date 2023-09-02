import React from 'react'
import PropTypes from 'prop-types'

function card(props) {
  return (
    <div>
      <div className='container'>
        <div className='logo'></div>
        <div className='heading'>{props}</div>
        <div className='description'></div>
        <div className='button'>
          <div className='buttonTxt'>Learn More</div>
        </div>


      </div>
    </div>
  )
}

card.propTypes = {

}

export default card
