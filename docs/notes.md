## NOte

### Descrizione
Elenco delle note su base temporale

**Esempio:** https://ita-covid-api.herokuapp.com/v1/notes/2020-10-01

### Specifiche tecniche: 

**URL** : `/v1/notes/{date}?to={to}`

**Method** : `GET`

**Params**

  * date:
    * Mandatory: true
    * Format: string (yyyy-mm-dd)
    * Description: la data minima dalla quale estrarre i dati (dal giorno..)
  
**Query**

  * to:
    * Mandatory: false
    * Format: string (yyyy-mm-dd)
    * Description: la data massima oltre la quale non estrarre i dati (al giorno..)

#### Success Response

**Esempio di Response**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "notes": [
      {
        "data": "2020-03-07T17:00:00",
        "note": "La Provincia di Brescia ha comunicato dati parziali di 300 casi positivi",
        "timestamp": 1583596800000,
        "meta": {
          "revision": 0,
          "created": 1603731908703,
          "version": 0
        },
        "$loki": 1
      },
      {
        "data": "2020-03-10T17:00:00",
        "note": "La Regione Lombardia ha comunicato dati parziali",
        "timestamp": 1583856000000,
        "meta": {
          "revision": 0,
          "created": 1603731908703,
          "version": 0
        },
        "$loki": 2
      },
    ]
  }
}
```