import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import findPairs from './helpers/findPairs';

function App() {
  const input = useRef(null);
  const [players, setPlayers] = useState([]);
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data: { values } } = await axios.get('https://mach-eight.uc.r.appspot.com');
      setPlayers(values);
    };
    fetchPlayers();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (players.length > 0) {
      setPairs(findPairs(players, input.current.value));
    }
  };

  return (
    <div className="App">
      <input ref={input} type="text" />
      <button type="submit" onClick={(e) => handleSearch(e)}>Search</button>

      {/* <ul>
        {pairs.length > 0
        && pairs.map((players) => (
          <li key={`${players[0].first_name} ${players[0].last_name} ${players[1].first_name} ${players[1].last_name}`}>
            {`${players[0].first_name} ${players[1].last_name}`}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
