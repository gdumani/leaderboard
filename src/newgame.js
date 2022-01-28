import fetch from 'node-fetch';

const getGameCode = async () => {
  const RESPONSE = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Microvers API',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const GAME_CODE = await RESPONSE.json();
  return GAME_CODE;
};
export default getGameCode;