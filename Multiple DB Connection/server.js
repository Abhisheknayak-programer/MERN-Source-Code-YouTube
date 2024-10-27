const { MongoClient } = require("mongodb");

const dbURI1 = "mongodb://localhost:27017";
const dbURI2 = "mongodb://localhost:27017";

const client1 = new MongoClient(dbURI1);
const client2 = new MongoClient(dbURI2);

const connectAndInsertData = async () => {
  try {
    // Connecting to both databases
    await client1.connect();
    await client2.connect();

    const db1 = client1.db("database1");
    const db2 = client2.db("database2");

    // Collections in each database
    const collection1 = db1.collection("users");
    const collection2 = db2.collection("users");

    // Insert data into database1
    const result1 = await collection1.insertOne({
      name: "Abhishek",
      email: "abhishek@gmail.com",
    });
    console.log("Inserted document in database1:", result1);

    // Insert data into database2
    const result2 = await collection2.insertOne({ name: "Adarsh", age: 24 });
    console.log("Inserted document in database2:", result2);
  } catch (err) {
    console.log("Error : ", err);
  } finally {
    // Close both connections
    await client1.close();
    await client2.close();
  }
};

connectAndInsertData();
