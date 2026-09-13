// Generated from pionex-official/pionex-open-api at unknown. Do not edit manually.
import type { EndpointDefinition } from "./types.js";

export const endpointCatalog: EndpointDefinition[] = [
  {
    "name": "pionex_market_get_symbol_info",
    "title": "Get symbols info",
    "description": "Get symbols info\n\nGet trading pair information. Weight: 5.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/common/symbols",
    "authenticated": false,
    "destructive": false,
    "weight": 5,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbols": {
          "type": "string",
          "example": "BTC_USDT,ETH_USDT",
          "description": "Concatenate multiple symbols with ','"
        },
        "type": {
          "type": "string",
          "enum": [
            "SPOT",
            "PERP"
          ],
          "description": "Market type. Defaults to SPOT when symbol is not specified."
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbols",
      "type"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_market_get_trades",
    "title": "Get market trades",
    "description": "Get market trades\n\nGet recent trades. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/market/trades",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        },
        "limit": {
          "type": "integer",
          "default": 100,
          "minimum": 10,
          "maximum": 500,
          "description": "Default: 100. Range: 10 - 500"
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "limit"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_market_get_depth",
    "title": "Get order book depth",
    "description": "Get order book depth\n\nGet order book snapshot. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/market/depth",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        },
        "limit": {
          "type": "integer",
          "default": 20,
          "minimum": 1,
          "maximum": 1000,
          "description": "Default: 20. Range: 1 - 1000"
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "limit"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_market_get_tickers",
    "title": "Get 24hr tickers",
    "description": "Get 24hr tickers\n\nGet 24-hour price change statistics. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/market/tickers",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol. Returns all tickers if not specified."
        },
        "type": {
          "type": "string",
          "enum": [
            "SPOT",
            "PERP"
          ],
          "description": "Defaults to SPOT if symbol is not specified. Accepts SPOT or PERP."
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "type"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_market_get_book_tickers",
    "title": "Get book tickers",
    "description": "Get book tickers\n\nGet best bid/ask prices. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/market/bookTickers",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol. Returns all if not specified."
        },
        "type": {
          "type": "string",
          "enum": [
            "SPOT",
            "PERP"
          ],
          "description": "Defaults to PERP if symbol is not specified. Accepts SPOT or PERP."
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "type"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_market_get_klines",
    "title": "Get klines (candlestick data)",
    "description": "Get klines (candlestick data)\n\nGet OHLCV candlestick data. Weight: 1. Maximum 10,000 records.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/market/klines",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        },
        "interval": {
          "type": "string",
          "enum": [
            "1M",
            "5M",
            "15M",
            "30M",
            "60M",
            "4H",
            "8H",
            "12H",
            "1D"
          ],
          "description": "Kline interval"
        },
        "endTime": {
          "type": "integer",
          "format": "int64",
          "description": "End time in milliseconds"
        },
        "limit": {
          "type": "integer",
          "default": 100,
          "minimum": 1,
          "maximum": 500,
          "description": "Default: 100. Range: 1 - 500"
        }
      },
      "required": [
        "symbol",
        "interval"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "interval",
      "endTime",
      "limit"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_account_get_balance",
    "title": "Get account balances",
    "description": "Get account balances\n\nGet trading account balances (excludes bot and earn accounts). Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/account/balances",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {},
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_get_order",
    "title": "Get order",
    "description": "Get order\n\nGet order details by order ID. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/order",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "orderId": {
          "type": "integer",
          "format": "int64",
          "description": "Order ID"
        }
      },
      "required": [
        "orderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "orderId"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_new_order",
    "title": "New order",
    "description": "New order\n\nPlace a new order. Weight: 1.",
    "category": "trade",
    "method": "POST",
    "path": "/api/v1/trade/order",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "description": "Trading pair symbol",
          "example": "BTC_USDT"
        },
        "side": {
          "type": "string",
          "enum": [
            "BUY",
            "SELL"
          ],
          "description": "Order direction"
        },
        "type": {
          "type": "string",
          "enum": [
            "LIMIT",
            "MARKET"
          ],
          "description": "Order type"
        },
        "clientOrderId": {
          "type": "string",
          "description": "Client order ID (alphanumeric and hyphen, max 64 characters)",
          "maxLength": 64,
          "pattern": "^[a-zA-Z0-9-]+$"
        },
        "size": {
          "type": "string",
          "description": "Order quantity (required for LIMIT orders and MARKET sell orders)"
        },
        "price": {
          "type": "string",
          "description": "Order price (required for LIMIT orders)"
        },
        "amount": {
          "type": "string",
          "description": "Order amount (required for MARKET buy orders)"
        },
        "IOC": {
          "type": "boolean",
          "description": "Immediate-or-cancel flag",
          "default": false
        }
      },
      "required": [
        "symbol",
        "side",
        "type"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "symbol",
      "side",
      "type",
      "clientOrderId",
      "size",
      "price",
      "amount",
      "IOC"
    ]
  },
  {
    "name": "pionex_orders_cancel_order",
    "title": "Cancel order",
    "description": "Cancel order\n\nCancel an existing order. Weight: 1.",
    "category": "trade",
    "method": "DELETE",
    "path": "/api/v1/trade/order",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "description": "Trading pair symbol",
          "example": "BTC_USDT"
        },
        "orderId": {
          "type": "integer",
          "format": "int64",
          "description": "Order ID to cancel"
        }
      },
      "required": [
        "symbol",
        "orderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "symbol",
      "orderId"
    ]
  },
  {
    "name": "pionex_orders_new_multiple_orders",
    "title": "New multiple orders",
    "description": "New multiple orders\n\nPlace multiple orders at once (up to 20, LIMIT only). Weight: 1.",
    "category": "trade",
    "method": "POST",
    "path": "/api/v1/trade/massOrder",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "description": "Trading pair symbol",
          "example": "BTC_USDT"
        },
        "orders": {
          "type": "array",
          "description": "Collection of orders (up to 20)",
          "maxItems": 20,
          "items": {
            "type": "object",
            "required": [
              "side",
              "type",
              "size",
              "price"
            ],
            "properties": {
              "side": {
                "type": "string",
                "enum": [
                  "BUY",
                  "SELL"
                ]
              },
              "type": {
                "type": "string",
                "enum": [
                  "LIMIT"
                ],
                "description": "Only LIMIT orders are supported"
              },
              "clientOrderId": {
                "type": "string",
                "description": "Client order ID (alphanumeric and hyphen, max 64 characters)",
                "maxLength": 64
              },
              "size": {
                "type": "string",
                "description": "Order quantity"
              },
              "price": {
                "type": "string",
                "description": "Order price"
              }
            }
          }
        }
      },
      "required": [
        "symbol",
        "orders"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "symbol",
      "orders"
    ]
  },
  {
    "name": "pionex_orders_get_order_by_client_order_id",
    "title": "Get order by client order ID",
    "description": "Get order by client order ID\n\nGet order details by client order ID. Weight: 1.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/orderByClientOrderId",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "clientOrderId": {
          "type": "string",
          "description": "Client order ID"
        }
      },
      "required": [
        "clientOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "clientOrderId"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_get_open_orders",
    "title": "Get open orders",
    "description": "Get open orders\n\nGet all open orders for a symbol. Maximum 200 open orders per symbol. Weight: 5.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/openOrders",
    "authenticated": true,
    "destructive": false,
    "weight": 5,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_get_all_orders",
    "title": "Get all orders",
    "description": "Get all orders\n\nGet all orders (open and closed) for a symbol. Weight: 5.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/allOrders",
    "authenticated": true,
    "destructive": false,
    "weight": 5,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        },
        "startTime": {
          "type": "integer",
          "format": "int64",
          "description": "Start time in milliseconds"
        },
        "endTime": {
          "type": "integer",
          "format": "int64",
          "description": "End time in milliseconds"
        },
        "limit": {
          "type": "integer",
          "default": 50,
          "minimum": 1,
          "maximum": 200,
          "description": "Default: 50. Range: 1 - 200. Returns latest orders when exceeding limit."
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "startTime",
      "endTime",
      "limit"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_cancel_all_orders",
    "title": "Cancel all orders",
    "description": "Cancel all orders\n\nCancel all open orders for a symbol. Weight: 1.",
    "category": "trade",
    "method": "DELETE",
    "path": "/api/v1/trade/allOrders",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "description": "Trading pair symbol",
          "example": "BTC_USDT"
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "symbol"
    ]
  },
  {
    "name": "pionex_orders_get_fills",
    "title": "Get fills",
    "description": "Get fills\n\nGet trade fills for a symbol. Returns latest 100 fills when exceeding limit. Weight: 5.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/fills",
    "authenticated": true,
    "destructive": false,
    "weight": 5,
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "example": "BTC_USDT",
          "description": "Trading pair symbol"
        },
        "startTime": {
          "type": "integer",
          "format": "int64",
          "description": "Start time in milliseconds"
        },
        "endTime": {
          "type": "integer",
          "format": "int64",
          "description": "End time in milliseconds"
        }
      },
      "required": [
        "symbol"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "symbol",
      "startTime",
      "endTime"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_orders_get_fills_by_order_id",
    "title": "Get fills by order ID",
    "description": "Get fills by order ID\n\nGet trade fills for a specific order. Weight: 5.",
    "category": "trade",
    "method": "GET",
    "path": "/api/v1/trade/fillsByOrderId",
    "authenticated": true,
    "destructive": false,
    "weight": 5,
    "inputSchema": {
      "type": "object",
      "properties": {
        "orderId": {
          "type": "integer",
          "format": "int64",
          "description": "Order ID. Returns empty list if not found."
        },
        "fromId": {
          "type": "integer",
          "format": "int64",
          "description": "Return 100 earlier fills before this fill ID. Returns latest fills if unspecified."
        }
      },
      "required": [
        "orderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "orderId",
      "fromId"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_wallet_get_balance_full",
    "title": "Get full account balances overview",
    "description": "Get full account balances overview\n\nQuery all account balances overview including Spot (Bot Account) and Futures (Trader Account) dimensions,\nwith price information for each coin and total USDT/BTC valuations. Weight: 1.\n",
    "category": "wallet",
    "method": "GET",
    "path": "/api/v1/wallet/balancesFull",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "appLang": {
          "type": "string",
          "description": "Application language (takes priority over sysLang)"
        },
        "sysLang": {
          "type": "string",
          "description": "System language (used as fallback when appLang is empty)"
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "appLang",
      "sysLang"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_get_bot_orders",
    "title": "Get bot order list",
    "description": "Get bot order list\n\nQuery bot order list with optional filters by order type, status, and trading pair. Supports pagination. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/orders",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "default": "running",
          "description": "Order status filter:\n`running` - Running orders (default),\n`finished` - Closed/cancelled orders\n"
        },
        "base": {
          "type": "string",
          "description": "Base currency filter (e.g. BTC)"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency filter (e.g. USDT)"
        },
        "pageToken": {
          "type": "string",
          "description": "Pagination token (from `nextPageToken` or `previousPageToken` in response)"
        },
        "buOrderTypes": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Order type filter. Can pass multiple values. If omitted, returns all types.\nSupported values: `futures_grid`, `future_hedge_grid` (Cross Margin Futures Grid), `spot_grid`, `smart_copy`.\n"
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "status",
      "base",
      "quote",
      "pageToken",
      "buOrderTypes"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_get_futures_grid_order",
    "title": "Get futures grid order",
    "description": "Get futures grid order\n\nQuery a futures grid bot order by ID. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/orders/futuresGrid/order",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "lang": {
          "type": "string",
          "description": "Language"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "buOrderId",
      "lang"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_create_futures_grid_order",
    "title": "Create futures grid order",
    "description": "Create futures grid order\n\nCreate a new futures grid bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/create",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency",
          "example": "USDT"
        },
        "copyFrom": {
          "type": "string",
          "description": "Copy source order ID"
        },
        "copyType": {
          "type": "string",
          "description": "Copy type"
        },
        "copyBotOrderId": {
          "type": "string",
          "description": "Copy bot order ID. Set this to the `bu_order_id` of an existing copy trading pool's lead order to join that pool: the newly created futures grid order will be attached to the pool and copied by its followers. This is the only field that makes a new order join an existing copy trading pool, so it must be a valid lead order ID — an invalid or closed value will cause the request to fail."
        },
        "buOrderData": {
          "type": "object",
          "required": [
            "top",
            "bottom",
            "row",
            "grid_type",
            "trend",
            "leverage",
            "quoteInvestment"
          ],
          "properties": {
            "top": {
              "type": "string",
              "description": "Grid upper price"
            },
            "bottom": {
              "type": "string",
              "description": "Grid lower price"
            },
            "row": {
              "type": "number",
              "description": "Number of grid levels"
            },
            "grid_type": {
              "type": "string",
              "description": "Grid spacing type: `arithmetic` (equal difference) or `geometric` (equal ratio)",
              "enum": [
                "arithmetic",
                "geometric"
              ]
            },
            "trend": {
              "type": "string",
              "description": "Grid direction: `long`, `short`, or `no_trend` (neutral)",
              "enum": [
                "long",
                "short",
                "no_trend"
              ]
            },
            "leverage": {
              "type": "number",
              "description": "Leverage multiplier"
            },
            "extraMargin": {
              "type": "string",
              "description": "Extra margin amount"
            },
            "quoteInvestment": {
              "type": "string",
              "description": "Investment amount"
            },
            "condition": {
              "type": "string",
              "description": "Trigger price (for conditional orders)"
            },
            "conditionDirection": {
              "type": "string",
              "description": "Trigger direction: \"-1\" (price drops to) or \"1\" (price rises to)",
              "enum": [
                "-1",
                "1"
              ]
            },
            "lossStopType": {
              "type": "string",
              "description": "Stop loss type: `price` (default), `profit_amount`, `profit_ratio`, `price_limit`",
              "enum": [
                "price",
                "profit_amount",
                "profit_ratio",
                "price_limit"
              ]
            },
            "lossStop": {
              "type": "string",
              "description": "Stop loss value (interpretation depends on lossStopType)"
            },
            "lossStopDelay": {
              "type": "number",
              "description": "Stop loss delay in seconds"
            },
            "profitStopType": {
              "type": "string",
              "description": "Take profit type: `price` (default), `profit_amount`, `profit_ratio`, `price_limit`",
              "enum": [
                "price",
                "profit_amount",
                "profit_ratio",
                "price_limit"
              ]
            },
            "profitStop": {
              "type": "string",
              "description": "Take profit value (interpretation depends on profitStopType)"
            },
            "profitStopDelay": {
              "type": "number",
              "description": "Take profit delay in seconds"
            },
            "lossStopHigh": {
              "type": "string",
              "description": "Upper stop loss price for neutral grid (above top)"
            },
            "shareRatio": {
              "type": "string",
              "description": "Profit sharing ratio"
            },
            "investCoin": {
              "type": "string",
              "description": "Investment currency: `USDT` or quote currency (default)"
            },
            "investmentFrom": {
              "type": "string",
              "description": "Funding source: `USER` (default), `FUTURE_GRID_BONUS`",
              "enum": [
                "USER",
                "FUTURE_GRID_BONUS"
              ]
            },
            "uiInvestCoin": {
              "type": "string",
              "description": "Frontend-recorded investment currency type (stored only)"
            },
            "lossStopLimitPrice": {
              "type": "string",
              "description": "Limit stop loss price (when lossStopType=price_limit)"
            },
            "lossStopLimitHighPrice": {
              "type": "string",
              "description": "Upper limit stop loss price for neutral grid (when lossStopType=price_limit)"
            },
            "profitStopLimitPrice": {
              "type": "string",
              "description": "Limit take profit price (when profitStopType=price_limit)"
            },
            "slippage": {
              "type": "string",
              "description": "Open position slippage (e.g. \"0.01\" = 1%)"
            },
            "bonusId": {
              "type": "string",
              "description": "Bonus UUID (when investmentFrom=FUTURE_GRID_BONUS)"
            },
            "uiExtraData": {
              "type": "string",
              "description": "Frontend extra data for coin-margined futures grid"
            },
            "movingIndicatorType": {
              "type": "string",
              "description": "Moving indicator type (e.g. `sma`)"
            },
            "movingIndicatorInterval": {
              "type": "string",
              "description": "Moving indicator interval (e.g. 1m, 15m, 30m, 1h, 4h, 12h)"
            },
            "movingIndicatorParam": {
              "type": "string",
              "description": "Moving indicator parameters JSON (e.g. {\"length\":720})"
            },
            "movingTrailingUpParam": {
              "type": "string",
              "description": "SMA trailing up trigger ratio (e.g. 0.05)"
            },
            "cateType": {
              "type": "string",
              "description": "Category type",
              "enum": [
                "FULLY_HEDGING",
                "LOAN_GRID",
                "LEVERAGE_GRID",
                "FUTURE_GRID_COIN_MARGINED"
              ]
            },
            "movingTop": {
              "type": "string",
              "description": "Moving grid upper limit"
            },
            "movingBottom": {
              "type": "string",
              "description": "Moving grid lower limit"
            },
            "enableFollowClosed": {
              "type": "boolean",
              "description": "Whether to follow close"
            }
          }
        }
      },
      "required": [
        "base",
        "quote",
        "buOrderData"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "copyFrom",
      "copyType",
      "copyBotOrderId",
      "buOrderData"
    ]
  },
  {
    "name": "pionex_bot_check_futures_grid_params",
    "title": "Check futures grid parameters",
    "description": "Check futures grid parameters\n\nValidate futures grid bot creation parameters and estimate investment values without creating an order. Weight: 1.\n\nPass a positive `quote_investment` to receive full estimate fields.\nThe current market price is fetched automatically — `open_price` is not required.\n\n**Extra Margin Modes** (controlled by `extra_margin`):\n\n| | `extra_margin=false` (Manual) | `extra_margin=true` (Auto-split) |\n|---|---|---|\n| `quote_investment` meaning | Trading capital only | Total input (auto-split into trading capital + extra margin) |\n| `extra_margin_amount` | User-specified extra margin, on top of `quote_investment` | Typically omitted; system auto-calculates |\n| `estimate_investment` | = `quote_investment` | < `quote_investment` (trading capital portion) |\n| `estimate_extra_margin` | = `extra_margin_amount` | Auto-calculated (= `quote_investment` − `estimate_investment`) |\n| `min/max_investment` | Range for trading capital (excl. extra margin) | Range for total input (incl. extra margin) |\n\n**FailedWithData**: For errors marked \"Yes\" below, the response includes a `data` field\neven when `result=false`, containing `min_investment`, `max_investment`, and `slippage`\nso the client can display the valid investment range.\n\n**Validation error messages** (returned in `message` when `result` is `false`):\n\n| Message | Cause | Includes data |\n|---|---|---|\n| `base should end with .PERP` | `base` must end with `.PERP`, e.g. `BTC.PERP` | No |\n| `invalid trend` | `trend` must be `long`, `short`, or `no_trend` | No |\n| `invalid grid_type` | `grid_type` must be `arithmetic` or `geometric` | No |\n| `bottom must greater than 0` | `bottom` must be a positive number | No |\n| `top must greater than bottom` | `top` must be strictly greater than `bottom` | No |\n| `top must less or equal than max:{maxPrice}` | `top` exceeds the symbol's maximum allowed price | No |\n| `top not match quote precision` | `top` has more decimal places than the symbol allows | No |\n| `bottom not match quote precision` | `bottom` has more decimal places than the symbol allows | No |\n| `row must greater than 1` | `row` must be >= 2 | No |\n| `row must less than 501` | `row` must be <= 500 | No |\n| `invalid leverage` | `leverage` is outside the symbol's allowed leverage range | No |\n| `extra_margin should greater than or equal 0` | `extra_margin_amount` must be >= 0 | No |\n| `invalid condition_direction` | `condition_direction` must be `\"\"`, `\"1\"`, or `\"-1\"` | No |\n| `quote_investment not match spending precision: max {N} decimal places` | `quote_investment` exceeds the allowed decimal precision | Yes |\n| `extra_margin_amount not match spending precision: max {N} decimal places` | `extra_margin_amount` exceeds the allowed decimal precision | Yes |\n| `grid profit per volume less than 0` | Grid range too narrow or `row` too large — profit per grid is negative | Yes |\n| `less than min investment` | `quote_investment` is `\"0\"` or less than `min_investment` | Yes |\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/checkParams",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency, must end with `.PERP`",
          "example": "BTC.PERP"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency",
          "example": "USDT"
        },
        "buOrderData": {
          "type": "object",
          "required": [
            "top",
            "bottom",
            "row",
            "grid_type",
            "trend",
            "leverage",
            "quote_investment"
          ],
          "properties": {
            "top": {
              "type": "string",
              "description": "Grid upper price. Must be greater than `bottom` and match the symbol's price precision."
            },
            "bottom": {
              "type": "string",
              "description": "Grid lower price. Must be greater than 0 and match the symbol's price precision."
            },
            "row": {
              "type": "integer",
              "description": "Number of grid levels (2–500)",
              "minimum": 2,
              "maximum": 500
            },
            "grid_type": {
              "type": "string",
              "description": "Grid spacing type: `arithmetic` (equal difference) or `geometric` (equal ratio)",
              "enum": [
                "arithmetic",
                "geometric"
              ]
            },
            "trend": {
              "type": "string",
              "description": "Grid direction: `long`, `short`, or `no_trend` (neutral)",
              "enum": [
                "long",
                "short",
                "no_trend"
              ]
            },
            "leverage": {
              "type": "integer",
              "description": "Leverage multiplier (1 to symbol's maximum leverage)"
            },
            "extra_margin": {
              "type": "boolean",
              "description": "Controls how the investment is split between trading capital and extra margin (a safety buffer against liquidation).\n\n- `false` (default) — **Manual mode**: `quote_investment` is used entirely as trading capital (position margin + order margin + fee). Extra margin must be specified separately via `extra_margin_amount`.\n- `true` — **Auto-split mode**: `quote_investment` represents the **total input**. The system automatically splits it into trading capital and extra margin reserve. A portion is allocated as extra margin to reduce liquidation risk.\n\nThis flag also affects `min_investment` / `max_investment`:\n- `false`: the range covers trading capital only (excluding extra margin).\n- `true`: the range covers the total input (including the auto-calculated extra margin).\n",
              "default": false
            },
            "quote_investment": {
              "type": "string",
              "description": "Investment amount in quote currency (must be > 0 and >= `min_investment`).\n\n- When `extra_margin=false`: this is the **trading capital** only (extra margin is provided separately via `extra_margin_amount`).\n- When `extra_margin=true`: this is the **total input** — the system will auto-split it into trading capital (`estimate_investment`) and extra margin (`estimate_extra_margin`).\n\nPassing `\"0\"` will return `result=false` with message `\"less than min investment\"` and partial data.\n",
              "example": "100"
            },
            "extra_margin_amount": {
              "type": "string",
              "description": "Additional margin amount on top of `quote_investment`, used as a safety buffer against liquidation. Must be >= 0. Omit or pass empty string to use 0.\n\n- When `extra_margin=false`: this value is passed through as-is. It does **not** count toward `quote_investment` or the `min_investment`/`max_investment` range, but it improves the estimated liquidation price.\n- When `extra_margin=true`: typically not needed, as the system auto-calculates extra margin from `quote_investment`. If provided, it is added on top of the auto-calculated margin and also improves the estimated liquidation price.\n"
            },
            "condition": {
              "type": "string",
              "description": "Trigger price. When set, the bot starts only after the price reaches this level."
            },
            "condition_direction": {
              "type": "string",
              "description": "Trigger direction: `\"-1\"` price drops to trigger level, `\"1\"` price rises to trigger level",
              "enum": [
                "-1",
                "1"
              ]
            }
          }
        }
      },
      "required": [
        "base",
        "quote",
        "buOrderData"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "buOrderData"
    ]
  },
  {
    "name": "pionex_bot_adjust_futures_grid_params",
    "title": "Adjust futures grid (add investment / modify range)",
    "description": "Adjust futures grid (add investment / modify range)\n\nAdd investment, modify grid range, or set trigger investment for a futures grid order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/adjustParams",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "type": {
          "type": "string",
          "description": "Adjustment type:\n`invest_in` - Add investment,\n`adjust_params` - Modify grid range,\n`invest_in_trigger` - Trigger investment\n",
          "enum": [
            "invest_in",
            "adjust_params",
            "invest_in_trigger"
          ]
        },
        "quoteInvestment": {
          "type": "number",
          "description": "When type=invest_in: additional investment amount (must be > 0).\nWhen type=adjust_params: amount of new funds to add to the investment.\nNOTE: any value > 0 is implicitly treated as reinvest (forces isReinvest=true\ninternally), so do not send quoteInvestment>0 together with keepInvestment=true.\nLeave 0/unset for the \"keep investment\" or \"reinvest profit only\" intents.\n"
        },
        "extraMargin": {
          "type": "boolean",
          "description": "true: reserve extra margin, false: no extra margin"
        },
        "openPrice": {
          "type": "number",
          "description": "Current price"
        },
        "bottom": {
          "type": "string",
          "description": "New grid lower price (required when type=adjust_params)"
        },
        "top": {
          "type": "string",
          "description": "New grid upper price (required when type=adjust_params)"
        },
        "row": {
          "type": "number",
          "description": "New grid level count (required when type=adjust_params)"
        },
        "extraMarginAmount": {
          "type": "number",
          "description": "Extra margin amount to add (when type=adjust_params)"
        },
        "isRecommend": {
          "type": "boolean",
          "description": "Whether using recommended parameters (when type=adjust_params)"
        },
        "isReinvest": {
          "type": "boolean",
          "description": "When type=adjust_params: whether to fold current floating profit into the\ninvestment base (default false). Interacts with other fields — see the\ndecision table and precedence rules on this schema before using:\n- Ignored when keepInvestment=true.\n- Implicitly forced true when quoteInvestment>0.\n- When left false without keepInvestment, requires current PnL > 0, else the\n  request is rejected with `PROFIT_LESS_THAN_ZERO`.\nFor the common \"keep investment unchanged\" intent, prefer keepInvestment=true\nover isReinvest=false.\n"
        },
        "investCoin": {
          "type": "string",
          "description": "Investment currency: `USDT` or quote currency (default)"
        },
        "investmentFrom": {
          "type": "string",
          "description": "Funding source: `USER` (default) or `LOCK_ACTIVITY`",
          "enum": [
            "USER",
            "LOCK_ACTIVITY"
          ]
        },
        "condition": {
          "type": "string",
          "description": "Trigger price (when type=invest_in_trigger)"
        },
        "conditionDirection": {
          "type": "string",
          "description": "Trigger direction: \"1\" (above current) or \"-1\" (below current)",
          "enum": [
            "1",
            "-1"
          ]
        },
        "slippage": {
          "type": "string",
          "description": "Slippage for add investment / modify range"
        },
        "adjustParamsSence": {
          "type": "string",
          "description": "\"Reinvest profit only\" intent. Set to `reinvest` (only valid when\ntype=adjust_params) to keep params/funds unchanged and fold current floating\nprofit into the investment. When set to `reinvest`, you MUST also send\nisReinvest=true and quoteInvestment=0 / extraMarginAmount=0, otherwise the\nrequest is rejected. Leave empty for the other intents.\n",
          "enum": [
            "reinvest"
          ]
        },
        "keepInvestment": {
          "type": "boolean",
          "description": "\"Keep investment fixed\" intent (recommended for pure range/row edits).\nWhen `true` and type=adjust_params: only modify grid range/row without\nresetting the investment amount. Overrides isReinvest (isReinvest is ignored),\nskips the PnL check, but still validates the price range. Do not combine with\nquoteInvestment>0 or adjustParamsSence=reinvest.\nWhen `false` (default): investment base is recalculated after modification and\nthe PnL check applies.\n",
          "default": false
        }
      },
      "required": [
        "buOrderId",
        "type",
        "extraMargin",
        "openPrice"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "type",
      "quoteInvestment",
      "extraMargin",
      "openPrice",
      "bottom",
      "top",
      "row",
      "extraMarginAmount",
      "isRecommend",
      "isReinvest",
      "investCoin",
      "investmentFrom",
      "condition",
      "conditionDirection",
      "slippage",
      "adjustParamsSence",
      "keepInvestment"
    ]
  },
  {
    "name": "pionex_bot_reduce_futures_grid",
    "title": "Reduce futures grid position",
    "description": "Reduce futures grid position\n\nReduce position size of a futures grid order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/reduce",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "openPrice": {
          "type": "string",
          "description": "Current price"
        },
        "reduceNum": {
          "type": "number",
          "description": "Reduction amount: order precision * reduceNum"
        },
        "slippage": {
          "type": "string",
          "description": "Reduction slippage"
        },
        "condition": {
          "type": "string",
          "description": "Trigger reduction price (must be > 0)"
        },
        "conditionDirection": {
          "type": "string",
          "description": "Trigger direction: \"1\" (above current) or \"-1\" (below current)",
          "enum": [
            "1",
            "-1"
          ]
        }
      },
      "required": [
        "buOrderId",
        "openPrice",
        "reduceNum"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "openPrice",
      "reduceNum",
      "slippage",
      "condition",
      "conditionDirection"
    ]
  },
  {
    "name": "pionex_bot_cancel_futures_grid_order",
    "title": "Cancel futures grid order",
    "description": "Cancel futures grid order\n\nClose and cancel a futures grid bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/cancel",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "closeNote": {
          "type": "string",
          "description": "Close note"
        },
        "closeSellModel": {
          "type": "string",
          "description": "Close sell mode:\n`TO_QUOTE` - Close position only (default),\n`TO_USDT` - Close position and sell quote to USDT\n",
          "enum": [
            "TO_QUOTE",
            "TO_USDT"
          ]
        },
        "immediate": {
          "type": "boolean",
          "description": "Force-cancel an order that is stuck in the `close_position` state because its limit take-profit / stop-loss order has triggered but not yet filled. This is NOT a generic \"cancel faster\" flag.\n\n- `false` (default): normal cancellation. Use this for orders in any regular state (e.g. `running`). It runs the full close flow: update status, dispatch the close action, and settle.\n- `true`: special recovery path ONLY valid when the order is in the `close_position` state with an unfilled limit TP/SL order. It sends the close action directly with a market price. If the order is in any other state, the request is rejected with `Forbidden: invalid status`.\n\nDo not set `true` as a default \"force close\" option — for normal close-outs always use `false`."
        },
        "closeSlippage": {
          "type": "string",
          "description": "Close position slippage (e.g. \"0.01\" = 1%)"
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "closeNote",
      "closeSellModel",
      "immediate",
      "closeSlippage"
    ]
  },
  {
    "name": "pionex_bot_adjust_futures_grid_params_check",
    "title": "Check futures grid adjust parameters (dry-run)",
    "description": "Check futures grid adjust parameters (dry-run)\n\nValidate adjust params / invest-in parameters and return estimated data without executing.\nUse this before calling adjustParams to preview the impact.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/adjustParamsCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "type": {
          "type": "string",
          "description": "Adjustment type:\n`invest_in` - Add investment,\n`adjust_params` - Modify grid range,\n`invest_in_trigger` - Trigger investment\n",
          "enum": [
            "invest_in",
            "adjust_params",
            "invest_in_trigger"
          ]
        },
        "quoteInvestment": {
          "type": "number",
          "description": "When type=invest_in: additional investment amount (must be > 0).\nWhen type=adjust_params: amount of new funds to add to the investment.\nNOTE: any value > 0 is implicitly treated as reinvest (forces isReinvest=true\ninternally), so do not send quoteInvestment>0 together with keepInvestment=true.\nLeave 0/unset for the \"keep investment\" or \"reinvest profit only\" intents.\n"
        },
        "extraMargin": {
          "type": "boolean",
          "description": "true: reserve extra margin, false: no extra margin"
        },
        "openPrice": {
          "type": "number",
          "description": "Current price"
        },
        "bottom": {
          "type": "string",
          "description": "New grid lower price (required when type=adjust_params)"
        },
        "top": {
          "type": "string",
          "description": "New grid upper price (required when type=adjust_params)"
        },
        "row": {
          "type": "number",
          "description": "New grid level count (required when type=adjust_params)"
        },
        "extraMarginAmount": {
          "type": "number",
          "description": "Extra margin amount to add (when type=adjust_params)"
        },
        "isRecommend": {
          "type": "boolean",
          "description": "Whether using recommended parameters (when type=adjust_params)"
        },
        "isReinvest": {
          "type": "boolean",
          "description": "When type=adjust_params: whether to fold current floating profit into the\ninvestment base (default false). Interacts with other fields — see the\ndecision table and precedence rules on this schema before using:\n- Ignored when keepInvestment=true.\n- Implicitly forced true when quoteInvestment>0.\n- When left false without keepInvestment, requires current PnL > 0, else the\n  request is rejected with `PROFIT_LESS_THAN_ZERO`.\nFor the common \"keep investment unchanged\" intent, prefer keepInvestment=true\nover isReinvest=false.\n"
        },
        "investCoin": {
          "type": "string",
          "description": "Investment currency: `USDT` or quote currency (default)"
        },
        "investmentFrom": {
          "type": "string",
          "description": "Funding source: `USER` (default) or `LOCK_ACTIVITY`",
          "enum": [
            "USER",
            "LOCK_ACTIVITY"
          ]
        },
        "condition": {
          "type": "string",
          "description": "Trigger price (when type=invest_in_trigger)"
        },
        "conditionDirection": {
          "type": "string",
          "description": "Trigger direction: \"1\" (above current) or \"-1\" (below current)",
          "enum": [
            "1",
            "-1"
          ]
        },
        "slippage": {
          "type": "string",
          "description": "Slippage for add investment / modify range"
        },
        "adjustParamsSence": {
          "type": "string",
          "description": "\"Reinvest profit only\" intent. Set to `reinvest` (only valid when\ntype=adjust_params) to keep params/funds unchanged and fold current floating\nprofit into the investment. When set to `reinvest`, you MUST also send\nisReinvest=true and quoteInvestment=0 / extraMarginAmount=0, otherwise the\nrequest is rejected. Leave empty for the other intents.\n",
          "enum": [
            "reinvest"
          ]
        },
        "keepInvestment": {
          "type": "boolean",
          "description": "\"Keep investment fixed\" intent (recommended for pure range/row edits).\nWhen `true` and type=adjust_params: only modify grid range/row without\nresetting the investment amount. Overrides isReinvest (isReinvest is ignored),\nskips the PnL check, but still validates the price range. Do not combine with\nquoteInvestment>0 or adjustParamsSence=reinvest.\nWhen `false` (default): investment base is recalculated after modification and\nthe PnL check applies.\n",
          "default": false
        }
      },
      "required": [
        "buOrderId",
        "type",
        "extraMargin",
        "openPrice"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "type",
      "quoteInvestment",
      "extraMargin",
      "openPrice",
      "bottom",
      "top",
      "row",
      "extraMarginAmount",
      "isRecommend",
      "isReinvest",
      "investCoin",
      "investmentFrom",
      "condition",
      "conditionDirection",
      "slippage",
      "adjustParamsSence",
      "keepInvestment"
    ]
  },
  {
    "name": "pionex_bot_reduce_futures_grid_check",
    "title": "Check futures grid reduce (dry-run)",
    "description": "Check futures grid reduce (dry-run)\n\nValidate reduce parameters and return estimated data without executing.\nUse this before calling reduce to preview the impact.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/reduceCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "openPrice": {
          "type": "string",
          "description": "Current price"
        },
        "reduceNum": {
          "type": "number",
          "description": "Reduction amount: order precision * reduceNum"
        },
        "slippage": {
          "type": "string",
          "description": "Reduction slippage"
        },
        "condition": {
          "type": "string",
          "description": "Trigger reduction price (must be > 0)"
        },
        "conditionDirection": {
          "type": "string",
          "description": "Trigger direction: \"1\" (above current) or \"-1\" (below current)",
          "enum": [
            "1",
            "-1"
          ]
        }
      },
      "required": [
        "buOrderId",
        "openPrice",
        "reduceNum"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "openPrice",
      "reduceNum",
      "slippage",
      "condition",
      "conditionDirection"
    ]
  },
  {
    "name": "pionex_bot_pause_futures_grid_check",
    "title": "Check futures grid pause (dry-run)",
    "description": "Check futures grid pause (dry-run)\n\nValidate whether a futures grid order can be paused (`immediate` or `conditional` mode)\nand return current plus post-trigger estimated liquidation prices without executing.\nDoes not accept `openPrice`; the backend uses the live market price.\n`triggerPausePriceUp` / `triggerPausePriceDown` are independent — set either or both.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/pauseCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "mode": {
          "type": "string",
          "enum": [
            "immediate",
            "conditional"
          ],
          "description": "Pause mode: `immediate` = pause now; `conditional` = pause on trigger price"
        },
        "triggerPausePriceUp": {
          "type": "string",
          "description": "Upward trigger price (when mode=conditional). Optional; set either direction or both."
        },
        "triggerPausePriceDown": {
          "type": "string",
          "description": "Downward trigger price (when mode=conditional). Optional."
        }
      },
      "required": [
        "buOrderId",
        "mode"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "mode",
      "triggerPausePriceUp",
      "triggerPausePriceDown"
    ]
  },
  {
    "name": "pionex_bot_pause_futures_grid",
    "title": "Pause futures grid order",
    "description": "Pause futures grid order\n\nPause a running futures grid order. Runs the same validation as `pauseCheck`, then\nexecutes asynchronously. Once paused the grid stops auto-refilling orders while the\nposition is retained; `immediate` mode takes effect at the live market price.\nDoes not return a `status` field (async processing).\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/pause",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "mode": {
          "type": "string",
          "enum": [
            "immediate",
            "conditional"
          ],
          "description": "Pause mode: `immediate` = pause now (backend uses live market price, not client-supplied); `conditional` = pause on trigger price"
        },
        "stopProfitEnabled": {
          "type": "boolean",
          "description": "Whether to keep take-profit active while paused"
        },
        "stopLossEnabled": {
          "type": "boolean",
          "description": "Whether to keep stop-loss active while paused"
        },
        "triggerPausePriceUp": {
          "type": "string",
          "description": "Upward trigger price. Set either direction or both."
        },
        "triggerPausePriceDown": {
          "type": "string",
          "description": "Downward trigger price."
        }
      },
      "required": [
        "buOrderId",
        "mode"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "mode",
      "stopProfitEnabled",
      "stopLossEnabled",
      "triggerPausePriceUp",
      "triggerPausePriceDown"
    ]
  },
  {
    "name": "pionex_bot_resume_futures_grid_check",
    "title": "Check futures grid resume (dry-run)",
    "description": "Check futures grid resume (dry-run)\n\nValidate whether a paused futures grid order can be resumed and return the estimated\nliquidation prices after resuming, without executing. Order must be in `paused` state.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/resumeCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId"
    ]
  },
  {
    "name": "pionex_bot_resume_futures_grid",
    "title": "Resume futures grid order",
    "description": "Resume futures grid order\n\nResume a paused futures grid order. Runs the same validation as `resumeCheck`, then\nexecutes. After resuming the grid restarts auto-refilling and the liquidation price\nmoves with the market.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/resume",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId"
    ]
  },
  {
    "name": "pionex_bot_add_margin_futures_grid_check",
    "title": "Check futures grid add margin (dry-run)",
    "description": "Check futures grid add margin (dry-run)\n\nValidate whether the add-margin amount is valid and return the estimated liquidation\nprices before and after the change, without executing.\nDoes not accept `openPrice`; the backend uses the live market price.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/addMarginCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "amount": {
          "type": "number",
          "description": "Margin amount to add / reduce (decimal, serialized as an unquoted number)"
        }
      },
      "required": [
        "buOrderId",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "amount"
    ]
  },
  {
    "name": "pionex_bot_add_margin_futures_grid",
    "title": "Add margin to futures grid order",
    "description": "Add margin to futures grid order\n\nTransfer margin into a futures grid order. Runs the same validation as `addMarginCheck`,\nthen executes asynchronously. Directly affects available balance and the order's\nliquidation price — a funds operation, call with care.\nDoes not return a `status` field (async processing).\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/addMargin",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "coin": {
          "type": "string",
          "description": "Transfer currency"
        },
        "amount": {
          "type": "number",
          "description": "Margin amount to add / reduce (decimal)"
        }
      },
      "required": [
        "buOrderId",
        "coin",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "coin",
      "amount"
    ]
  },
  {
    "name": "pionex_bot_reduce_margin_futures_grid_check",
    "title": "Check futures grid reduce margin (dry-run)",
    "description": "Check futures grid reduce margin (dry-run)\n\nValidate whether the reduce-margin amount is valid (subject to the `maxAmount` hard limit)\nand return the estimated liquidation prices before and after the change, without executing.\nExceeding `maxAmount` returns `checkResult=false` with reason `EXCEEDS_MAX_AMOUNT`.\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/reduceMarginCheck",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "amount": {
          "type": "number",
          "description": "Margin amount to add / reduce (decimal, serialized as an unquoted number)"
        }
      },
      "required": [
        "buOrderId",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "amount"
    ]
  },
  {
    "name": "pionex_bot_reduce_margin_futures_grid",
    "title": "Reduce margin of futures grid order",
    "description": "Reduce margin of futures grid order\n\nTransfer margin out of a futures grid order. Runs the same validation as\n`reduceMarginCheck` (including the `maxAmount` check), then executes asynchronously.\nDirectly reduces the order's available margin and raises liquidation risk — a funds\noperation, call with care.\nDoes not return a `status` field (async processing).\nWeight: 1.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/reduceMargin",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "coin": {
          "type": "string",
          "description": "Transfer currency"
        },
        "amount": {
          "type": "number",
          "description": "Margin amount to add / reduce (decimal)"
        }
      },
      "required": [
        "buOrderId",
        "coin",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "coin",
      "amount"
    ]
  },
  {
    "name": "pionex_bot_update_trigger_profit_loss_futures_grid",
    "title": "Set / update / clear take-profit & stop-loss",
    "description": "Set / update / clear take-profit & stop-loss\n\nSet, update, or clear the take-profit and/or stop-loss of an **already running**\nfutures grid order. Weight: 1.\n\nThis does NOT create triggers for a not-yet-started order — use `create` (fields\n`lossStopType` / `profitStopType` etc.) for that. This endpoint mutates the\ntake-profit / stop-loss of an existing order in place.\n\n**Request field naming**: unlike the other `futuresGrid` endpoints (which use\ncamelCase), this endpoint takes **snake_case** field names, and the trigger\nsettings are passed as a `list` of items — one item per trigger you want to set.\nA single call may contain a `stop_loss` item, a `stop_profit` item, or both.\n\n**`type`** — which trigger the item configures. Only two values are accepted\n(App-side legacy spellings such as `stop-loss` and the entry-trigger value\n`condition` are rejected here):\n\n| `type` | Meaning |\n|---|---|\n| `stop_loss` | Configure the stop-loss trigger |\n| `stop_profit` | Configure the take-profit trigger |\n\n**`stop_type`** — decides how `value` (and `limit_price`) is interpreted.\n**Required**; unlike the App, an empty value is NOT accepted (no implicit\nfallback to `price`):\n\n| `stop_type` | `value` means | `limit_price` |\n|---|---|---|\n| `price` | Trigger price | ignored |\n| `price_limit` | Trigger price; order is placed as a **limit** order at `limit_price` when hit | required |\n| `profit_amount` | Profit/loss **amount** in the settlement currency | ignored |\n| `profit_ratio` | Profit/loss **ratio** (e.g. `0.5` = +50%, `-0.2` = −20%) | ignored |\n\n**Clearing a trigger**: pass `value` as an empty string `\"\"` for that item to\nremove the previously set take-profit / stop-loss.\n\n**`value` validation**: when `value` is non-empty it only needs to be a valid\ndecimal — the endpoint does not enforce a positive value. `0` and negative values\nare accepted (a stop-loss expressed as a negative `profit_ratio` / `profit_amount`\nis meaningful).\n\n**Neutral grid (`no_trend`) upper stop-loss**: for a neutral grid, a stop-loss can\nadditionally set an **upper** threshold above the grid range using\n`stop_high_price` (and `limit_high_price` when `stop_type=price_limit`). These two\nfields apply only to a `stop_loss` item on a neutral grid and only when\n`stop_type` is `price` or `price_limit`; they are ignored otherwise.\n\n**`*_sell_model`** — settlement currency for the position closed by the trigger.\nOptional; when empty the order's default is used:\n\n| Value | Meaning |\n|---|---|\n| `TO_QUOTE` | Settle to the quote currency |\n| `TO_USDT` | Settle to USDT |\n\nUse `loss_stop_sell_model` on a `stop_loss` item and `profit_stop_sell_model` on a\n`stop_profit` item.\n\n**Asynchronous write**: a successful response only means the request was accepted\nand forwarded. The take-profit / stop-loss is persisted onto the order record\nasynchronously — poll `GET /futuresGrid/order` and read `lossStop` / `profitStop`\n(and related fields) to confirm the update took effect.\n\n**Restrictions** (return `result=false` with the message shown):\n\n| Message | Cause |\n|---|---|\n| `trigger price list nil` | `list` is empty |\n| `invalid type: {v}, must be one of stop_loss/stop_profit` | `type` not in the allow-list |\n| `invalid stop_type: {v}, must be one of price/price_limit/profit_amount/profit_ratio` | `stop_type` missing or not in the allow-list |\n| `invalid amount: {v}` | `value` / `limit_price` / `limit_high_price` is not a valid decimal |\n| `invalid loss_stop_sell_model: {v}` | `loss_stop_sell_model` not `TO_QUOTE` / `TO_USDT` |\n| `invalid profit_stop_sell_model: {v}` | `profit_stop_sell_model` not `TO_QUOTE` / `TO_USDT` |\n| `order is disable change tp` | The order forbids changing take-profit / stop-loss |\n| `forbidden by invalid status:{s}, order_id:{id}` | Order is closing/unlocking/canceled |\n| `forbidden for future_grid_bonus order` | Bonus-funded orders cannot set a stop-loss |\n\n**Examples** — request bodies for common combinations:\n\nSet a stop-loss at a fixed price:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_loss\", \"stop_type\": \"price\", \"value\": \"70000\" }\n  ]\n}\n```\n\nSet a take-profit at a fixed price:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_profit\", \"stop_type\": \"price\", \"value\": \"150000\" }\n  ]\n}\n```\n\nSet both take-profit and stop-loss in one call:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_loss\",   \"stop_type\": \"price\", \"value\": \"70000\" },\n    { \"type\": \"stop_profit\", \"stop_type\": \"price\", \"value\": \"150000\" }\n  ]\n}\n```\n\nStop-loss by loss ratio (−20%) and take-profit by profit ratio (+50%):\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_loss\",   \"stop_type\": \"profit_ratio\", \"value\": \"-0.2\" },\n    { \"type\": \"stop_profit\", \"stop_type\": \"profit_ratio\", \"value\": \"0.5\" }\n  ]\n}\n```\n\nTake-profit by profit amount, settled to USDT:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_profit\", \"stop_type\": \"profit_amount\", \"value\": \"500\", \"profit_stop_sell_model\": \"TO_USDT\" }\n  ]\n}\n```\n\nTake-profit as a limit order (place a limit at 149000 when 150000 is hit),\nwith a 30s trigger delay:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_profit\", \"stop_type\": \"price_limit\", \"value\": \"150000\", \"limit_price\": \"149000\", \"stop_delay\": 30 }\n  ]\n}\n```\n\nNeutral grid (`no_trend`) — lower and upper stop-loss prices:\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_loss\", \"stop_type\": \"price\", \"value\": \"70000\", \"stop_high_price\": \"160000\" }\n  ]\n}\n```\n\nClear a previously set stop-loss (empty `value`):\n```json\n{\n  \"bu_order_id\": \"1234567890\",\n  \"list\": [\n    { \"type\": \"stop_loss\", \"stop_type\": \"price\", \"value\": \"\" }\n  ]\n}\n```\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/futuresGrid/updateTriggerProfitLoss",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "bu_order_id": {
          "type": "string",
          "description": "Bot order ID"
        },
        "list": {
          "type": "array",
          "description": "One item per trigger to configure. May include a `stop_loss` item, a `stop_profit` item, or both.",
          "items": {
            "type": "object",
            "required": [
              "type",
              "stop_type",
              "value"
            ],
            "description": "A single take-profit or stop-loss setting. Field names are snake_case.\nHow `value` / `limit_price` are interpreted depends on `stop_type`.\n",
            "properties": {
              "type": {
                "type": "string",
                "description": "Which trigger this item configures",
                "enum": [
                  "stop_loss",
                  "stop_profit"
                ]
              },
              "stop_type": {
                "type": "string",
                "description": "How `value` is interpreted. Required (no implicit fallback):\n`price` (trigger price), `price_limit` (trigger price, closes via a limit\norder at `limit_price`), `profit_amount` (profit/loss amount),\n`profit_ratio` (profit/loss ratio).\n",
                "enum": [
                  "price",
                  "price_limit",
                  "profit_amount",
                  "profit_ratio"
                ]
              },
              "value": {
                "type": "string",
                "description": "Trigger threshold, interpreted per `stop_type`. Empty string `\"\"` clears the\ntrigger. When non-empty it only needs to be a valid decimal — not enforced to\nbe positive; `0` and negative values are accepted (e.g. `-0.2` = a −20%\nstop-loss ratio).\n"
              },
              "limit_price": {
                "type": "string",
                "description": "Limit price used to close the position when `stop_type=price_limit`. Required in that case."
              },
              "stop_delay": {
                "type": "integer",
                "format": "int64",
                "description": "Seconds to wait after the condition is first met before executing. `0` = immediate."
              },
              "loss_stop_sell_model": {
                "type": "string",
                "description": "Settlement currency for a stop-loss close. Optional; empty = order default.",
                "enum": [
                  "TO_QUOTE",
                  "TO_USDT"
                ]
              },
              "profit_stop_sell_model": {
                "type": "string",
                "description": "Settlement currency for a take-profit close. Optional; empty = order default.",
                "enum": [
                  "TO_QUOTE",
                  "TO_USDT"
                ]
              },
              "stop_high_price": {
                "type": "string",
                "description": "Upper stop-loss price for a neutral grid (`no_trend`). Applies only to a\n`stop_loss` item and only when `stop_type` is `price` or `price_limit`;\nignored otherwise.\n"
              },
              "limit_high_price": {
                "type": "string",
                "description": "Upper limit stop-loss price for a neutral grid, used together with `stop_high_price` when `stop_type=price_limit`."
              }
            }
          }
        }
      },
      "required": [
        "bu_order_id",
        "list"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "bu_order_id",
      "list"
    ]
  },
  {
    "name": "pionex_bot_get_spot_grid_order",
    "title": "Get spot grid order",
    "description": "Get spot grid order\n\nQuery a spot grid bot order by ID. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/orders/spotGrid/order",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "buOrderId"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_get_spot_grid_ai_strategy",
    "title": "Get spot grid AI strategy",
    "description": "Get spot grid AI strategy\n\nQuery AI-recommended grid strategy parameters for a trading pair. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/orders/spotGrid/aiStrategy",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency (e.g. BTC)"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency (e.g. USDT)"
        }
      },
      "required": [
        "base",
        "quote"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_create_spot_grid_order",
    "title": "Create spot grid order",
    "description": "Create spot grid order\n\nCreate a new spot grid bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/create",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency",
          "example": "USDT"
        },
        "note": {
          "type": "string",
          "description": "Optional order note"
        },
        "buOrderData": {
          "type": "object",
          "required": [
            "top",
            "bottom",
            "row",
            "gridType",
            "quoteTotalInvestment"
          ],
          "properties": {
            "top": {
              "type": "string",
              "description": "Grid upper price",
              "example": "50000"
            },
            "bottom": {
              "type": "string",
              "description": "Grid lower price",
              "example": "40000"
            },
            "row": {
              "type": "integer",
              "format": "int64",
              "description": "Number of grid levels (2–200)",
              "example": 20
            },
            "gridType": {
              "type": "string",
              "description": "Grid spacing type: `arithmetic` (equal difference) or `geometric` (equal ratio)",
              "enum": [
                "arithmetic",
                "geometric"
              ],
              "example": "arithmetic"
            },
            "quoteTotalInvestment": {
              "type": "string",
              "description": "Quote currency investment amount",
              "example": "1000"
            },
            "lossStopType": {
              "type": "string",
              "description": "Stop loss mode:\n`price` — trigger when market price reaches `lossStop`,\n`profit_amount` — trigger when unrealized loss reaches `lossStop` amount,\n`profit_ratio` — trigger when unrealized loss reaches `lossStop` ratio (e.g. `\"-0.1\"` = -10%)\n",
              "enum": [
                "price",
                "profit_amount",
                "profit_ratio"
              ]
            },
            "lossStop": {
              "type": "string",
              "description": "Stop loss threshold. Interpretation depends on `lossStopType`:\n- `price`: price value (e.g. `\"40000\"`)\n- `profit_amount`: loss amount in quote currency (e.g. `\"-50\"`)\n- `profit_ratio`: loss ratio (e.g. `\"-0.1\"` = -10%)\n"
            },
            "lossStopDelay": {
              "type": "integer",
              "format": "int64",
              "description": "Seconds to wait after stop loss condition is first met before executing.\nDuring the delay the condition must remain satisfied; if it recovers the timer resets.\nOmit or set to `0` to trigger immediately.\n"
            },
            "profitStopType": {
              "type": "string",
              "description": "Take profit mode:\n`price` — trigger when market price reaches `profitStop`,\n`profit_amount` — trigger when realized profit reaches `profitStop` amount,\n`profit_ratio` — trigger when realized profit reaches `profitStop` ratio (e.g. `\"0.1\"` = 10%)\n",
              "enum": [
                "price",
                "profit_amount",
                "profit_ratio"
              ]
            },
            "profitStop": {
              "type": "string",
              "description": "Take profit threshold. Interpretation depends on `profitStopType`:\n- `price`: price value (e.g. `\"55000\"`)\n- `profit_amount`: profit amount in quote currency (e.g. `\"100\"`)\n- `profit_ratio`: profit ratio (e.g. `\"0.1\"` = 10%)\n"
            },
            "profitStopDelay": {
              "type": "integer",
              "format": "int64",
              "description": "Seconds to wait after take profit condition is first met before executing.\nDuring the delay the condition must remain satisfied; if it recovers the timer resets.\nOmit or set to `0` to trigger immediately.\n"
            },
            "condition": {
              "type": "string",
              "description": "Trigger price — bot starts only when price crosses this level (optional)",
              "example": "45000"
            },
            "conditionDirection": {
              "type": "string",
              "description": "Trigger direction: `\"-1\"` price drops below condition, `\"1\"` price rises above condition",
              "enum": [
                "-1",
                "1"
              ]
            },
            "slippage": {
              "type": "string",
              "description": "Open position slippage tolerance (e.g. \"0.01\" = 1%)"
            },
            "closeSellModel": {
              "type": "string",
              "description": "Close sell mode on cancellation:\n`NOT_SELL` - Keep base+quote as-is, do not sell (default),\n`TO_QUOTE` - Sell base to quote on close,\n`TO_USDT` - Sell base to USDT on close\n",
              "enum": [
                "NOT_SELL",
                "TO_QUOTE",
                "TO_USDT"
              ],
              "default": "NOT_SELL"
            }
          }
        }
      },
      "required": [
        "base",
        "quote",
        "buOrderData"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "note",
      "buOrderData"
    ]
  },
  {
    "name": "pionex_bot_check_spot_grid_params",
    "title": "Check spot grid parameters",
    "description": "Check spot grid parameters\n\nValidate spot grid bot creation parameters and estimate investment values without creating an order. Weight: 1.\n\nPass a positive `quote_total_investment` to receive full estimate fields.\nThe current market price is fetched automatically — `open_price` is not required.\n\n**FailedWithData**: For errors marked \"Yes\" below, the response includes a `data` field\neven when `result=false`, containing `min_investment`, `max_investment`, and `slippage`\nso the client can display the valid investment range.\n\n**Validation error messages** (returned in `message` when `result` is `false`):\n\n| Message | Cause | Includes data |\n|---|---|---|\n| `number invalid: {value}` | `top` or `bottom` is not a valid numeric string | No |\n| `number int too long: {value}` | Integer part of `top` or `bottom` exceeds 15 digits | No |\n| `number decimal too long: {value}` | Decimal part of `top` or `bottom` exceeds 15 digits | No |\n| `invalid quote total investment` | `quote_total_investment` must be >= 0 | No |\n| `bottom must be less than top` | `bottom` must be strictly less than `top` | No |\n| `row must be between 2 and 1000` | `row` must be in the range [2, 1000] | No |\n| `invalid grid_type` | `grid_type` must be `arithmetic` or `geometric` | No |\n| `grid price duplicated: reduce row or widen range` | Grid range too narrow or `row` too large — adjacent grid prices are identical | Yes |\n| `quote_total_investment not match quote precision: max {N} decimal places` | `quote_total_investment` exceeds the allowed decimal precision | Yes |\n| `less than min investment` | `quote_total_investment` is `\"0\"` or less than `min_investment` | Yes |\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/checkParams",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency",
          "example": "USDT"
        },
        "buOrderData": {
          "type": "object",
          "required": [
            "top",
            "bottom",
            "row",
            "grid_type",
            "quote_total_investment"
          ],
          "properties": {
            "top": {
              "type": "string",
              "description": "Grid upper price. Must be a valid numeric string, strictly greater than `bottom`.",
              "example": "50000"
            },
            "bottom": {
              "type": "string",
              "description": "Grid lower price. Must be a valid numeric string.",
              "example": "40000"
            },
            "row": {
              "type": "integer",
              "description": "Number of grid levels (2–1000).",
              "minimum": 2,
              "maximum": 1000,
              "example": 20
            },
            "grid_type": {
              "type": "string",
              "description": "Grid spacing type: `arithmetic` (equal difference) or `geometric` (equal ratio)",
              "enum": [
                "arithmetic",
                "geometric"
              ],
              "example": "arithmetic"
            },
            "quote_total_investment": {
              "type": "string",
              "description": "Investment amount in quote currency (must be > 0 and >= `min_investment`).\nPassing `\"0\"` will return `result=false` with message `\"less than min investment\"` and partial data.\n",
              "example": "100"
            },
            "condition": {
              "type": "string",
              "description": "Trigger price. When set, the bot starts only after the price reaches this level."
            },
            "condition_direction": {
              "type": "string",
              "description": "Trigger direction: `\"-1\"` price drops to trigger level, `\"1\"` price rises to trigger level",
              "enum": [
                "-1",
                "1"
              ]
            }
          }
        }
      },
      "required": [
        "base",
        "quote",
        "buOrderData"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "buOrderData"
    ]
  },
  {
    "name": "pionex_bot_adjust_spot_grid_params",
    "title": "Adjust spot grid parameters",
    "description": "Adjust spot grid parameters\n\nModify grid range (top/bottom/row) or adjust investment for a running spot grid order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/adjustParams",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "top": {
          "type": "string",
          "description": "New grid upper price"
        },
        "bottom": {
          "type": "string",
          "description": "New grid lower price"
        },
        "row": {
          "type": "integer",
          "format": "int32",
          "description": "New number of grid levels"
        },
        "quoteInvest": {
          "type": "string",
          "description": "Additional quote investment amount"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "top",
      "bottom",
      "row",
      "quoteInvest"
    ]
  },
  {
    "name": "pionex_bot_invest_in_spot_grid",
    "title": "Add investment to spot grid",
    "description": "Add investment to spot grid\n\nAdd additional investment to a running spot grid order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/investIn",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "quoteInvest": {
          "type": "string",
          "description": "Additional investment amount in quote currency",
          "example": "100"
        }
      },
      "required": [
        "buOrderId",
        "quoteInvest"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "quoteInvest"
    ]
  },
  {
    "name": "pionex_bot_cancel_spot_grid_order",
    "title": "Cancel spot grid order",
    "description": "Cancel spot grid order\n\nClose and cancel a spot grid bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/cancel",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "closeSellModel": {
          "type": "string",
          "description": "Close sell mode set at creation:\n`NOT_SELL` - Keep base+quote as-is (default),\n`TO_QUOTE` - Sell base to quote on close,\n`TO_USDT` - Sell base to USDT on close\n",
          "enum": [
            "NOT_SELL",
            "TO_QUOTE",
            "TO_USDT"
          ]
        },
        "slippage": {
          "type": "string",
          "description": "Close position slippage (e.g. \"0.01\" = 1%)"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "closeSellModel",
      "slippage"
    ]
  },
  {
    "name": "pionex_bot_profit_spot_grid",
    "title": "Extract profit from spot grid",
    "description": "Extract profit from spot grid\n\nExtract accumulated grid profit from a running spot grid order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/spotGrid/profit",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID"
        },
        "amount": {
          "type": "string",
          "description": "Amount to extract",
          "example": "50"
        }
      },
      "required": [
        "buOrderId",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "buOrderId",
      "amount"
    ]
  },
  {
    "name": "pionex_bot_get_smart_copy_order",
    "title": "Get smart copy order",
    "description": "Get smart copy order\n\nQuery a smart copy bot order by ID. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/orders/smartCopy/order",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "buOrderId": {
          "type": "string",
          "description": "Bot order ID (UUID, 36 chars)"
        },
        "lang": {
          "type": "string",
          "description": "Language code (e.g. en, zh)"
        }
      },
      "required": [
        "buOrderId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "buOrderId",
      "lang"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_check_smart_copy_params",
    "title": "Check smart copy parameters",
    "description": "Check smart copy parameters\n\nValidate smart copy bot creation parameters and check the maximum investment limit. Weight: 1.\n\n**Requires `Bot reading` permission.**\n\nReturns the maximum allowed investment, maximum leverage, and notional/available limits for the given base/quote/signal combination.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/smartCopy/checkParams",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency (e.g. BTC)",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency (e.g. USDT)",
          "example": "USDT"
        },
        "signal_type": {
          "type": "string",
          "description": "Signal type identifier. Optional — omit to check without a specific signal."
        },
        "signal_param": {
          "type": "string",
          "description": "Signal parameters JSON string. Optional."
        },
        "leverage": {
          "type": "integer",
          "format": "int64",
          "description": "Leverage multiplier (>= 1)",
          "minimum": 1,
          "example": 2
        },
        "quote_investment": {
          "type": "string",
          "description": "Investment amount in quote currency to check against limits.",
          "example": "500"
        }
      },
      "required": [
        "base",
        "quote",
        "leverage",
        "quote_investment"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "signal_type",
      "signal_param",
      "leverage",
      "quote_investment"
    ]
  },
  {
    "name": "pionex_bot_create_smart_copy_order",
    "title": "Create smart copy order",
    "description": "Create smart copy order\n\nCreate a new smart copy bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/smartCopy/create",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency (e.g. BTC)",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency (e.g. USDT)",
          "example": "USDT"
        },
        "key_id": {
          "type": "string",
          "description": "API Key ID. Optional — derived from the API key used for authentication when omitted."
        },
        "note": {
          "type": "string",
          "description": "Optional order note"
        },
        "copy_from": {
          "type": "string",
          "description": "Source order ID to copy from (for copy trade orders)"
        },
        "copy_type": {
          "type": "string",
          "description": "Copy type identifier"
        },
        "bu_order_data": {
          "type": "object",
          "required": [
            "quote_total_investment",
            "portfolio"
          ],
          "properties": {
            "quote_total_investment": {
              "type": "string",
              "description": "Total investment amount in quote currency",
              "example": "500"
            },
            "compound": {
              "type": "boolean",
              "description": "Whether to enable compound interest (reinvest profits)",
              "default": false
            },
            "profit_stop_maker": {
              "type": "boolean",
              "description": "Whether to enable profit stop maker",
              "default": false
            },
            "portfolio": {
              "type": "array",
              "description": "List of portfolio items (at least 1 required)",
              "minItems": 1,
              "items": {
                "type": "object",
                "required": [
                  "base",
                  "signal_type",
                  "leverage"
                ],
                "properties": {
                  "base": {
                    "type": "string",
                    "description": "Base currency for this portfolio item",
                    "example": "BTC"
                  },
                  "signal_type": {
                    "type": "string",
                    "description": "Signal type identifier",
                    "example": "my_signal"
                  },
                  "signal_param": {
                    "type": "string",
                    "description": "Signal parameters JSON string. Optional.",
                    "example": "{\"direction\":\"long\"}"
                  },
                  "percent": {
                    "type": "string",
                    "description": "Allocation percentage of total investment for this item (e.g. \"1\" = 100%)",
                    "example": "1"
                  },
                  "leverage": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Leverage multiplier for this item (>= 1)",
                    "minimum": 1,
                    "example": 2
                  },
                  "profit_stop_ratio": {
                    "type": "string",
                    "description": "Take profit ratio (e.g. \"0.5\" = 50% profit triggers close)"
                  },
                  "loss_stop_ratio": {
                    "type": "string",
                    "description": "Stop loss ratio (e.g. \"-0.2\" = 20% loss triggers close)"
                  }
                }
              }
            }
          }
        }
      },
      "required": [
        "base",
        "quote",
        "bu_order_data"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "quote",
      "key_id",
      "note",
      "copy_from",
      "copy_type",
      "bu_order_data"
    ]
  },
  {
    "name": "pionex_bot_cancel_smart_copy_order",
    "title": "Cancel smart copy order",
    "description": "Cancel smart copy order\n\nClose and cancel a smart copy bot order. Weight: 1.",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/orders/smartCopy/cancel",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "bu_order_id": {
          "type": "string",
          "description": "Bot order ID to cancel",
          "example": "550e8400-e29b-41d4-a716-446655440000"
        },
        "close_note": {
          "type": "string",
          "description": "Optional close reason note"
        },
        "convert_into_earn_coin": {
          "type": "boolean",
          "description": "Whether to convert remaining assets into earn coin on close",
          "default": false
        }
      },
      "required": [
        "bu_order_id"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "bu_order_id",
      "close_note",
      "convert_into_earn_coin"
    ]
  },
  {
    "name": "pionex_bot_get_kol_select_copy_trade_list",
    "title": "Get KOL curated copy-trade order list",
    "description": "Get KOL curated copy-trade order list\n\nQuery a KOL's curated/pinned copy-trade order list by share code, with optional filters by symbol, trend, and leverage. Supports pagination and sorting. Weight: 1.",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/kol/selectCopyTradeList",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "shareCode": {
          "type": "string",
          "description": "KOL share code"
        },
        "buOrderType": {
          "type": "string",
          "description": "Bot order type filter"
        },
        "symbol": {
          "type": "string",
          "description": "Trading symbol filter"
        },
        "trend": {
          "type": "string",
          "description": "Grid trend filter (e.g. long, short, no_trend)"
        },
        "leverage": {
          "type": "integer",
          "format": "int64",
          "description": "Leverage filter"
        },
        "pageToken": {
          "type": "string",
          "description": "Pagination token"
        },
        "sort": {
          "type": "string",
          "description": "Sort field"
        },
        "direction": {
          "type": "string",
          "description": "Sort direction (e.g. asc, desc)"
        },
        "limit": {
          "type": "integer",
          "format": "int64",
          "description": "Page size"
        },
        "page": {
          "type": "integer",
          "format": "int64",
          "description": "Page number"
        }
      },
      "required": [
        "shareCode",
        "buOrderType"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "shareCode",
      "buOrderType",
      "symbol",
      "trend",
      "leverage",
      "pageToken",
      "sort",
      "direction",
      "limit",
      "page"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_signal_listener",
    "title": "Push custom trading signal",
    "description": "Push custom trading signal\n\nPush a custom trading signal to drive smart copy orders. Weight: 1.\n\n**Requires `Enable trading` permission.**\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/signal/listener",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string",
          "description": "Signal type identifier (ASCII, max 1000 chars)",
          "example": "my_signal"
        },
        "signalParam": {
          "type": "string",
          "description": "Signal parameters (ASCII, max 5000 chars)",
          "example": "{}"
        },
        "base": {
          "type": "string",
          "description": "Base currency (e.g. BTC)",
          "example": "BTC"
        },
        "quote": {
          "type": "string",
          "description": "Quote currency (e.g. USDT)",
          "example": "USDT"
        },
        "time": {
          "type": "string",
          "format": "date-time",
          "description": "Signal trigger time (RFC3339)",
          "example": "2024-01-15T10:30:00Z"
        },
        "price": {
          "type": "string",
          "description": "Price at signal trigger time (ASCII, max 30 chars)",
          "example": "45000.5"
        },
        "data": {
          "type": "object",
          "required": [
            "action",
            "position_size",
            "contracts"
          ],
          "properties": {
            "action": {
              "type": "string",
              "description": "Trading action",
              "enum": [
                "buy",
                "sell"
              ],
              "example": "buy"
            },
            "position_size": {
              "type": "string",
              "description": "Position size as a ratio or absolute value",
              "example": "1"
            },
            "contracts": {
              "type": "string",
              "description": "Number of contracts",
              "example": "1"
            },
            "direction": {
              "type": "string",
              "description": "Optional trading direction hint",
              "example": "long"
            }
          }
        }
      },
      "required": [
        "signalType",
        "signalParam",
        "base",
        "quote",
        "time",
        "price",
        "data"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "signalType",
      "signalParam",
      "base",
      "quote",
      "time",
      "price",
      "data"
    ]
  },
  {
    "name": "pionex_bot_list_user_signals",
    "title": "List user custom signals",
    "description": "List user custom signals\n\nReturn a paginated list of user-defined signals. Weight: 1.\n\n**Requires `Bot reading` permission.**\n",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/signal/userSignal",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "pageToken": {
          "type": "string",
          "description": "Pagination token returned by the previous response. Omit for the first page."
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "pageToken"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_create_user_signal",
    "title": "Create user custom signal",
    "description": "Create user custom signal\n\nCreate a new user-defined signal. Each user can have at most 100 signals. Weight: 1.\n\n**Requires `Bot trading` permission.**\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/signal/userSignal",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "Signal name (max 100 chars)",
          "maxLength": 100,
          "example": "My TradingView Signal"
        },
        "description": {
          "type": "string",
          "description": "Signal description (max 1000 chars)",
          "maxLength": 1000,
          "example": "RSI crossover strategy signal"
        }
      },
      "required": [
        "title"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "title",
      "description"
    ]
  },
  {
    "name": "pionex_bot_get_user_signal",
    "title": "Get user custom signal detail",
    "description": "Get user custom signal detail\n\nReturn detail of a specific user-defined signal including webhook URL and message template. Weight: 1.\n\n**Requires `Bot reading` permission.**\n",
    "category": "bot",
    "method": "GET",
    "path": "/api/v1/bot/signal/userSignal/detail",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string",
          "description": "Signal type identifier"
        }
      },
      "required": [
        "signalType"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "signalType"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_bot_edit_user_signal",
    "title": "Edit user custom signal",
    "description": "Edit user custom signal\n\nUpdate the title and/or description of an existing user-defined signal. Weight: 1.\n\n**Requires `Bot trading` permission.**\n\nAt least one of `title` or `description` must be provided.\n",
    "category": "bot",
    "method": "POST",
    "path": "/api/v1/bot/signal/userSignal/edit",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string",
          "description": "Signal type identifier"
        },
        "title": {
          "type": "string",
          "description": "New signal name (max 100 chars)",
          "maxLength": 100,
          "example": "Updated Signal Name"
        },
        "description": {
          "type": "string",
          "description": "New signal description (max 10000 chars)",
          "maxLength": 10000,
          "example": "Updated description"
        }
      },
      "required": [
        "signalType"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "signalType"
    ],
    "bodyParameters": [
      "title",
      "description"
    ]
  },
  {
    "name": "pionex_bot_delete_user_signal",
    "title": "Delete user custom signal",
    "description": "Delete user custom signal\n\nDelete a user-defined signal. Weight: 1.\n\n**Requires `Bot trading` permission.**\n\nDeletion is rejected if the signal has any non-cancelled orders. Error code `SIGNAL_HAS_UNCLOSED_ORDERS` is returned with the open order count in `data.cnt`.\n",
    "category": "bot",
    "method": "DELETE",
    "path": "/api/v1/bot/signal/userSignal/delete",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string",
          "description": "Signal type identifier"
        }
      },
      "required": [
        "signalType"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "signalType"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_arbitrage_fetch_products",
    "title": "List Arbitrage products",
    "description": "List Arbitrage products\n\nReturns the list of Term Arbitrage products currently available. Requires `View` permission. Weight: 1.\n\nExample request:\n```\nGET /api/v1/earn/arbitrage/fetchProducts?timestamp=1774959429596\n```\n",
    "category": "earn",
    "method": "GET",
    "path": "/api/v1/earn/arbitrage/fetchProducts",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {},
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_arbitrage_fetch_user_balances",
    "title": "Get user Arbitrage balances",
    "description": "Get user Arbitrage balances\n\nReturns the authenticated user's Term Arbitrage positions and balances. Requires `View` permission. Weight: 1.\n\nExample request:\n```\nGET /api/v1/earn/arbitrage/fetchUserBalances?timestamp=1774959429596\n```\n",
    "category": "earn",
    "method": "GET",
    "path": "/api/v1/earn/arbitrage/fetchUserBalances",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {},
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_arbitrage_stake",
    "title": "Stake into an Arbitrage product",
    "description": "Stake into an Arbitrage product\n\nSubscribes to a Term Arbitrage product. Requires `Earn` permission. Weight: 1.\n\n**Validation:**\n- `amount` must be a valid decimal amount.\n- `productId` must exist in the product list returned by `GET /api/v1/earn/arbitrage/fetchProducts`.\n- `coin` must be one of `USDT` or `USDC`.\n\nExample request body:\n```json\n{\n  \"productId\": \"ARB-USDT-30D\",\n  \"coin\": \"USDT\",\n  \"amount\": \"100\"\n}\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"request_id\": \"req-abcdef\",\n    \"status\": \"success\",\n    \"txid\": \"tx-123456\"\n  },\n  \"timestamp\": 1774959429596\n}\n```\n",
    "category": "earn",
    "method": "POST",
    "path": "/api/v1/earn/arbitrage/stake",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "productId": {
          "type": "string",
          "description": "Product ID. Must exist in the product list from `/api/v1/earn/arbitrage/fetchProducts`.",
          "example": "ARB-USDT-30D"
        },
        "coin": {
          "type": "string",
          "description": "Subscription currency. Only `USDT` or `USDC` are supported.",
          "enum": [
            "USDT",
            "USDC"
          ],
          "example": "USDT"
        },
        "amount": {
          "type": "string",
          "description": "Subscription amount as a decimal string",
          "example": "100"
        }
      },
      "required": [
        "productId",
        "coin",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "productId",
      "coin",
      "amount"
    ]
  },
  {
    "name": "pionex_earn_arbitrage_un_stake",
    "title": "Redeem from an Arbitrage product",
    "description": "Redeem from an Arbitrage product\n\nRedeems from a Term Arbitrage product. Requires `Earn` permission. Weight: 1.\n\n**Validation:**\n- `amount` must be a valid decimal amount.\n- `productId` must exist in the product list returned by `GET /api/v1/earn/arbitrage/fetchProducts`.\n- `coin` must be one of `USDT` or `USDC`.\n\nExample request body:\n```json\n{\n  \"productId\": \"ARB-USDT-30D\",\n  \"coin\": \"USDT\",\n  \"amount\": \"100\"\n}\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"status\": \"success\"\n  },\n  \"timestamp\": 1774959429596\n}\n```\n",
    "category": "earn",
    "method": "POST",
    "path": "/api/v1/earn/arbitrage/unStake",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "productId": {
          "type": "string",
          "description": "Product ID. Must exist in the product list from `/api/v1/earn/arbitrage/fetchProducts`.",
          "example": "ARB-USDT-30D"
        },
        "coin": {
          "type": "string",
          "description": "Redemption currency. Only `USDT` or `USDC` are supported.",
          "enum": [
            "USDT",
            "USDC"
          ],
          "example": "USDT"
        },
        "amount": {
          "type": "string",
          "description": "Redemption amount as a decimal string",
          "example": "100"
        }
      },
      "required": [
        "productId",
        "coin",
        "amount"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "productId",
      "coin",
      "amount"
    ]
  },
  {
    "name": "pionex_earn_dual_symbols",
    "title": "List supported trading pairs",
    "description": "List supported trading pairs\n\nReturns all trading pairs supported by Dual Investment, optionally filtered by base currency. Weight: 1.\n\nSupported quote currencies include: `USDT`, `USDC`, `USD`, `USDXO`.\n\nExample request:\n```\nGET /api/v1/earn/dual/symbols?base=BTC\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"coins\": [\n      {\n        \"base\": \"BTC\",\n        \"quote\": \"USDT\",\n        \"currency\": \"USDT\",\n        \"basePrecision\": 8,\n        \"currencyPrecision\": 8,\n        \"baseMin\": \"0.00001\",\n        \"currencyMin\": \"1\",\n        \"baseMax\": \"80\",\n        \"currencyMax\": \"2000000\"\n      }\n    ]\n  },\n  \"timestamp\": 1774959429596\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/symbols",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "BTC",
          "description": "Base currency filter (e.g. `BTC`, `ETH`). Omit to return all supported pairs."
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "base"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_products",
    "title": "List open products",
    "description": "List open products\n\nReturns currently open Dual Investment products for a specific trading pair and type. Weight: 1.\n\n**Type semantics:**\n- `DUAL_BASE`: invest in base currency (e.g. BTC); if price rises above strike at expiry, principal + yield are returned in base currency, otherwise converted to quote currency\n- `DUAL_CURRENCY`: invest in quote/investment currency (e.g. USDT); if price falls below strike at expiry, principal + yield are returned in quote currency, otherwise converted to base currency\n\n**Quote currency rules:**\n- `base=BTC` or `base=ETH`: use `quote=USDXO`, `currency=USDT` or `USDC`\n- All other base currencies: use `quote=USDT`, `currency=USDT`\n\nExample request (BTC, DUAL_BASE):\n```\nGET /api/v1/earn/dual/openProducts?base=BTC&quote=USDXO&currency=USDT&type=DUAL_BASE\n```\n\nExample request (XRP, DUAL_BASE):\n```\nGET /api/v1/earn/dual/openProducts?base=XRP&quote=USDT&currency=USDT&type=DUAL_BASE\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"products\": [\n      {\n        \"productId\": \"BTC-USDXO-260401-69000-C-USDT\",\n        \"base\": \"BTC\",\n        \"quote\": \"USDXO\",\n        \"currency\": \"USDT\",\n        \"type\": \"DUAL_BASE\",\n        \"createTime\": 1774686600000,\n        \"expireTime\": 1775030400000,\n        \"strike\": \"69000\",\n        \"expired\": false\n      }\n    ]\n  },\n  \"timestamp\": 1775025855477\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/openProducts",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "BTC",
          "description": "Base currency (e.g. `BTC`, `ETH`, `XRP`)"
        },
        "quote": {
          "type": "string",
          "enum": [
            "USDT",
            "USDC",
            "USDXO"
          ],
          "example": "USDXO",
          "description": "Quote currency. Use `USDXO` for BTC/ETH; use `USDT` for all other base currencies."
        },
        "type": {
          "type": "string",
          "enum": [
            "DUAL_BASE",
            "DUAL_CURRENCY"
          ],
          "example": "DUAL_BASE",
          "description": "`DUAL_BASE` — invest in base currency; `DUAL_CURRENCY` — invest in quote/investment currency"
        },
        "currency": {
          "type": "string",
          "example": "USDT",
          "description": "Investment currency filter. For BTC/ETH pairs: `USDT` or `USDC`. For other pairs: `USDT`."
        }
      },
      "required": [
        "base",
        "quote",
        "type"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote",
      "type",
      "currency"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_prices",
    "title": "Get product prices",
    "description": "Get product prices\n\nReturns the latest yield rate and investability status for Dual Investment products. Weight: 1.\n\n**All three parameters are required:** `base`, `quote`, and `productIds`.\nOmitting any one of them will return a `DUAL_PARAMETER_ERROR`.\n\n`productIds` is a comma-separated list of product IDs. Works for both `USDT` and `USDXO` quoted pairs.\n\nWhen `canInvest` is `false`, `profit` and `baseSize` will be empty strings.\n\n> **Workflow note:** Always call this endpoint before placing an order. The `profit` value returned here must be passed as-is to `POST /api/v1/earn/dual/invest`. Submitting a stale or mismatched `profit` will be rejected.\n\nExample request (USDT pair):\n```\nGET /api/v1/earn/dual/prices?base=LRC&quote=USDT&productIds=LRC-USDT-260410-0.03-C-USDT,LRC-USDT-260410-0.02-C-USDT\n```\n\nExample request (USDXO pair):\n```\nGET /api/v1/earn/dual/prices?base=ETH&quote=USDXO&productIds=ETH-USDXO-260410-3000-C-USDT,ETH-USDXO-260410-2900-C-USDT\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"products\": [\n      {\n        \"productId\": \"LRC-USDT-260410-0.02-C-USDT\",\n        \"canInvest\": true,\n        \"profit\": \"0.01242\",\n        \"baseSize\": \"8000000\",\n        \"updateTime\": 1775026225630\n      },\n      {\n        \"productId\": \"LRC-USDT-260410-0.03-C-USDT\",\n        \"canInvest\": false,\n        \"profit\": \"0\",\n        \"baseSize\": \"\",\n        \"updateTime\": 0\n      }\n    ]\n  },\n  \"timestamp\": 1775026244892\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/prices",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "ETH",
          "description": "Base currency (e.g. `BTC`, `ETH`, `LRC`)"
        },
        "quote": {
          "type": "string",
          "enum": [
            "USDT",
            "USDC",
            "USDXO"
          ],
          "example": "USDXO",
          "description": "Quote currency. Use `USDXO` for BTC/ETH pairs; use `USDT` for all other base currencies."
        },
        "productIds": {
          "type": "string",
          "example": "ETH-USDXO-260410-3000-C-USDT,ETH-USDXO-260410-2900-C-USDT",
          "description": "Comma-separated product ID list. Multiple IDs are supported (e.g. `ETH-USDXO-260410-3000-C-USDT,ETH-USDXO-260410-2900-C-USDT`). Obtain IDs from `/openProducts`."
        }
      },
      "required": [
        "base",
        "quote",
        "productIds"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote",
      "productIds"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_index",
    "title": "Get underlying index price",
    "description": "Get underlying index price\n\nReturns the real-time index price for a Dual Investment underlying asset. Weight: 1.\n\nBoth `base` and `quote` are required. Works for both `USDT` and `USDXO` quoted pairs.\n\nThe index price is the reference price used at settlement to determine whether the strike price was hit.\n\nExample request (USDXO pair):\n```\nGET /api/v1/earn/dual/index?base=BTC&quote=USDXO\n```\n\nExample request (USDT pair):\n```\nGET /api/v1/earn/dual/index?base=LRC&quote=USDT\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"index\": \"69142.6\",\n    \"base\": \"BTC\",\n    \"quote\": \"USDXO\",\n    \"updateTime\": 1775025942486\n  },\n  \"timestamp\": 1775025942754\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/index",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "BTC",
          "description": "Base currency (e.g. `BTC`, `ETH`, `LRC`)"
        },
        "quote": {
          "type": "string",
          "enum": [
            "USDT",
            "USDC",
            "USDXO"
          ],
          "example": "USDXO",
          "description": "Quote currency. Use `USDXO` for BTC/ETH pairs; use `USDT` for all other base currencies."
        }
      },
      "required": [
        "base",
        "quote"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_delivery_prices",
    "title": "Get historical delivery prices",
    "description": "Get historical delivery prices\n\nReturns historical settlement delivery prices for a Dual Investment pair. Weight: 1.\n\nThe delivery price is the index price recorded at the exact moment of each product's expiry,\nused to determine the settlement direction (base or quote currency payout).\n\n`base` is required. `quote` is optional but recommended to narrow results — use `USDXO` for BTC/ETH pairs and `USDT` for all other base currencies.\n\nExample request (BTC/USDXO):\n```\nGET /api/v1/earn/dual/deliveryPrices?base=BTC&quote=USDXO\n```\n\nExample request (XRP/USDT):\n```\nGET /api/v1/earn/dual/deliveryPrices?base=XRP&quote=USDT\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"prices\": [\n      {\n        \"delivery\": \"69142.6\",\n        \"date\": \"2026-04-01\",\n        \"deliveryTime\": 1775030400000\n      }\n    ]\n  },\n  \"timestamp\": 1775026529937\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/deliveryPrices",
    "authenticated": false,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "BTC",
          "description": "Base currency (e.g. `BTC`, `XRP`)"
        },
        "quote": {
          "type": "string",
          "enum": [
            "USDT",
            "USDC",
            "USDXO"
          ],
          "example": "USDXO",
          "description": "Quote currency filter. Use `USDXO` for BTC/ETH pairs; use `USDT` for all other base currencies."
        },
        "startTime": {
          "type": "integer",
          "format": "int64",
          "example": 1774944000000,
          "description": "Start timestamp in milliseconds"
        },
        "endTime": {
          "type": "integer",
          "format": "int64",
          "example": 1775030400000,
          "description": "End timestamp in milliseconds"
        }
      },
      "required": [
        "base"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote",
      "startTime",
      "endTime"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_balances",
    "title": "Get user balances",
    "description": "Get user balances\n\nReturns the authenticated user's Dual Investment account balances. Requires `View` permission. Weight: 1.\n\nExample request:\n```\nGET /api/v1/earn/dual/balances?timestamp=1774959429596\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"balances\": [\n      {\n        \"base\": \"BTC\",\n        \"coin\": \"USDT\",\n        \"free\": \"100.00\",\n        \"frozen\": \"50.00\",\n        \"updateTime\": 1774959429596\n      }\n    ]\n  },\n  \"timestamp\": 1774959429596\n}\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/balances",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "merge": {
          "type": "boolean",
          "example": false,
          "description": "When `true`, merges balances with the same coin across different base currencies"
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [
      "merge"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_invest",
    "title": "Create investment order",
    "description": "Create investment order\n\nCreates a new Dual Investment order. Requires `Earn` permission. Weight: 1.\n\nProvide either `baseAmount` (invest in base currency) or `currencyAmount` (invest in investment currency), not both.\n\n> **Workflow:** Call `GET /api/v1/earn/dual/prices` first to obtain the current `profit` value, then pass it unchanged to this endpoint. The `profit` field must match the live price — a stale or mismatched value will be rejected.\n\nExample request body:\n```json\n{\n  \"base\": \"BTC\",\n  \"productId\": \"BTC-USDXO-260402-68000-P-USDT\",\n  \"clientDualId\": \"my-order-001\",\n  \"currencyAmount\": \"100\",\n  \"profit\": \"0.0039\"\n}\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"clientDualId\": \"my-order-001\",\n    \"state\": \"CONFIRMED\"\n  },\n  \"timestamp\": 1775027817297\n}\n```\n",
    "category": "earn_dual",
    "method": "POST",
    "path": "/api/v1/earn/dual/invest",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "clientDualId": {
          "type": "string",
          "description": "Client-assigned order ID used as an idempotency key. Recommended to avoid duplicate orders.",
          "example": "my-order-001"
        },
        "productId": {
          "type": "string",
          "description": "Product ID to invest in",
          "example": "BTC-USDT-260402-70000-C-USDT"
        },
        "baseAmount": {
          "type": "string",
          "description": "Investment amount in base currency (e.g. BTC). Mutually exclusive with `currencyAmount`.",
          "example": "0.01"
        },
        "currencyAmount": {
          "type": "string",
          "description": "Investment amount in investment currency (e.g. USDT). Mutually exclusive with `baseAmount`.",
          "example": "100"
        },
        "profit": {
          "type": "string",
          "description": "Expected yield rate. Must match the current price from `/prices`.",
          "example": "0.0215"
        }
      },
      "required": [
        "base"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "clientDualId",
      "productId",
      "baseAmount",
      "currencyAmount",
      "profit"
    ]
  },
  {
    "name": "pionex_earn_dual_revoke_invest",
    "title": "Revoke investment order",
    "description": "Revoke investment order\n\nRevokes a pending Dual Investment order before it is matched. Requires `Earn` permission. Weight: 1.\n\nParameters are passed as a JSON request body, not query string.\nOnly orders in a pending/unmatched state can be revoked.\n\nExample request body:\n```json\n{\n  \"base\": \"BTC\",\n  \"productId\": \"BTC-USDXO-260402-68000-P-USDT\",\n  \"clientDualId\": \"my-order-001\"\n}\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"clientDualId\": \"my-order-001\"\n  },\n  \"timestamp\": 1775027817297\n}\n```\n",
    "category": "earn_dual",
    "method": "DELETE",
    "path": "/api/v1/earn/dual/invest",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "productId": {
          "type": "string",
          "description": "Product ID of the order to revoke",
          "example": "BTC-USDXO-260402-68000-P-USDT"
        },
        "clientDualId": {
          "type": "string",
          "description": "Client-assigned dual investment order ID",
          "example": "my-order-001"
        }
      },
      "required": [
        "base",
        "productId",
        "clientDualId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "productId",
      "clientDualId"
    ]
  },
  {
    "name": "pionex_earn_dual_get_invests",
    "title": "Batch query investment orders",
    "description": "Batch query investment orders\n\nReturns details for a batch of Dual Investment orders by client order ID list. Requires `View` permission. Weight: 1.\n\nExample request body:\n```json\n{\n  \"base\": \"BTC\",\n  \"clientDualIds\": [\"my-order-001\", \"my-order-002\"]\n}\n```\n",
    "category": "earn_dual",
    "method": "POST",
    "path": "/api/v1/earn/dual/invests",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "clientDualIds": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "List of client-assigned dual investment order IDs to query",
          "example": [
            "my-order-001",
            "my-order-002"
          ]
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "clientDualIds"
    ]
  },
  {
    "name": "pionex_earn_dual_invest_records",
    "title": "Get investment history",
    "description": "Get investment history\n\nReturns paginated Dual Investment history for the authenticated user. Requires `View` permission. Weight: 1.\n\nExample request:\n```\nGET /api/v1/earn/dual/records?base=BTC&quote=USDXO&limit=10&endTime=1775027817297&timestamp=1775027817297\n```\n",
    "category": "earn_dual",
    "method": "GET",
    "path": "/api/v1/earn/dual/records",
    "authenticated": true,
    "destructive": false,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "example": "BTC",
          "description": "Base currency (e.g. `BTC`)"
        },
        "quote": {
          "type": "string",
          "example": "USDT",
          "description": "Quote currency filter (e.g. `USDT`)"
        },
        "currency": {
          "type": "string",
          "example": "USDT",
          "description": "Investment currency filter (e.g. `USDT`, `BTC`)"
        },
        "filter": {
          "type": "string",
          "description": "Status filter"
        },
        "startTime": {
          "type": "integer",
          "format": "int64",
          "example": 1743494400000,
          "description": "Start timestamp in milliseconds"
        },
        "endTime": {
          "type": "integer",
          "format": "int64",
          "example": 1775027817297,
          "description": "End timestamp in milliseconds"
        },
        "limit": {
          "type": "integer",
          "format": "int64",
          "example": 20,
          "description": "Maximum number of records to return per page"
        }
      },
      "required": [
        "base",
        "endTime"
      ],
      "additionalProperties": false
    },
    "queryParameters": [
      "base",
      "quote",
      "currency",
      "filter",
      "startTime",
      "endTime",
      "limit"
    ],
    "bodyParameters": []
  },
  {
    "name": "pionex_earn_dual_collect",
    "title": "Collect settled earnings",
    "description": "Collect settled earnings\n\nCollects settled Dual Investment earnings into the user's spot account. Requires `Earn` permission. Weight: 1.\n\nOnly orders in a settled state can be collected.\n\nExample request body:\n```json\n{\n  \"base\": \"BTC\",\n  \"clientDualId\": \"my-order-001\"\n}\n```\n\nExample response:\n```json\n{\n  \"result\": true,\n  \"data\": {\n    \"clientDualId\": \"my-order-001\"\n  },\n  \"timestamp\": 1774959429596\n}\n```\n",
    "category": "earn_dual",
    "method": "POST",
    "path": "/api/v1/earn/dual/collect",
    "authenticated": true,
    "destructive": true,
    "weight": 1,
    "inputSchema": {
      "type": "object",
      "properties": {
        "base": {
          "type": "string",
          "description": "Base currency",
          "example": "BTC"
        },
        "clientDualId": {
          "type": "string",
          "description": "Client-assigned dual investment order ID to collect",
          "example": "my-order-001"
        },
        "productId": {
          "type": "string",
          "description": "Product ID",
          "example": "BTC-USDXO-260402-68000-P-USDT"
        }
      },
      "required": [
        "base",
        "clientDualId",
        "productId"
      ],
      "additionalProperties": false
    },
    "queryParameters": [],
    "bodyParameters": [
      "base",
      "clientDualId",
      "productId"
    ]
  }
];
