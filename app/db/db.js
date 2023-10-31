import { MongoClient } from 'mongodb'

// const uri = 'mongodb+srv://dineshmehra86:7kNf9PA6DadnEnga@cluster0.yl57w9z.mongodb.net/';
// const object = new ClassName(actualArgument);
const client = new MongoClient(process.env.MONGODB_URI);

// object.method();
// object.properties
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db();
    } catch (error){
        console.error('Error connecting to MongoDB', error)
    }
}

export { connectToMongoDB };