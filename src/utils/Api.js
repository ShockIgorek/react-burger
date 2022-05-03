const BASE_URL = 'https://norma.nomoreparties.space/api'
//проверка ответа сервера
function checkResult(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
    );
  }
}

export function getIngredients() {
  return fetch(`${BASE_URL}/ingredients`).then((res) => checkResult(res));
}

export function sendIngredients(ingredientsIds) {
  const burgerData = {
    'ingredients': ingredientsIds
  }
  return fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(burgerData)
  }).then((res) => checkResult(res));
}
