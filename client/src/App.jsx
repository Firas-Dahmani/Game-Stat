import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout.component';
import GamesList from './components/gamesList/game-list.components';
import TopGamesByPlaytime from './components/topGamesByPlaytime/topGameByPlaytime.componensts';
import TopGamesByPlayers from './components/topGamesByPlayers/topGameByPlayers.components';
import AddNewGame from './components/addNewGame/new-game.components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<GamesList />} />
            <Route path="/top-games-playtime" element={<TopGamesByPlaytime />} />
            <Route path="/top-games-players" element={<TopGamesByPlayers />} />
            <Route path="/add-new-game" element={<AddNewGame />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
