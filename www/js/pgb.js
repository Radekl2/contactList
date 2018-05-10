function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	send();
}

function showContactList() {
	var table = document.getElementById("tab");
	navigator.contactsPhoneNumbers.list(function(contacts) {
      //console.log(contacts.length + ' contacts found');
      for(var i = 0; i < contacts.length; i++) {
		  //console.log(contacts[i].id + " - " + contacts[i].displayName);
		  var row = table.insertRow(0);
		  var cell1 = row.insertCell(0);
		  cell1.innerHTML = " " + contacts[i].displayName;
         for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
            var phone = contacts[i].phoneNumbers[j];
			//console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber+ ")");
			var cell2 = row.insertCell(0);
			cell2.innerHTML = "Number and name: " + phone.number;
         }
      }
   }, function(error) {
      console.error(error);
   });
	
}

function send() {
document.addEventListener('deviceready', function () {
	cordova.plugins.email.requestPermission(function (granted) {...});
    cordova.plugins.email.isAvailable(
        function (isAvailable) {
            alert("is email mobile available? " + (isAvailable ? "Yes" : "No"));
            if(isAvailable){
             window.plugin.email.open({
                 to:      'test@test.com',
                 subject: 'Greetings',
                 body:    'How are you? Nice greetings from Leipzig'
             }, callback, scope);
           }
        }
    );
}, false);
}
function callback(){
    console.log("callback function");
}

function scope(){
    console.log("scope function");
}
