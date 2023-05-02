const MindsDB = require('mindsdb-js-sdk');
const { Database, Model, ModelPrediction, Project, Table, View } = require('mindsdb-js-sdk');
require('dotenv').config();
//sentiment analysis
async function emotions(prompt){

//connection string
await MindsDB.default.connect({
  user: prcoess.env.MINDDB_MAIL,
  password: prcoess.env.MINDDB_P
});

//models connection parameters

const currentdb = await MindsDB.default.Databases.getDatabase('newestdb');
console.log(currentdb);
let newprompt = "message =" + "'" + `${prompt}` + "'";
console.log(newprompt)
sentimentModel = await MindsDB.default.Models.getModel('sentiment_classifier', 'mindsdb');
const queryt = {
  where : [
    newprompt
  ]
};
const queryResult = await sentimentModel.query(queryt);
console.log(queryResult.value);
return queryResult.value;
}

//flags as in safe or not
//status as in open or closed
//ai answer given or not
//industry its relying on 
//translation of comment if not in english (later feature)
//summary of comment provided too
//emotions('best product ever');
module.exports = { emotions }