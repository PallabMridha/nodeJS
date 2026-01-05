function testmiddleware(req, res, next) {
    console.log("ami test middleware");
    

    if (req.headers.authorization == 143143) {
       next() 
    }
    else{
       res.send("error") 
    }
    
}
module.exports = testmiddleware