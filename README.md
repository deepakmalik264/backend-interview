# WIN Backend Engineering Interview

The Order Management System is a web service API built using Node.js and Express.js. It provides functionality to manage orders and services. The system follows the Model-View-Controller (MVC) architecture and uses a MongoDB database for data storage. It exposes endpoints for retrieving orders and services, as well as creating orders and services.
Database used :  MongoDB

## Deliverables

╔═════════════════════════════════════════╗
║       ServiceRecords API Documentation    ║
╚═════════════════════════════════════════╝

Base URL:
http://localhost:9000

Endpoints:
1. CreateServiceRecord
   Method: POST
   Endpoint: /serviceRecord/create-service-record
   Request Header:
      Content-Type: application/json
   Request Body:
      {
          "name": "Testing5"
      }

2. UpdateServiceRecord
   Method: PUT
   Endpoint: /serviceRecord/update/{recordId}
   Request Header:
      Content-Type: application/json
   URL Parameters:
      recordId: [Unique Record ID]
   Request Body:
      {
          "name": "Analysis"
      }

3. GetServiceRecord
   Method: GET
   Endpoint: /serviceRecord/{recordId}
   URL Parameters:
      recordId: [Unique Record ID]

4. DeleteServiceRecord
   Method: DELETE
   Endpoint: /serviceRecord/delete/{recordId}
   URL Parameters:
      recordId: [Unique Record ID]

5. GetAllServiceRecords
   Method: GET
   Endpoint: /serviceRecord/get-all-service-records

Response:
- All endpoints return responses with appropriate HTTP status codes.
- Response content (JSON format) contains relevant data or error messages.

Example Usage (cURL commands):
1. Create a new service record:
   curl -X POST -H "Content-Type: application/json" -d '{"name": "Testing5"}' http://localhost:9000/serviceRecord/create-service-record

2. Update an existing service record:
   curl -X PUT -H "Content-Type: application/json" -d '{"name": "Analysis"}' http://localhost:9000/serviceRecord/update/[Record ID]

3. Retrieve information about a specific service record:
   curl http://localhost:9000/serviceRecord/[Record ID]

4. Delete a specific service record:
   curl -X DELETE http://localhost:9000/serviceRecord/delete/[Record ID]

5. Retrieve a list of all service records:
   curl http://localhost:9000/serviceRecord/get-all-service-records

Important Notes:
- Ensure proper authorization and permissions.
- Use HTTPS in production.
- Handle responses and errors as needed.

This documentation provides a basic overview of the ServiceRecords API.
Refer to the API documentation for detailed info.

╔═════════════════════════════════════════╗
║            Order API Documentation          ║
╚═════════════════════════════════════════╝

Base URL:
http://localhost:9000

Endpoints:
1. CreateOrder
   Method: POST
   Endpoint: /api/order
   Request Header:
      Content-Type: application/json
   Request Body:
      {
          "totalFee": 20,
          "serviceIds": [{"id": "649970053ff37d61f1c5c0aa"}, {"id": "649970053ff37d61f1c5c0ac"}],
          "userId": 1
      }

2. updateOrder
   Method: PUT
   Endpoint: /api/order/[Order ID]
   Request Header:
      Content-Type: application/json
   Request Body:
      {
          "amount": 2,
          "serviceIds": [{"id": "649970053ff37d61f1c5c0aa"}]
      }

3. GetOrder
   Method: GET
   Endpoint: /api/order
   Query Parameters:
      orderId: [Order ID] (disabled)

4. DeleteRequest
   Method: DELETE
   Endpoint: /api/order/[Order ID]

5. get-all-order
   Method: GET
   Endpoint: /api/order

Response:
- All endpoints return responses with appropriate HTTP status codes.
- Response content (JSON format) contains relevant data or error messages.

Example Usage (cURL commands):
1. Create a new order:
   curl -X POST -H "Content-Type: application/json" -d '{"totalFee":20,"serviceIds":[{"id":"649970053ff37d61f1c5c0aa"},{"id":"649970053ff37d61f1c5c0ac"}],"userId":1}' http://localhost:9000/api/order

2. Update an existing order:
   curl -X PUT -H "Content-Type: application/json" -d '{"amount":2,"serviceIds":[{"id":"649970053ff37d61f1c5c0aa"}]}' http://localhost:9000/api/order/[Order ID]

3. Retrieve information about orders:
   curl http://localhost:9000/api/order

4. Delete an order:
   curl -X DELETE http://localhost:9000/api/order/[Order ID]

5. Retrieve a list of all orders:
   curl http://localhost:9000/api/order

Important Notes:
- Ensure proper authorization and permissions.
- Use HTTPS in production.
- Handle responses and errors as needed.

This documentation provides a basic overview of the Win API.
Refer to the API documentation for detailed info.

