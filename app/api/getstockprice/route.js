// 1. import area

// 2. define area
async function GET() {
    // await
    // every function return something
    const min = 124;
    const max = 126;
    var stockPrice = (Math.random() * (max - min) + min).toFixed(2);
    // parseFloat is use to remove qoutes from the number "125.04" to 125.04
    stockPrice = parseFloat(stockPrice)
        // object.method
    return Response.json({
        // P:V (Property:Value)
        // Math.random() is used to get radom number
        // price:Math.random() * (max - min) + min
        // toFixed() is used to fix the number in two digit 124.74199516057224, it will fix the number like this 124.74
        price:stockPrice
    });
}


// 3. export area
// object.method (P:V)
module.exports = {GET:GET}