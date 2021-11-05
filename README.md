# dialogflow-wa
<h2>Dialogflow + Twilio + Whatsapp (Frontend + Backend)</h2>

By [Edwin Carpio](mailto:edwin.carpio@xcelsa.com.ec)
[github.com/efecarpio](https://github.com/efecarpio)

## First Project
<h3>1. Dialogflow + Twilio + Whatsapp (ackend)</h3>

## Instructions
1. Navigate to [repo](https://github.com/efecarpio/dialogflow-wa/wa-chatbot)
2. Clone locally using
   `git clone git@github.com:janephilipps/tic-tac-toe.git`
3. Create a firebase account and login
   `npm install -g firebase-tools`
4. (wa-chatbot): Initialize the project using `firebase login`
5. Install dependencies using `firebase init functions`
6. Run tests using `firebase emulators:start`
7. Navigate to app in [browser](http://localhost:5001/MY_PROJECT/us-central1/)
8. Create Twilio and DialogFlow account and configure the API.
9. Enjoy!

## Discussion

I used the following technologies: Nodejs, Express, Mongoose, Inversify.
I used [npm install PACKAGE NAME] to generate the scaffolding for this app.

## Instructions
Requirements:
1. I used twilio, Dialogflow Essentials and Whatsapp for communication.
2. I created a database in Mongo Atlas, it consists of the following collections: articulos, stock, orders and one to manage sequences.
3. I used Node.js (hosted in Firebase Cloud Functions), ExpressJs, Typescript and Mongo Atlas.

## Acceptance Criteria:
1. In the Twilio WhatsApp sandbox you must be able to type
2. In whatsapp: 
   - “Check #462”. The response returns: The product with its description, price and inventory level.
   - "Order 10 of #462". Create a new order and store it in the database, in addition, it's exported in a csv called “orders.csv”. Each row has a product ID, a unique order ID, quantity, description, net price, and the phone number.
   - "Order 10 of #643, 20 of #471, 10 of #478". This is a bulk order. Each order has been separately processed like in the above. 
   - When orders are created, a phone number is requested to complete the process.
3. The order.csv file is updated in the Firebase Storage repository, which is updated as orders are created.
4. This is the message displayed on whatsapp to download the file "Order list -> https://storage.googleapis.com/.../orders.csv"


## Second Project
<h3>2. Inventory (Frontend + Backend)</h3>

## Instructions
1. Navigate to [repo](https://github.com/efecarpio/dialogflow-wa/inventory)
2. Clone locally using
   `git clone git@github.com:efecarpio/dialogflow-wa.git`
3. Create a firebase account and login
   `npm install -g firebase-tools`
4. (inventory-endpoint): Initialize the project using `firebase login`
5. Install dependencies using `firebase init functions`
6. Run tests using `firebase emulators:start`
7. Navigate to app in [browser](http://localhost:5001/MY_PROJECT/us-central1/)
8. (inventory): Install dependencies using `npm install`.
9. Enjoy!

## Discussion

I used the following technologies: Nodejs, Express, Mongoose, Inversify, Quasar.
I used [npm install PACKAGE NAME] to generate the scaffolding for this app.

## Instructions
1. Folders: inventory (Quasar frontend) and inventory-endpoint (Backend).
2. I created a new endpoint for the functionality of the products.
3. I used node.js (hosted in Firebase Cloud Functions), expressJs, Typescript and Mongo Atlas the same as on the other endpoint.
3. The frontend is developed in Quasar with vue.js 3 and Javascript.
