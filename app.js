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
  $contactsTable.on('click', '.deleteBtn', removeContact);
});

function storeContact(event) {
  event.preventDefault()
  let fullName = $fullName.val(); 
  let mobileNumber = $mobileNumber.val();  
  let emailAddy = $emailAddy.val(); 
  let contAddress = $contAddress.val(); 
  let cateGory = $cateGory.val();
  let $row = createNewRow(fullName, mobileNumber, emailAddy, contAddress, cateGory);
  $contactsTable.append($row);
}

  

function createNewRow(fullName, mobileNumber, emailAddy, contAddress, cateGory) {
  let $row = $('#templateTableRow').clone();
  $row.removeAttr('id');
  $row.children('.fullName').text(fullName);
  $row.children('.mobileNumber').text(mobileNumber);
  $row.children('.emailAddy').text(emailAddy);
  $row.children('.contAddress').text(contAddress);
  $row.children('.cateGory').text(cateGory);
  return $row;
} 

function removeContact(event){
  let $target = $(event.target);
  $target.closest('tr').remove();
}

var contactImages = [
  '<img src="http://i.imgur.com/ceHoqxZ.png" class="contactImg">',
  '<img src="http://i.imgur.com/KSByAzt.png" class="contactImg">',
  '<img src="http://i.imgur.com/YizvODO.png" class="contactImg">',
  '<img src="http://i.imgur.com/5oiqneO.png" class="contactImg">',
  '<img src="http://i.imgur.com/HV72R1v.png" class="contactImg">',
  '<img src="http://i.imgur.com/pT3IDG2.png" class="contactImg">',
  '<img src="http://i.imgur.com/rrMbhXA.png" class="contactImg">',
  '<img src="http://i.imgur.com/esxzuBy.png" class="contactImg">',
  '<img src="http://i.imgur.com/mObT8Sc.png" class="contactImg">',
  '<img src="http://i.imgur.com/rzw8Kgf.png" class="contactImg">',
  '<img src="http://i.imgur.com/m90MLOL.png" class="contactImg">',
  '<img src="http://i.imgur.com/OxYcfRK.png" class="contactImg">',
  '<img src="http://i.imgur.com/sdc5xxm.png" class="contactImg">',
  '<img src="http://i.imgur.com/vlcfHWc.png" class="contactImg">',
  '<img src="http://i.imgur.com/HuJN6Hi.png" class="contactImg">',
  '<img src="http://i.imgur.com/2oLRhyP.png" class="contactImg">',
  '<img src="http://i.imgur.com/Ty0wp4U.png" class="contactImg">',
  '<img src="http://i.imgur.com/T3bY849.png" class="contactImg">',
  '<img src="http://i.imgur.com/9pkQx2P.png" class="contactImg">',
  '<img src="http://i.imgur.com/zSdUPEv.png" class="contactImg">'
]

  // let contactsObj = {
  //   fullname: fullName,
  //   mobilenumber: mobileNumber,
  //   email: emailAddy,
  //   address: contAddress,
  //   category: cateGory
  // } 

  // console.log("I am fullName: " + fullName);
  // console.log("I am mobileNumber: " + mobileNumber);
  // console.log("I am emailAddy: " + emailAddy);
  // console.log("I am contAddress: " + contAddress);
  // console.log("I am cateGory: " + cateGory);






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