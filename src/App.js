import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import findPairs from './helpers/findPairs';
import { Th, Td } from './components/tables/Tables';

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
      <div className="pt-16 flex flex-col items-center">
        <div className="max-w-max bg-gray-900 p-16 rounded-3xl flex flex-col items-center mb-16">
          <h1 className="font-bold text-5xl p-4 border-4 rounded-xl border-red-700 mb-1">NBAPairs</h1>
          <h2 className="font-bold text-2xl tracking-tighter mb-8">Find the perfect Pairs</h2>
          <form action="|" className="flex flex-col items-center">
            <input ref={input} type="text" className="max-w-md text-gray-800 font-light text-center px-8 py-2 mb-4" />
            <button type="submit" onClick={(e) => handleSearch(e)} className="bg-gray-600 font-light px-8 py-2 mb-8">Search</button>
            {pairs.length > 0 && (
            <p className="mb-2">
              Number of results:
              {' '}
              <span className="italic font-bold text-lg">{pairs.length}</span>
            </p>
            )}
          </form>

          <table className="table-auto text-center">
            <thead>
              <tr>
                <Th>Player #1</Th>
                <Th>H (in)</Th>
                <Th>Player #2</Th>
                <Th>H (in)</Th>
              </tr>
            </thead>

            <tbody>
              {pairs.length > 0 ? pairs.map((p) => (
                <tr key={`${p[0]} ${p[1]}`}>
                  <Td>{`${p[0].first_name} ${p[0].last_name}`}</Td>
                  <Td>{p[0].h_in}</Td>
                  <Td>{`${p[1].first_name} ${p[1].last_name}`}</Td>
                  <Td>{p[1].h_in}</Td>
                </tr>
              )) : (
                <tr>
                  <Td colSpan="4">No matches found</Td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
