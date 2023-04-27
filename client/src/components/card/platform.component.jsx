import React from 'react'

function Platforms({platforms}) {
  return (
    <div>
      <h3>Platforms</h3>
        <ul>
          {platforms?.map((platform, index) => (
            <li key={index}>{platform}</li>
          ))}
        </ul>
    </div>
  )
}

export default Platforms