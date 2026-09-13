# Pionex-Tool-Leitfaden

## Inhalt

- Markt, Konto und Orders
- Bot API
- Earn Arbitrage und Earn Dual
- Parameter- und Ergebnisregeln

Toolnamen können durch den MCP-Host einen Serverpräfix erhalten.

## Markt, Konto und Orders

Öffentliche Marktwerkzeuge benötigen keinen API-Key:

- `pionex_market_get_symbol_info`: Symbolregeln, Mindestmengen und Präzision
- `pionex_market_get_trades`: letzte öffentliche Trades
- `pionex_market_get_depth`: Orderbuch
- `pionex_market_get_tickers`: 24-Stunden-Ticker
- `pionex_market_get_book_tickers`: beste Bid-/Ask-Preise
- `pionex_market_get_klines`: Kerzendaten

Private Lesezugriffe:

- `pionex_account_get_balance` und `pionex_wallet_get_balance_full`
- `pionex_orders_get_order` und `pionex_orders_get_order_by_client_order_id`
- `pionex_orders_get_open_orders`, `pionex_orders_get_all_orders`
- `pionex_orders_get_fills`, `pionex_orders_get_fills_by_order_id`

Mutationen:

- `pionex_orders_new_order`
- `pionex_orders_new_multiple_orders`: höchstens 20 Limit-Orders laut Pionex; der Server kann ein niedrigeres konfiguriertes Maximum erzwingen
- `pionex_orders_cancel_order`
- `pionex_orders_cancel_all_orders`

Bei einer vollständigen Statusaufnahme typischerweise zuerst Symbolregeln und Balances, dann offene Orders und nur bei Bedarf Historie/Fills abrufen. Für eine einzelne Order bevorzugt ihre ID oder `clientOrderId` statt eine breite Historienabfrage verwenden.

## Bot API

Der Server stellt die offiziell dokumentierten Bereiche bereit:

- allgemeine Bot-Orderliste
- Futures Grid: Detail, Erstellen, Prüfen, Anpassen, Reduzieren, Pausieren, Fortsetzen, Margin und Take-Profit/Stop-Loss
- Spot Grid: Detail, AI-Strategie, Erstellen, Prüfen, Anpassen, Investieren, Abbrechen und Profit extrahieren
- Smart Copy: Detail, Prüfen, Erstellen und Abbrechen
- KOL-Auswahlliste
- Custom Signals: Listener sowie Anlegen, Lesen, Bearbeiten und Löschen

Nutze für Futures Grid und Spot Grid die jeweiligen Check-Werkzeuge vor der Mutation. Übernimm die validierten Parameter exakt in den anschließenden Ausführungsaufruf, sofern Bernd keine Änderung verlangt. Prüfe nach dem Ausführen die zurückgegebene Bot-ID mit dem passenden Detailwerkzeug.

Der Begriff „Futures Grid“ in der Bot API ist nicht mit der separat als `Internal` markierten allgemeinen Futures REST API gleichzusetzen. Dieser Skill darf nicht so tun, als stünden nicht registrierte Futures-Konto- oder Futures-Orderwerkzeuge zur Verfügung.

## Earn Arbitrage und Earn Dual

Earn Arbitrage umfasst:

- Produkte und Nutzerbestände abrufen
- `stake`
- `unStake`

Earn Dual umfasst:

- Symbole, offene Produkte, Preise, Index- und historische Delivery-Preise
- Balances, Investments und Historie
- Investieren, Widerrufen und abgerechnete Erträge einsammeln

Vor einem Investment Produkt-ID, Basiswert, Abrechnungszeitpunkt, Zielpreis, Betrag und mögliche Abrechnungswährung aus aktuellen Produktdaten prüfen. Ein hoher angezeigter Ertrag ist keine garantierte Rendite. Bei Unstake oder Widerruf nicht behaupten, dass Liquidität sofort verfügbar sei, sofern die Werkzeugantwort das nicht bestätigt.

## Parameter- und Ergebnisregeln

- Verwende die vom Werkzeug angebotenen Schemas als maßgebliche Parameterquelle; diese Referenz ersetzt sie nicht.
- `symbol` verwendet üblicherweise `BASE_QUOTE`, zum Beispiel `BTC_USDT`.
- `base` und `quote` werden bei Bot-/Earn-Werkzeugen teilweise getrennt übergeben.
- Preise, Mengen, Beträge und Verhältnisse bleiben Strings, sofern das Schema sie als Strings definiert.
- Zeitpunkte und Zeitfenster nach dem jeweiligen Werkzeugschema übergeben. Den Authentifizierungs-Timestamp niemals selbst setzen; der Server erzeugt ihn unmittelbar vor dem Request.
- Optionale Werte nicht als leere Strings erfinden. Unbekannte optionale Parameter weglassen.
- Erfolgreiche Antworten bleiben in der ursprünglichen Pionex-Struktur. `structuredContent` bevorzugen; der Textinhalt enthält dieselben Daten formatiert.
- Bei `isError: true` sind insbesondere `httpStatus`, Pionex-`code`, `message`, `retryable` und die rohe `response` relevant.
