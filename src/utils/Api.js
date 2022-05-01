function checkResult(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
    );
  }
}

function sendIngredients (url, ids) {
  const data = {
    'ingredients': ids
  }
  return fetch(`${url}/orders`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)}).then((res) => checkResult(res)) 
}


function getIngredients(url) {
  return fetch(`${url}/ingredients`).then((res) => checkResult(res));
}

export default(getIngredients ,sendIngredients)