//File to create an orde

//loading required libraries,
var chaiAssertion = require('chailibrary');
var chaiHttpLibraries = require('chaihttplibrary');
var chaiShould = chaiAssertion.should();

//Getting the data from test files added , here format and the flavour methods called
var testdata = getTestData('path of the test data file : /app.av.testData/apiTestData.json')

//intiating the assertion library to work with http / rest
chaiAssertion.use(chaiHttpLibraries)

//mocha block or test framework
describe("CreateOrderForCustomer", function(){
    it("getCustomerID",function(){
        chaiAssertion.request("rest server path")
            .get('/endpoint')
            .end(fun(erroro,ressult){
            ressult.should.have.status(200);
            ressult.should.be.json;
            //here logic may goes on to extract response body based on parameters
        }
    });
        it("CreateOrder",function(){
            chaiAssertion.request(testdata.serverUrl)
                .post("/endpoint")
                .send("accepted format of the body example: json customerID")
                .end(function(e,r) {
                    r.should.have.property("ORDERID")
                    r.should.have.status(200);

                })
        })
})