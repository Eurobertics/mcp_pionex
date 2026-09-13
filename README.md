# MCP Pionex Management

Ein lokaler TypeScript-MCP-Server für die öffentlich nutzbaren Pionex REST APIs. Der Server spricht ausschließlich MCP über `stdio`; er öffnet keinen HTTP-Port. Ausgehende HTTPS-Aufrufe gehen direkt an Pionex.

## Umfang

Der Tool-Katalog wird aus den offiziellen [Pionex OpenAPI Specifications](https://github.com/pionex-official/pionex-open-api) erzeugt und enthält derzeit 70 Tools:

| Bereich | Tools | Inhalt |
| --- | ---: | --- |
| Trade | 17 | Symbole, Marktdaten, Spot-Konto, Orders und Batch-Orders |
| Wallet | 1 | Vollständige Kontoübersicht |
| Bot | 37 | Futures Grid, Spot Grid, Smart Copy und Signals |
| Earn Arbitrage | 4 | Produkte, Guthaben, Stake und Unstake |
| Earn Dual | 11 | Produkte, Preise, Investments und Abrechnung |

Die als `Internal` markierten Futures-, Institution-, Partner- und InstFund-APIs sowie WebSockets gehören bewusst noch nicht zu diesem Stand.

Die MCP-Toolnamen folgen, soweit vorhanden, der offiziellen Pionex-AI-Kit-Konvention, beispielsweise:

- `pionex_market_get_symbol_info`
- `pionex_orders_new_order`
- `pionex_orders_new_multiple_orders`
- `pionex_bot_create_spot_grid_order`
- `pionex_earn_dual_invest`

## Installation

```bash
npm install
npm run build
```

Voraussetzung ist Node.js 20 oder neuer.

## Konfiguration

Der MCP-Prozess liest seine Konfiguration aus Umgebungsvariablen. Öffentliche Marktdaten funktionieren ohne Zugangsdaten. Private Tools benötigen:

```dotenv
PIONEX_API_KEY=...
PIONEX_API_SECRET=...
```

Weitere Einstellungen stehen in [`.env.example`](.env.example):

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `PIONEX_API_BASE_URL` | `https://api.pionex.com` | Pionex-Basis-URL |
| `PIONEX_REQUEST_TIMEOUT_MS` | `15000` | Request-Timeout |
| `PIONEX_ALLOWED_SYMBOLS` | unbegrenzt | Kommagetrennte Allowlist, z. B. `BTC_USDT,ETH_USDT` |
| `PIONEX_MAX_ORDER_QUOTE_AMOUNT` | unbegrenzt | Maximales Quote-Volumen einer Order |
| `PIONEX_MAX_ORDER_BASE_SIZE` | unbegrenzt | Maximale Base-Menge einer Order |
| `PIONEX_MAX_BATCH_ORDERS` | `10` | Maximale Anzahl in einer Batch-Order |
| `PIONEX_MAX_BOT_INVESTMENT` | unbegrenzt | Maximales Bot-Investment |

Grenzwerte sind Dezimalstrings und werden ohne Fließkomma-Rundung verglichen. Für einen produktiven Trading-Key sollten mindestens Symbol-Allowlist und passende Betragsgrenzen gesetzt werden. Zusätzlich empfiehlt Pionex eine IP-Allowlist am API-Key.

Beispiel einer generischen MCP-Konfiguration:

```json
{
  "mcpServers": {
    "pionex": {
      "command": "node",
      "args": ["/absoluter/pfad/mcp_pionex_management/dist/server.js"],
      "env": {
        "PIONEX_API_KEY": "...",
        "PIONEX_API_SECRET": "...",
        "PIONEX_ALLOWED_SYMBOLS": "BTC_USDT,ETH_USDT",
        "PIONEX_MAX_ORDER_QUOTE_AMOUNT": "250"
      }
    }
  }
}
```

## Sicherheitsverhalten

- Schreibende Tools sind per MCP-Annotation als destruktiv markiert.
- Spot-Orders werden abhängig von Typ und Richtung validiert.
- Fehlende `clientOrderId`-Werte werden bei Einzel- und Batch-Orders automatisch erzeugt.
- Betragsgrenzen gelten auch für verschachtelte Batch- und Bot-Parameter.
- Der Client wiederholt schreibende Requests niemals automatisch.
- Ein gewichteter Limiter berücksichtigt Pionex' IP- und Account-Limit von jeweils 10 Requests pro Sekunde.
- Der Authentifizierungs-Timestamp wird intern unmittelbar vor dem Request erzeugt und ist kein Tool-Argument.

Die API-Key-Berechtigungen bei Pionex bleiben die härteste Grenze. Ein Key sollte nur die tatsächlich benötigten Rechte besitzen.

## Antwort- und Fehlerformat

Erfolgreiche Pionex-JSON-Antworten werden unverändert als MCP `structuredContent` und zusätzlich als formatiertes JSON im Textinhalt zurückgegeben. Es gibt keine eigene fachliche Response-Schicht.

Fehler werden mit `isError: true` und einer kleinen Transportbeschreibung ausgegeben:

```json
{
  "error": "PionexError",
  "message": "Original Pionex message",
  "httpStatus": 429,
  "code": "PIONEX_CODE",
  "retryable": true,
  "response": {}
}
```

`retryable` ist nur ein Hinweis für sichere Leseoperationen. Der Server führt selbst keine automatischen Wiederholungen aus.

## Entwicklung

```bash
npm run check
npm test
npm run build
```

Tool-Katalog nach einem Update des offiziellen OpenAPI-Repositories neu erzeugen:

```bash
npm run generate:catalog -- /pfad/zu/pionex-open-api
```

Der Generator berücksichtigt `openapi.yaml`, `openapi_wallet.yaml`, `openapi_bot.yaml`, `openapi_earn.yaml` und `openapi_earn_dual.yaml`.

## Skill

Unter [`skills/pionex-management`](skills/pionex-management) liegt ein begleitender Codex-Skill für die sichere Verwendung der MCP-Werkzeuge. Er beschreibt Analyse-, Trading-, Bot- und Earn-Abläufe sowie den Umgang mit unklaren Ergebnissen schreibender Aktionen.
