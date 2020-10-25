
# Regioni

## Trend di una regione

### Descrizione
Elenco dei trend di una singola regione

**Esempio**: https://ita-covid-api.herokuapp.com/v1/regions/getbyregion/13/2020-10-01

### Specifiche tecniche: 

**URL** : `/v1/regions/getbyregion/{codice_regione}/{date}?to={to}`

**Method** : `GET`

**Params**

  * codice_regione:
    * Mandatory: true
    * Format: int (i codice_regione utilizzabili sono forniti dalla lista delle regioni, endpoint "/list")
    * Description: il codice_regione della regione da filtrare
  
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


## Elenco delle regioni

### Descrizione
Elenco delle regioni presenti nei dati.
Nell'elenco viene fornito anche il codice_regione da utilizzare per gli altri endpoint.


**Esempio**: https://ita-covid-api.herokuapp.com/v1/regions/list'

### Specifiche tecniche: 

**URL** : `/v1/regions/list`

**Method** : `GET`

### Success Response

**Esempio di Response**

```json
{
  "status": 200,
  "message": "Success",
  "data": {
  "status": 200,
  "message": "Success",
  "data": {
    "regions": [
      {
        "denominazione_regione": "Abruzzo",
        "codice_regione": 13
      },
      {
        "denominazione_regione": "Basilicata",
        "codice_regione": 17
      },
      {
        "denominazione_regione": "Calabria",
        "codice_regione": 18
      },
      {
        "denominazione_regione": "Campania",
        "codice_regione": 15
      },
      {
        "denominazione_regione": "Emilia-Romagna",
        "codice_regione": 8
      },
      {
        "denominazione_regione": "Friuli Venezia Giulia",
        "codice_regione": 6
      },
      {
        "denominazione_regione": "Lazio",
        "codice_regione": 12
      },
      {
        "denominazione_regione": "Liguria",
        "codice_regione": 7
      },
      {
        "denominazione_regione": "Lombardia",
        "codice_regione": 3
      },
      {
        "denominazione_regione": "Marche",
        "codice_regione": 11
      },
      {
        "denominazione_regione": "Molise",
        "codice_regione": 14
      },
      {
        "denominazione_regione": "P.A. Bolzano",
        "codice_regione": 21
      },
      {
        "denominazione_regione": "P.A. Trento",
        "codice_regione": 22
      },
      {
        "denominazione_regione": "Piemonte",
        "codice_regione": 1
      },
      {
        "denominazione_regione": "Puglia",
        "codice_regione": 16
      },
      {
        "denominazione_regione": "Sardegna",
        "codice_regione": 20
      },
      {
        "denominazione_regione": "Sicilia",
        "codice_regione": 19
      },
      {
        "denominazione_regione": "Toscana",
        "codice_regione": 9
      },
      {
        "denominazione_regione": "Umbria",
        "codice_regione": 10
      },
      {
        "denominazione_regione": "Valle d'Aosta",
        "codice_regione": 2
      },
      {
        "denominazione_regione": "Veneto",
        "codice_regione": 5
      }
    ]
  }
}
```