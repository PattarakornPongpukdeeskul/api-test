# Getting Started with This Project

This project was testing api vendingMachine and promotion

## For development with npm

please run

### `npm install`

### `npm run dev`

## port
/:1001/

### Request
`GET /`

    curl --location -g --request GET 'localhost:1001/v1/vending-machine?purchase=[
      {
          "sku":"a",
          "amount":3
      },
      {
          "sku":"b",
          "amount":2
      },
      {
          "sku":"c",
          "amount":2
      }
    ]'

### Response

    {
        "isError": false,
        "data": {
            "finalPrice": 7717.5
        },
        "code": 200
    }


`POST /`

    curl --location --request POST 'localhost:1001/v1/vending-machine' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'price=94' \
    --data-urlencode 'payment=200'


### Response

    {
        "isError": false,
        "data": {
            "id": "82ef55fd-3efb-438f-8349-a44c03beb4f8",
            "price": "94",
            "payment": "200",
            "change": {
                "1": 1,
                "2": 0,
                "5": 1,
                "10": 0,
                "20": 0,
                "50": 0,
                "100": 1,
                "500": 0,
                "1000": 0
            }
        },
        "code": 201
    }