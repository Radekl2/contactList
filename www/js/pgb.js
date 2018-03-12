function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	showContactList()
}

function showContactList() {
	
	navigator.contactsPhoneNumbers.list(function(contacts) {
      console.log(contacts.length + ' contacts found');
      for(var i = 0; i < contacts.length; i++) {
		  console.log(contacts[i].id + " - " + contacts[i].displayName);
		  document.getElementById('cont').innerHTML = 'Name: ' + contacts[i].displayName;
         for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
            var phone = contacts[i].phoneNumbers[j];
			console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
			document.getElementById('cont2').innerHTML = 'Number: ' + phone.number;
         }
      }
   }, function(error) {
      console.error(error);
   });
	
}

