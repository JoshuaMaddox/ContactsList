// Add contacts to the list. name, phone number, address, email
let $fullName, $mobileNumber, $emailAddy, $contAddress, $cateGory, $contactsTable; 

//Append the variable contianing the input value to the table
$(() => {
  $fullName = $('#fullName'); 
  $mobileNumber = $('#mobileNumber');  
  $emailAddy = $('#emailAddy'); 
  $contAddress = $('#contAddress'); 
  $cateGory = $('#cateGory');
  $contactsTable = $('#contactsTable')
  $('#contactFormEntry').submit(storeContact);
});

function storeContact(event) {
  event.preventDefault()
  let fullName = $fullName.val(); 
  let mobileNumber = $mobileNumber.val();  
  let emailAddy = $emailAddy.val(); 
  let contAddress = $contAddress.val(); 
  let cateGory = $cateGory.val();
  let contactsObj = {
    fullname: fullName,
    mobilenumber: mobileNumber,
    email: emailAddy,
    address: contAddress,
    category: cateGory
  } 
  console.log("I am fullName: " + fullName);
  console.log("I am mobileNumber: " + mobileNumber);
  console.log("I am emailAddy: " + emailAddy);
  console.log("I am contAddress: " + contAddress);
  console.log("I am cateGory: " + cateGory);
}


  let $row = createNewRow(fullName, mobileNumber, emailAddy, contAddress, cateGory);

  $contactsTable.append($row);

  function createNewRow() {
    let $row = $('#templateTableRow').clone();
  }




// function init() {
//   //   var contactsObj = {};
//   $('.submitContact').click(storeInputVariables);
// }
 



//Get the value of the form field input
// function storeContact() {
  // fullName = $('#fullName').val();
  // mobileNumber = $('#mobileNumber').val();
  // emailAddy = $('#emailAddy').val();
  // contAddress = $('#contAddress').val();
  // cateGory = $('#cateGory').val();
  // contactsObj = {
  //   fullname: fullName,
  //   mobilenumber: mobileNumber,
  //   email: emailAddy,
  //   address: contAddress,
  //   category: cateGory
//   }
  
// }





// Render the list neatly.
// Be able to update the data of any contact in your list.
// Be able to delete contacts.

// Extra Features:

// Render your create / update forms in a modal (popup). 
// Bootstrap has a pretty nifty modal included!

// Add images to your contacts. These can be image urls (strings). 

// Be sure to limit the rendered size of the images so they aren't too huge.

// Be able to sort your contacts by any of the fields by clicking the field headers.

// Have a custom search bar that will filter your contacts as you type. 

// This will reduce your visible contacts to those which have any field that 
// matches a part of your input.

// Categorize your contacts into groups (friend, family, colleague, etc.), 
// and allow to filter by group.