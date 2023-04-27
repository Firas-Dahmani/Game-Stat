import React from 'react'

function Dropdown({setSelectedGenre, selectedGenre, setSelectedPlatform, selectedPlatform}) {
  return (
    <div className="filter-container">
      <div className="filter-item">
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          <option value="FPS">FPS</option>
          <option value="Sport">Sport</option>
          <option value="MOBA">MOBA</option>
          <option value="MMORPG">MMORPG</option>
          <option value="Card Game">Card Game</option>
          <option value="Multiplayer">Multiplayer</option>
        </select>
      </div>
      <div className="filter-item">
        <label htmlFor="platform">Platform:</label>
        <select
          id="platform"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="">Select Platform</option>
          <option value="PC">PC</option>
          <option value="PS4">PS4</option>
          <option value="XBOX">XBOX</option>
          <option value="Android">Android</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdown