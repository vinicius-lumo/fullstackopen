```mermaid
sequenceDiagram
    participant browser
    participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server-->browser: Código de criado (201)
deactivate server

Note right of browser: O código spa.js insere o nova nota no HTML já carregado.

```