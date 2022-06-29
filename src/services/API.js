const getToken = async () => {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  const request = await fetch(URL);
  const requestJson = await request.json();
  return requestJson;
};

const getTrivia = async () => {
  const token = localStorage.getItem('token');
  const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export {
  getTrivia,
  getToken,
};
