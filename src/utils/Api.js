class Api {
  constructor({ baseUrl, options }) {
    this._url = baseUrl;
    this._options = options;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getAll(word) {
    return fetch(`${this._url}/${word}`, this._options).then(
      this._handleResponse
    );
  }

  getOption(word, option) {
    return fetch(`${this._url}/${word}/${option}`, this._options).then(
      this._handleResponse
    );
  }

  getRhymes(word) {
    return fetch(`${this._url}/${word}/rhymes`, this._options).then(
      this._handleResponse
    );
  }
}

const api = new Api({
  baseUrl: "https://wordsapiv1.p.rapidapi.com/words",
  options: {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words",
    headers: {
      "X-RapidAPI-Key": "c7a10e4467msh5fda8d1d0e50f4cp1d0b1djsn117812c6f23b",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  },
});

export default api;
