
# Province

## Trend di una provincia

### Descrizione
Elenco dei trend di una singola provincia

**Esempio**: https://ita-covid-api.herokuapp.com/v1/provinces/getbyprovince/10/2020-10-01'

### Specifiche tecniche: 

**URL** : `/v1/provinces/getbyprovince/{codice_provincia}/{date}?to={to}`

**Method** : `GET`

**Params**

  * codice_provincia:
    * Mandatory: true
    * Format: int (i codice_provincia utilizzabili sono forniti dalla lista delle province, endpoint "/list")
    * Description: il codice_provincia
  
  * date:
    * Mandatory: true
    * Format: string (yyyy-mm-dd)
    * Description: la data minima dalla quale estrarre i dati (dal giorno..)
  
**Query**

  * to:
    * Mandatory: false
    * Format: string (yyyy-mm-dd)
    * Description: la data massima oltre la quale non estrarre i dati (al giorno..)
  
### Success Response

**Esempio di Response**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "regions": [{
        "data": "2020-10-10T17:00:00",
        "stato": "ITA",
        "codice_regione": 12,
        "denominazione_regione": "Lazio",
        "lat": 41.89277044,
        "long": 12.48366722,
        "ricoverati_con_sintomi": 884,
        "terapia_intensiva": 57,
        "totale_ospedalizzati": 941,
        "isolamento_domiciliare": 8564,
        "totale_positivi": 9505,
        "variazione_totale_positivi": 319,
        "nuovi_positivi": 384,
        "dimessi_guariti": 9042,
        "deceduti": 972,
        "casi_da_sospetto_diagnostico": 9070,
        "casi_da_screening": 10449,
        "totale_casi": 19519,
        "tamponi": 1002753,
        "casi_testati": 826222,
        "note": null,
        "timestamp": 1602342000000,
        "meta": {
          "revision": 0,
          "created": 1603714749126,
          "version": 0
        },
        "$loki": 4816
      }
    ]
  }
}
```

## Trend delle province di una regione

### Descrizione
Elenco dei trend delle province di una regione

**Esempio**: https://ita-covid-api.herokuapp.com/provinces/getbyregion/11/2020-10-01

### Specifiche tecniche: 

**URL** : `/v1/provinces/getbyregion/{codice_regione}/{date}?to={to}`

**Method** : `GET`

**Params**

  * codice_regione:
    * Mandatory: true
    * Format: int (i codice_regione utilizzabili sono forniti dalla lista delle regioni)
    * Description: il codice_regione
  
  * date:
    * Mandatory: true
    * Format: string (yyyy-mm-dd)
    * Description: la data minima dalla quale estrarre i dati (dal giorno..)
  
**Query**

  * to:
    * Mandatory: false
    * Format: string (yyyy-mm-dd)
    * Description: la data massima oltre la quale non estrarre i dati (al giorno..)
  
### Success Response

**Esempio di Response**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "regions": [      {
        "data": "2020-10-01T17:00:00",
        "stato": "ITA",
        "codice_regione": 11,
        "denominazione_regione": "Marche",
        "codice_provincia": 41,
        "denominazione_provincia": "Pesaro e Urbino",
        "sigla_provincia": "PU",
        "lat": 43.91014021,
        "long": 12.91345989,
        "totale_casi": 3130,
        "note": null,
        "timestamp": 1601564400000,
        "meta": {
          "revision": 0,
          "created": 1603714749055,
          "version": 0
        },
        "$loki": 30287
      },
      {
        "data": "2020-10-01T17:00:00",
        "stato": "ITA",
        "codice_regione": 11,
        "denominazione_regione": "Marche",
        "codice_provincia": 42,
        "denominazione_provincia": "Ancona",
        "sigla_provincia": "AN",
        "lat": 43.61675973,
        "long": 13.5188753,
        "totale_casi": 2085,
        "note": null,
        "timestamp": 1601564400000,
        "meta": {
          "revision": 0,
          "created": 1603714749055,
          "version": 0
        },
        "$loki": 30288
      }
    ]
  }
}
```

## Elenco delle province

### Descrizione
Elenco delle province e dei relativi codice_provincia

**Esempio**: https://ita-covid-api.herokuapp.com/v1/provinces/list

### Specifiche tecniche: 

**URL** : `/v1/provinces/list`

**Method** : `GET`

### Success Response

**Esempio di Response**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "provinces": [
      {
        "denominazione_provincia": "L'Aquila",
        "codice_provincia": 66
      },
      {
        "denominazione_provincia": "Teramo",
        "codice_provincia": 67
      },
      {
        "denominazione_provincia": "Pescara",
        "codice_provincia": 68
      },
      {
        "denominazione_provincia": "Chieti",
        "codice_provincia": 69
      }
    ]
  }
}
```