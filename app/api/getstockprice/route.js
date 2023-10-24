// 1. import area
import { connectToMongoDB } from "@/db/db";


connectToMongoDB();

// 2. define area
async function GET(req) {
    
    // How to get URL Query Parameter
    const searchParams = req.nextUrl.searchParams
    // const stockName = searchParams.stockName;
    const stockName = searchParams.get('stockName')

    // await
    // every function return something
    
    var min, max, stockPrice, resData;
    let stockPrices = [];

    switch(stockName) {
        case 'ICICI':
            const db = await connectToMongoDB();
            const collection = db.collection('stockPrice');
            stockPrices = await collection.find({}).toArray();
            // res.status(200).json(stockPrices);
            //min = 800;
            //max = 1000;
            //stockPrice = (Math.random() * (max - min) + min).toFixed(2);
            // parseFloat is use to remove qoutes from the number "125.04" to 125.04
            //stockPrice = parseFloat(stockPrice);
            resData = {
                stockName,
                price:stockPrice,
            }
          break;
        case 'HDFC':
            min = 1400;
            max = 1600;
            stockPrice = (Math.random() * (max - min) + min).toFixed(2);
            // parseFloat is use to remove qoutes from the number "125.04" to 125.04
            stockPrice = parseFloat(stockPrice);
            resData = {
                stockName,
                price:stockPrice,
            };
          break;
        case 'IDFC':
            min = 124;
            max = 126;
            stockPrice = (Math.random() * (max - min) + min).toFixed(2);
            stockPrice = parseFloat(stockPrice);
            resData = {
                stockName,
                price:stockPrice,
            }
          break;
        default:
            resData = {
                // P:V (Property:Value)
                msg: "Invalid Stock Name"
            }
      }
        // object.method
    return Response.json(resData);
}


// 3. export area
// object.method (P:V)
module.exports = {GET:GET};