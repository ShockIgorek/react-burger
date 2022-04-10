const url = 'https://norma.nomoreparties.space/api'
//проверка статуса запроса
function requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
}

  //* Запрос данных 
export default function getIngredients() {
    return fetch(`${url}/ingredients`).then((res) => requestResult(res)).catch((err) => {console.error(err);});
  }

