<h1 align="center">
  <br>
  API non ufficiali per i "Dati COVID-19 Italia"
</h1>

<h4 align="center">Semplici e veloci API (non ufficiali) che espongono l'accesso ai dati ufficiali sulla situazione del COVID-19 in Italia [pubblicati su GitHub dalla Protezione Civile](https://github.com/pcm-dpc/COVID-19).</h4>

<br />

## :green_book: Contenuti

1. [Introduzione](#Introduzione)
2. [Scopo del progetto](#scopo-del-progetto)
3. [Come usarlo](#come-usarlo)
4. [Contribuire](#contribution)
5. [Licenza](#Licenza)


<h2>Introduzione</h2>
<p align="left">Ogni giorno vengono estratti i dati relativi al COVID pubblicati dalla Protezione Civile su GitHub e inseriti in un database online accessibile tramite REST API.

**Non si garantisce l'esattezza dei contenuti** perché è un **progetto non ufficiale** e totalmente indipendente dalla Protezione Civile.

**L'accesso alle API è totalmente libero e gratuito.**
</p>

<h2>Scopo del progetto</h2>
<p align="left">I dati forniti dalla Protezione Civile su GitHub sono in formato JSON o CSV.
Sicuramente formati comodi ed accessibili per molti, ma non per tutti.
Ho pensato di offrire un'altra modalità di accesso, ovvero tramite REST API che restituiscono i contenuti in formato JSON.
<br />
Mi auguro che possano servire ad altri come come base per costruire progetti di analisi, visualizzazione e rappresentazione dei dati. 
<br />
</p>


<h2>Come usarlo</h2>

Il servizio è raggiungibile al seguente indirizzo: ita-covid-api.herokuapp.com e questo è un esempio: 'https://ita-covid-api.herokuapp.com/v1/national-trends/2020-10-01'

<h3>Open Endpoints</h3>

Gli "open endpoints" non hanno bisogno di autenticazione

1) [Trend nazionali](./docs/nationalTrends.md)
2) [Regioni](./docs/regions.md)
- Trend di una singola regione
- Elenco delle regioni
3) [Province](./docs/provinces.md)
- Trend di una singola provincia
- Trend delle province di una regione
- Elenco delle province
4) [Note](./docs/notes.md)




<h2>Contribuire</h2>
Sono molto felice di ricevere qualsiasi tipo di contribuito a questo progetto.
<br />
Affinché i contributi possano essere facili da gestire e trasparenti, vi invito ad utilizzare gli "issues" di GitHub.

Potete utilizzare la pagina del progetto su GitHub per i seguenti motivi: 

- Comunicare un bug
- Discutere lo stato attuale del codice
- Inviare un fix
- Proporre una nuova feature
- Diventare un mantainer

### In questo progetto usiamo [Github Flow](https://guides.github.com/introduction/flow/index.html), quindi tutto il codice deve essere modificato tramite PR.

Le Pull Request sono il modo migliore per cambiare il codice. Ogni Pull Request è benvenuta e apprezzata.

**Istruzioni per contribuire:**

1. Fork della repo and creazione della branch from `main`.
2. Se aggiungi codice che necessita di essere testato, aggiungi i test.
3. Se cambi le API, aggiorna la documentazione.
4. Assicurati che i test siano positivi.
5. Assicurati di usare il linter di default.
6. Crea una PR sulla base di un Issue

### :bug: Comunicare i bug tramite GitHub [issues](https://github.com/pixari/vue-i18n-extract/issues)

Usiamo GitHub issues per monitorare i public pubblicamente. Comunica un bug [creando una nuova issue]().

I migliori "Bug Report" tendono ad avere:

- Una rapida descrizione del problema
- Gli step per riprodurre il problema
- Quali sono le aspettative
- Cosa succede in realtà

<h2>Licenza</h2>
La licenza originale dei dati è la seguente: [Attribution 4.0 International](https://github.com/pcm-dpc/COVID-19/blob/master/LICENSE).
<br />
Anche questo progetto utilizza lo [stesso tipo di licenza](https://creativecommons.org/licenses/by/4.0/legalcode).
