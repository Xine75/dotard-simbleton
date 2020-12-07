import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Agent.js"

//defines a variable and uses it to place the HTML at a particular place in the DOM
const contentTarget = document.querySelector(".businesses")

export const PurchasingList = () => {
    //allows access to the array of business objects
    const businessArray = useBusinesses()
    //adds a header to the list that will appear on the DOM
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"


    //iterate over each item in the array, run it through the HTML generator of Business(),
    //and add it to the running list of items rendered to the DOM (can be used in place of a for loop)
     //This method is used to render ALL business to DOM, not just NY
    businessArray.forEach(
        (businessObj) => {
            contentTarget.innerHTML += Business(businessObj)
        }
    )
}
   
   
   
  
    
    
    
  