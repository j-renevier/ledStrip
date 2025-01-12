class IsFresh {
  _valeur = 1;
  oldValues = {}
  http = null

  constructor(
    http
  ) {
    this.http = http
  }

  get() {
    return this._valeur;
  }
  set (newValue) {
    console.log(`La valeur a changé: ${newValue}`);
    this._valeur = newValue;
  }
  toogle () {
    console.log(`La valeur a changé: ${!this._valeur}`);
    this._valeur = !this._valeur;
  }

  throttle(callback, delay) {
    let last;
    let timer;

    return async (...args) => {
      const context = this;
      const now = +new Date();

      if (last && now < last + delay) {
        clearTimeout(timer);
        return new Promise((resolve) => {
          timer = setTimeout(async () => {
            last = now;
            try {
              await callback.apply(context, args);  // Appel de la fonction et gestion des erreurs
              resolve(true);
            } catch (error) {
              console.error("Erreur dans sendData:", error);
              resolve(false);  // Signale une erreur
            }
          }, delay);
        });
      } else {
        last = now;
        try {
          await callback.apply(context, args);  // Appel immédiat de la fonction
          return true;  // Signale le succès
        } catch (error) {
          console.error("Erreur dans sendData:", error);
          return false;  // Signale une erreur
        }
      }
    };
  }

  async refresh() {
    if (this._valeur === 1) return;
    const throttledSendData = this.throttle(this.sendData, 500);
    const success = await throttledSendData();
    if (success) {
      this._valeur = 1;
      console.log("_valeur remise à 1 après succès");
    } else {
      console.log("Erreur rencontrée, _valeur non changée");
    }
  }

  syncValues(method = 'POST') {
    const changedValues = this.getChangedValues();
    if (Object.keys(changedValues).length > 0) {
      console.log("Valeurs modifiées à envoyer :", changedValues);
      if (method === 'POST') {
        return this.http.post(body=changedValues);
      } else if (method === 'UPDATE') {
        return this.http.update(body=changedValues);
      }
    } else {
      return Promise.resolve("Aucune modification à envoyer.");
    }
  }

  getChangedValues() {
    const changedValues = {};
    for (const key in values) {
      if (!this.oldValues.hasOwnProperty(key) || JSON.stringify(newValues[key]) !== JSON.stringify(this._previousValues[key])) {
        changedValues[key] = values[key];
      }
    }
    this.oldValues = values;
    return changedValues;
  }
};

const http = new Http('', '')
const isFresh = new IsFresh(http)
let isOn = 0;

let oldValues, values = {
  light: 255,
  speed: 255, 
  defaultColor: ['#000000'],
  oneColor: ['#FF0000'],
  twoColor: ['#FF0000', '#00FF00'],
  threeColor: ['#FF0000', '#00FF00', '#0000FF'],
  dynamicColor: ['#FF0000', '#00FF00', '#0000FF']
}

document.addEventListener('DOMContentLoaded', (event) => {
  let ranges = [];
  ranges[0] = document.querySelector(".param.light")
  ranges[1] = document.querySelector(".param.speed")

  ranges.forEach(range => {
    const name = range.dataset.name
    range.querySelector('.title h4').addEventListener('click', (event) => {
      update(event, name, values[name]);
    });
    range.querySelector('button.decrement').addEventListener('click', (event) => {
      update(event, name, values[name]);
    });
    range.querySelector('button.increment').addEventListener('click', (event) => {
      update(event, name, values[name]);
    });
    range.querySelector('button.min').addEventListener('click', (event) => {
      update(event, name, values[name]);
    });
    range.querySelector('button.max').addEventListener('click', (event) => {
      update(event, name, values[name])
    })
    range.querySelector('input[type="number"]').addEventListener('change', (event) => {
      update(event, name, values[name])
    })
    range.querySelector('input[type="range"]').addEventListener('change', (event) => {
      update(event, name, values[name])
    })
  });

  const colors = document.querySelectorAll('input[type="color"]')
  colors.forEach(color =>
    color.addEventListener('change', (event)=> {
      updateColor(event)
    })
  )
});

const power = (event, http) => {
  isOn = !isOn
  http.post(body={power:isOn})
}

const update = (event, variable) => {
  const value = event.target.value
  const dataValue = event.target.dataset.value
  const dataStep = event.target.dataset.step

  if (value) {
    variable = Number(value)
  } else if (dataValue){
    variable = Number(dataValue)
  } else if (dataStep){
    variable = variable + Number(dataStep)
  }
  isFresh.toogle()
}

const updateColor = (event) => {
  console.log(event)
  const name = event.target.dataset.name
  const index = Number(event.target.dataset.index)
  values[name][index]= event.target.value
  event.target.parentElement.style.background = event.target.value
  isFresh.toogle()
}

const setup = async () => {
  const startValues = await this.get();
  console.log('start', startValues)

  document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('#inputNumberLight').value = values.light
    document.querySelector('#inputRangeLight').value = values.light
    document.querySelector('#inputNumberSpeed').value = values.speed
    document.querySelector('#inputRangeSpeed').value = values.speed
    
    document.querySelector('#input-static-default').value = values.defaultColor[0]
    document.querySelector('#input-static-one-first').value = values.oneColor[0]
    document.querySelector('#input-static-two-first').value = values.twoColor[0]
    document.querySelector('#input-static-two-second').value = values.twoColor[1]
    document.querySelector('#input-static-three-first').value = values.threeColor[0]
    document.querySelector('#input-static-three-second').value = values.threeColor[1]
    document.querySelector('#input-static-three-third').value = values.threeColor[2]
    document.querySelector('#input-dynamic-forward').value = values.threeColor[0]
    document.querySelector('#input-dynamic-back').value = values.threeColor[1]
    document.querySelector('#input-dynamic-forward-back').value = values.threeColor[2]
  })

}
setup()

// AJAX
class Http {
  constructor(url, headers = {}) {
    this.url = url;
    this.headers = headers;
  }

  xhrRequest(method, params, headers, body = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const urlWithParams = url + params

      xhr.open(method, urlWithParams, true);

      // Fusionner les headers fournis avec ceux par défaut
      headers = { ...this.headers, ...headers };

      // Définir les headers dans la requête
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }

      // Gestion des événements de l'objet XMLHttpRequest
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response); // Réponse OK
          } catch (error) {
            resolve(xhr.responseText); // Si la réponse n'est pas JSON
          }
        } else {
          reject({ status: xhr.status, statusText: xhr.statusText }); // Gestion des erreurs HTTP
        }
      };

      xhr.onerror = function() {
        reject({ status: xhr.status, statusText: xhr.statusText }); // Gestion des erreurs réseau
      };

      // Envoi de la requête
      if (method === 'GET' || method === 'DELETE') {
        xhr.send(); // GET et DELETE n'ont pas de body
      } else {
        xhr.send(JSON.stringify(body)); // POST, PUT, UPDATE, etc.
      }
    });
  }

  get(params = "", headers = {}) {
    return this.xhrRequest('GET', params, headers);
  }

  post(params = "", headers = {}, body = {}) {
    headers = { ...headers, 'Content-Type': 'application/json' };
    return this.xhrRequest('POST', params, headers, body);
  }

  update(params = "", headers = {}, body = {}) {
    headers = { ...headers, 'Content-Type': 'application/json' };
    return this.xhrRequest('UPDATE', params, headers, body);
  }

  delete(params = "", headers = {}) {
    return this.xhrRequest('DELETE', params, headers);
  }
}