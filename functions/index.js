
import functions from 'firebase functions';
import express from 'express';
import cors from 'cors';
const stripe = require('stripe')(
    'pk_test_51OPYI0LK8WdHpNGUc7htFO1zOgQm1gXkhcciePB4vC1xYtsycoPfWjKhuLwPT5cyCCgHze0OO0MkluJKR1MZCwUm00csfLWoIu'
);

const app = express();
app.use(cors({origin:true}));
app.use(express.json()
);

app.get('/',(request,response)=>response.status(200).send('hello world'));


exports.api =functions.https.onRequest(app);































/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
