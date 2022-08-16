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

export function sendEmail(email) {
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => checkResult(res));
}

export function resetPassword(passwordValue, codeValue) {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: passwordValue,
      token: codeValue,
    }),
  }).then((res) => checkResult(res));;
}

export function login(email, password) {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResult(res));;
}

export function register(email, name, password) {
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => checkResult(res));;
}
