```mermaid
sequenceDiagram
    participant browser
    participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
server-->browser: Código de aceite (302) e redirecionamento
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->browser: documento HTML
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->browser: documento CSS
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/mains.js
activate server
server-->browser: documento JavaScript
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->browser: dados das notas
deactivate server

```