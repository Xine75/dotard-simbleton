export const Business = (businessObj) => {
    return `
        <section class="business">
        <h2 class="business__name">${businessObj.companyName}</h2>
        <div class="business__street">${businessObj.addressFullStreet}</div>
        <div> ${businessObj.addressCity}, ${businessObj.addressStateCode}  ${businessObj.addressZipCode}</div>

    
    `
}