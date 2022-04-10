function checkResult(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
    );
  }
}

export default function getIngredients(url) {
  return fetch(`${url}/ingredients`).then((res) => checkResult(res));
}