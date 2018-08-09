
data = br.parammeters.userdetails
var customerSignUp = require(".//path of the customerSignup page")
var customerID,
describe("Create the order", function() {

    function userdata() {
        return data;
    }

    // this line is to make test as data driven
    using(userdata, function () {
  //this will run once before the all it blocks
        beforeAll(function () {
            launchURL(); // assuming method implemented at super level
        })

        /*
        This Block will verify the successful signup and create the Customer ID
         */
        it("signup Customer", function () {
            customerSignUp.verifyTheCustomerSignupLoadedOrNot();
            customerSignUp.fillCustomerName(userdata.userName);
            customerSignUp.fillCustomerAddress(userdata.address);
            customerID = customerSignUp.clickOnSighnUp(); // returns the customer ID and returns to the orders page
        });

        /*
        this block will search the item on orders page and selects the order to place and verifies
         */
        it("SearchForAnOrder and select", function () {
            orders = customerSignUp.returnToLoginPage();
            orders.search(item);
            orders.verifyTheSelectedOrderIsAvilableOrNot();
        });


    })
}