// Add contacts to the list. name, phone number, address, email
let contactImg, $fullName, $mobileNumber, $emailAddy, $contAddress, $cateGory, $contactsTable, allContactsEntry, allContacts; 

//Append the variable contianing the input value to the table
$(() => {
  allContactsEntry = [];
  allContacts = [];
  $contactImg = $('#contactImg');
  $fullName = $('#fullName'); 
  $mobileNumber = $('#mobileNumber');  
  $emailAddy = $('#emailAddy'); 
  $contAddress = $('#contAddress'); 
  $cateGory = $('#cateGory');
  $contactsTable = $('#contactsTable')
  $('#contactFormEntry').submit(storeContact);
  $contactsTable.on('click', '.deleteBtn', removeContact);

});

let contactImages = [
  '<img src="http://i.imgur.com/ceHoqxZ.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/KSByAzt.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/YizvODO.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/5oiqneO.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/HV72R1v.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/pT3IDG2.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/rrMbhXA.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/esxzuBy.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/mObT8Sc.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/rzw8Kgf.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/m90MLOL.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/OxYcfRK.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/sdc5xxm.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/vlcfHWc.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/HuJN6Hi.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/2oLRhyP.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/Ty0wp4U.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/T3bY849.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/9pkQx2P.png" width="30px "class="contactImg">',
  '<img src="http://i.imgur.com/zSdUPEv.png" width="30px "class="contactImg">'
]

function storeContact(event) {
  event.preventDefault();
  contactImg = contactImages[Math.floor(Math.random()*contactImages.length)];
  let fullName = $fullName.val(); 
  let mobileNumber = $mobileNumber.val();  
  let emailAddy = $emailAddy.val(); 
  let contAddress = $contAddress.val(); 
  let cateGory = $cateGory.val();
  let $row = createNewRow(contactImg, fullName, mobileNumber, emailAddy, contAddress, cateGory);
  $contactsTable.append($row);
}

  

function createNewRow(contactImg, fullName, mobileNumber, emailAddy, contAddress, cateGory) {
  //Storing Data to the all Contacts array
  allContactsEntry = Array.prototype.slice.call(arguments); //store args
  allContacts.push(allContactsEntry);
  console.log('I am allContacts: ', allContacts);
  //Storing Data to the all Contacts array END
  let $row = $('#templateTableRow').clone();
  $row.removeAttr('id');
  $row.children('.contactImg').html(contactImg);
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

//An autofocus effect from bootstrap
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})