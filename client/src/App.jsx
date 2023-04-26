import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout.component';
import GamesList from './components/gamesList/game-list.components';
import TopGamesByPlaytime from './components/topGamesByPlaytime/topGameByPlaytime.componensts';
import TopGamesByPlayers from './components/topGamesByPlayers/topGameByPlayers.components';
import AddNewGame from './components/addNewGame/new-game.components';

const App = () => {
  return (
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
  );
};

export default App;
