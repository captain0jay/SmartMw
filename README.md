

![Logo](https://cdn.cp.adobe.io/content/2/dcx/f68e4034-677a-468e-95f9-0b2f617bc9eb/rendition/preview.jpg/version/3/format/jpg/dimension/width/size/1200)


# SmartMw - Smart Middle Ware

SmartMw is a Smart MiddleWare made using MindsDb for all your projects where you find a need to get insights on feedback/comments made by your customer/audience. We use AI to provide you those insight so project/buisness handlers can make better decision and stay productive.

Pros:-
- Handle your customer/audience responses from multiple Buisnessess and Projects all at one place
- Use the power of AI to get usefull insights like response sentiment, Translation, Safe/Unsafe etc.
- (upcoming) Use Chatgpt to answer those feedbacks and comments with a single click

Upcoming:-

- Handle feedback and comments from playstore & appstore, email etc.
- Assign them to multiple staff
- Various handling integration so that staff can use their preferred apps to reply to those feedbacks


## Installation

Install SmartMw with npm

```bash
  npm install
```
Start Server side script

```bash
  node server.js
```
Enter client folder for front end of SmartMw

```bash
  cd client
```
Start the client side website

```bash
  npm start
```
Website would have been started on your local machine

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- MONGO_URI - Add your mongodb cluster uri
`MONGO_URI`

- CLIENT_ID - Add your Github Clientid
`CLIENT_ID`

- CLIENT_SECRET - Add your Github Clientsecret
`CLIENT_SECRET`

- MINDDB_EMAIL - Add your Mindsdb email id
`MINDDB_EMAIL`

- MINDDB_P - Add your Mindsdb password
`MINDDB_P`


## SmartMw Screenshots

- Landing page that contains information about the website and our services
![App Screenshot](https://raw.githubusercontent.com/captain0jay/SmartMw/master/Readmess/Screenshot%20(273).png)

- Dashboard after user has successfully logged in
![App Screenshot](https://raw.githubusercontent.com/captain0jay/SmartMw/master/Readmess/Screenshot%20(269).png)

- New cluster a user can add to recieve the documents directly from their database
![App Screenshot](https://raw.githubusercontent.com/captain0jay/SmartMw/master/Readmess/Screenshot%20(270).png)

- Inside 'aiblogger' cluster which has 1 document and the document value is used with sentiment analysis to find out that its value is +ve
![App Screenshot](https://raw.githubusercontent.com/captain0jay/SmartMw/master/Readmess/Screenshot%20(268).png)

