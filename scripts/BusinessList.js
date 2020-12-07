import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

//defines a variable and uses it to place the HTML at a particular place in the DOM
const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    //allows access to the array of business objects
    const businessArray = useBusinesses()
    //adds a header to the list that will appear on the DOM
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"


    //iterate over each item in the array, run it through the HTML generator of Business(),
    //and add it to the running list of items rendered to the DOM (can be used in place of a for loop)
    const manufacturing = businessArray.filter(businessObj => {
        if (businessObj.companyIndustry === "Manufacturing") {
            contentTarget.innerHTML += Business(businessObj)
        }
        
    }
    )
    
    
    
    //This method is used to render ALL business to DOM, not just NY
    // businessArray.forEach(
    //     (businessObj) => {
    //         contentTarget.innerHTML += Business(businessObj)
    //     }
    // )
}

