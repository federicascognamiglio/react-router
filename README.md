**Esercizio PT.2**
Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio e della creazione del post!
- Aggiungiamo i link alla lista dei post
- Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post
- Al submit del form reindirizziamo l'utente verso la pagina di dettaglio del post creato

Bonus
1. Proviamo a inserire nella pagina di dettaglio una navigazione che ci consenta di andare al post precedente e a quello successivo.
2. Aggiungiamo la possibilità di ritornare dalla pagina di dettagli alla pagina precedente
3. Gestire la pagina Not found




**Esercizio PT.1**
Cominciate, installando nel vostro progetto backend (express-blog-api-crud) il pacchetto per gestire le CORS e impostate l'indirizzo del vostro progetto front-end. Ricordate di usare postman per testare le vostre API.

Riprendete l'esercizio precedente (react-form-multifileds) e prima di tutto adeguate i dati stampati e gli inputs del form ai dati che abbiamo nell'api - non tenete conto di tags per oggi (usate Postman per vedere la struttura di dati nel back-end).

A questo punto integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.
Al caricamento dell'applicazione, sfruttando l'hook useEffect, recuperiamo la lista dei post dal backend e la mostriamo nella pagina.

BONUS:
1. Durante il submit del form, assicuriamoci che questi dati vengano inviati al backend e correttamente salvati.
2. Implementare la funzionalità di cancellazione



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh