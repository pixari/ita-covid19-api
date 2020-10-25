## Tendenza nazionale

### Descrizione
Mostra una report sintetico dei dati nazionali quotidiani dall'inizio della pandemia ad oggi.

**Esempio:**
'https://ita-covid-api.herokuapp.com/v1/national-trends/2020-10-01'

### Specifiche tecniche: 

**URL** : `/v1/national-trends/{date}?to={to}`

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
    "nationalTrends": [
      {
        "data": "2020-10-01T17:00:00",
        "stato": "ITA",
        "ricoverati_con_sintomi": 3097,
        "terapia_intensiva": 291,
        "totale_ospedalizzati": 3388,
        "isolamento_domiciliare": 49259,
        "totale_positivi": 52647,
        "variazione_totale_positivi": 1384,
        "nuovi_positivi": 2548,
        "dimessi_guariti": 228844,
        "deceduti": 35918,
        "casi_da_sospetto_diagnostico": 249940,
        "casi_da_screening": 67469,
        "totale_casi": 317409,
        "tamponi": 11452158,
        "casi_testati": 6916588,
        "note": null,
        "timestamp": 1601571600,
        "meta": {
          "revision": 0,
          "created": 1603667428381,
          "version": 0
        },
        "$loki": 221
      }
    ]
  }
}
```