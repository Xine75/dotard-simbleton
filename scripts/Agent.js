//Creates the HTML that will appear on the DOM by accessing the objects within
//the array using dot notation.  Exports for use by BusinessList

export const Business = (businessObj) => {
    return `
        <section class="agent">
        <h2>${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}</h2>
        <div class="agent__business">${businessObj.companyName}</div>
        <div> ${businessObj.phoneWork}</div>

    
    `
}