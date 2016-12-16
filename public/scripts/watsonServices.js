// // speech to text
// // wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize
//
// auth = {
//   "credentials": {
//     "url": "https://stream.watsonplatform.net/speech-to-text/api",
//     "password": "c3XekWOLRuP4",
//     "username": "11afe700-5c9b-4bf0-81b9-6e630a303933"
//   }
// }
// // get token
// // username=11afe700-5c9b-4bf0-81b9-6e630a303933
// // password=c3XekWOLRuP4
// // token=$(curl -u $username:$password "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api")
//
// var token = 'bfZFiahMjTlcJb%2F74ZTyrbOd%2FGwvK72bda55HAXnbPe59vGirX32xt6l135MW7mKJ%2BnZed4ZewxcHAJfxb6l6rRSxLJ5uithS9Z5RN9xKktSQlIhDYxKUfXWbb2q4Mgxd3cD6x7ihtOjMGaEHimzS1GiTWhgdpoPp3v%2Fa5JoESHYnHKjDDrnTKf3iAgGJXyEKLOtq7v5d4E1urBsTCHQsQMZqAqUaTPXJGo8YVe6mOQ69oxtCpbx%2FPItC1Uwx6iDCWUR3MK%2BT41qg0Eq8J0FtIw3AWX75aGYEyk%2FtCj%2BFLdNAuKe1gSACnvC%2B6NhC3LS0anpRJ5lzvwUzOf2%2B5uHzuiEvknpQ8wm55Rb7TN%2BCsTWDqm%2B8F4tHoF8VSx8ROv0yLcFQKXhjinSVnXXui0bT2SDHlQaNkpnMMtTiocOO8SmIvxl6LZDjRHaqdaphY0px9qbgP2XsKwb%2BbSfqqv2A4EyEMlYsVWjnHTj6ZqkBJQA6dinxxNKc32Pe2LLc9dEr6%2FTQW6xOc81jlqOia4INfiAI82aWNoIkWZRE2YsybCTqPv9NllOnN1%2F%2B5h7Pv%2BSrTAwo%2BoNzil4y%2FxrOaXdUHtKQURatRWna6ibIMCLGPuTqfAObS1oN5%2BPQCo9%2BQp%2BjumwiZWF5uG5B4fSYERUPhy1WgkcXWpKHQxvPBBVWeIeIhxJzuwO%2FbqeBo6mx4nQ1FNA3iCnofroGtvvOSiPVpaeojGNiry%2F%2Fp%2BqFAT2YohsETGF4OQerzxrAtcDmi%2BfeBz89O8PS9VIy4WBwpOcv%2BG5y3CH5M0zFYm8mTQkouXj4Q0iKl1O0L9%2FyUZQJjeJb50ZDVQkNli6Rw0fZKD4CLA8JkpsWKnvj2y7%2F1EvTTJN0zW8NSzbjM7mXBy86w71APbIU6xxS%2F8%3D';
// var wsURI = "wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=" + token + "&model=es-ES_BroadbandModel";
// var websocket = new WebSocket(wsURI);
// websocket.onopen = function(evt) { onOpen(evt) };
// websocket.onclose = function(evt) { onClose(evt) };
// websocket.onmessage = function(evt) { onMessage(evt) };
// websocket.onerror = function(evt) { onError(evt) };

//_______
// Text to speech
// get token (automate this onload)
// username="785a64f7-7943-4325-bea9-0c3bba595b0c"
// password="wojsjZk2nf55"
// token=$(curl -u $username:$password "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/text-to-speech/api")
// echo $token

var voices = {
  "en": "en-US_LisaVoice",
  "fr": "fr-FR_ReneeVoice",
  "es": "es-ES_EnriqueVoice",
  // "ar": "",
  "jp": "ja-JP_EmiVoice",
  "it": "it-IT_FrancescaVoice",
  "de": "de-DE_BirgitVoice"
}
// var token = "XCQ2aKo6CAhG7q4TuQBO5JR%2B1mLfnah1UsKP2pC6lJMPN5k6uk7OX%2FF2h6r0jNxeLlLJnhDvenwtFD3JiUNwBxgJc29NMvJH%2Bdqt%2FYpBG3ftfBzx1Pj1Ea4oqzHdByllUuxwTJOBd7E30R%2B2kQ2%2FjMjvJenbmEwaBrI4VqerH%2F%2FOvxxHXJlQXD%2B3Q94I3%2Brn7WPegQTF7PvCB%2Bmf5z1eCs9CeAsBHlQg4VQ23auzzgvp9hrz%2FUKGc5YYWGo2XwEpPF4jjJRJbxbXT0ljzljdizCDxX6GwuzR5JmmMTGmY8wUIgg6a6%2BBi%2BN0B7DQOtaO09WhlFUYuJy%2FdiBM%2BG8BHryQa%2FQCJGvJkJg%2FnCxcNTUTC4eKlPt6Hr5URwof5EnpsxmBdrRkU2dFplhm6Qs0CyrT7mbRyIZKl55bB9mCDv97EGU61iJX1%2BBX0j%2BBk9GJYSBKJ6Pn7jSLhTskrCr8C8MT0%2F1brzPaX41FXSWRIrF8VDeSEJSgjM3wSmcCCVVlQyzvqQVvL%2BkkmU0imlSW8OGF6MlCH9z1rCLSosc9wA6rLdCZIpFQGedNwFMDceYqk8869RMmntJFqcU9Ea7F1rdZ4i%2B3DOKQYRtidvw5d2Educsd%2Fu4ghJ6qxJyIJTT29MbAm1itj1bI5cjFhYX6myuLZCnTBEkMDlUmVw5yeIzLCNIguY7h8PBbzE5JUYE6krdANvO9cLh20O%2FlMTwCRA9Tk0JZQMMKZKQ34Z82x%2BCBiRrppWfudNghjlB2UIre1C3HBJmjKFn310ST0k5pzAGpFHfMax2XTeMtiV5OBlNQY87GP1JrOPPaYEu4vjEUNQvjFvSqignclnO5dURlJq9kZUemL%2FA7bNuZ109PLw8PE0EsdDVgHE1yDXqy%2Fh7yiFAkyLiaYIo%3D"
var wsURI
// var wsURI = "wss://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?voice="
//   + voices[document.getElementById("client1_language").value]
//   $('#client1_language')
//   + "&watson-token="
//   + token;
var messages = "";
var audioStream = [];

var MyBlobBuilder = function() {
  this.parts = [];
}

MyBlobBuilder.prototype.append = function(part) {
  this.parts.push(part);
  this.blob = undefined; // Invalidate the blob
};

MyBlobBuilder.prototype.getBlob = function() {
  if (!this.blob) {
    this.blob = new Blob(this.parts, { type: "audio/wav" });
  }
  return this.blob;
};

// flow
// onLoad
function onOpen(evt) {
   console.log("connection opened")
   websocket.send(messageObj)
  //  var message = {"text": "Hello world.", "accept": "*/*"};
  //  websocket.send(JSON.stringify(message));
}

function onClose(evt) {
   console.log("audio connection closed") ;
   var bb = myBlobBuilder.getBlob() ;
   var url = URL.createObjectURL(bb) ;
   audio.src = url ;
   audio.load()
   audio.play();
   console.log("src: " + audio.src)
   audio.addEventListener('ended', function(){console.log("audio finished playing") ; audio.src = "" ; console.log("src: " + audio.src) });
   //  audio.children('source').prop('src', '');
   //  audio.remove().length = 0;
   //  myBlobBuilder = null ;
   audioStream = []
  //  console.log(evt) ;
   console.log("connection closed") ;
}

function onError(evt) {
   console.log("error")
   console.log(evt) ;
}

function onMessage(evt) {
   console.log("message received")
   console.log(typeof evt.data)
   // taken from http://stackoverflow.com/questions/15970729/appending-blob-data
   var MyBlobBuilder = function() {
     this.parts = [];
   }

   MyBlobBuilder.prototype.append = function(part) {
     this.parts.push(part);
     this.blob = undefined; // Invalidate the blob
   };

   MyBlobBuilder.prototype.getBlob = function() {
     if (!this.blob) {
       this.blob = new Blob(this.parts, { type: "audio/wav" });
     }
     return this.blob;
   };

   if (typeof evt.data === "string") {
      messages += evt.data;
   } else {
      console.log(evt.data)
      console.log('Received ' + evt.data.size + ' binary bytes');
      audioStream.push(evt.data);
      myBlobBuilder.append(evt.data) ;
   }
}

// function confWebsocket(websocket) {
//   if (websocket.readyState == '1') {
    // websocket.onopen = function(evt) { onOpen(evt) };
    // websocket.onclose = function(evt) { onClose(evt) };
    // websocket.onerror = function(evt) { onError(evt) };
    // websocket.onmessage = function(evt) { onMessage(evt) };
//     console.log("websocket behavior set")
//   }
// }

// // taken from http://stackoverflow.com/questions/15970729/appending-blob-data
var MyBlobBuilder = function() {
  this.parts = [];
}

MyBlobBuilder.prototype.append = function(part) {
  this.parts.push(part);
  this.blob = undefined; // Invalidate the blob
};

MyBlobBuilder.prototype.getBlob = function() {
  if (!this.blob) {
    this.blob = new Blob(this.parts, { type: "audio/wav" });
  }
  return this.blob;
};

var myBlobBuilder, watsonTextToSpeechToken
// onMessageArrived
function initWs(client) {
  // var token = 'bfZFiahMjTlcJb%2F74ZTyrbOd%2FGwvK72bda55HAXnbPe59vGirX32xt6l135MW7mKJ%2BnZed4ZewxcHAJfxb6l6rRSxLJ5uithS9Z5RN9xKktSQlIhDYxKUfXWbb2q4Mgxd3cD6x7ihtOjMGaEHimzS1GiTWhgdpoPp3v%2Fa5JoESHYnHKjDDrnTKf3iAgGJXyEKLOtq7v5d4E1urBsTCHQsQMZqAqUaTPXJGo8YVe6mOQ69oxtCpbx%2FPItC1Uwx6iDCWUR3MK%2BT41qg0Eq8J0FtIw3AWX75aGYEyk%2FtCj%2BFLdNAuKe1gSACnvC%2B6NhC3LS0anpRJ5lzvwUzOf2%2B5uHzuiEvknpQ8wm55Rb7TN%2BCsTWDqm%2B8F4tHoF8VSx8ROv0yLcFQKXhjinSVnXXui0bT2SDHlQaNkpnMMtTiocOO8SmIvxl6LZDjRHaqdaphY0px9qbgP2XsKwb%2BbSfqqv2A4EyEMlYsVWjnHTj6ZqkBJQA6dinxxNKc32Pe2LLc9dEr6%2FTQW6xOc81jlqOia4INfiAI82aWNoIkWZRE2YsybCTqPv9NllOnN1%2F%2B5h7Pv%2BSrTAwo%2BoNzil4y%2FxrOaXdUHtKQURatRWna6ibIMCLGPuTqfAObS1oN5%2BPQCo9%2BQp%2BjumwiZWF5uG5B4fSYERUPhy1WgkcXWpKHQxvPBBVWeIeIhxJzuwO%2FbqeBo6mx4nQ1FNA3iCnofroGtvvOSiPVpaeojGNiry%2F%2Fp%2BqFAT2YohsETGF4OQerzxrAtcDmi%2BfeBz89O8PS9VIy4WBwpOcv%2BG5y3CH5M0zFYm8mTQkouXj4Q0iKl1O0L9%2FyUZQJjeJb50ZDVQkNli6Rw0fZKD4CLA8JkpsWKnvj2y7%2F1EvTTJN0zW8NSzbjM7mXBy86w71APbIU6xxS%2F8%3D';
  // var wsURI = "wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=" + token + "&model=es-ES_BroadbandModel";
  // watson_text_to_speech_token = function() {
  //   var xmlhttp = new XMLHttpRequest();
  //   xmlhttp.setRequestHeader("Authorization", "Basic " + Base64.encode(user + ":" + pass));
  //   var url = "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/text-to-speech/api";
  //   xmlhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //       var myArr = JSON.parse(this.responseText);
  //       myFunction(myArr);
  //     }
  //   xmlhttp.open("POST", url, true);
  //   xmlhttp.send();
  //
  //   };
  //
  //
  // }

  wsURI = "wss://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?voice="
    + voices[document.getElementById(client + "_language").value]
    + "&watson-token="
    + watsonTextToSpeechToken;
  websocket = new WebSocket(wsURI);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

var websocket, messageObj, token

var audio = document.getElementById('playResults');

// request initial tts token
// publish("request", 'tokens/tts/req', 2, 'tokens'); // TODO, should request a new token every hour
// clients['tokens'] = new Messaging.Client(mqtt_host, mqtt_port, "myclientid_" + parseInt(Math.random() * 100, 10));

clients['tokens'].onMessageArrived = function (message) {
  console.log("new token incoming")
  console.log("payload: " + message.payloadString)
  watsonTextToSpeechToken = message.payloadString ;
}

// TODO, client1 doesn't unsubscribe when changing language

// all audio icons have an identical class, unique id
//

// TODO, onMessageArrived function should be overridden every time audio button is clicked
clients['client1'].onMessageArrived = function (message) {
  //audio and text
  //Do something with the push message you received
  document.getElementById("client1_messages").value += message.payloadString + '\n'
  // var messageObj = `"{\"text\": \"${message.payloadString.split(':')[1]}\", \"accept\": \"audio/wav\"}"`;
  messageObj = JSON.stringify({"text": `"${message.payloadString.split(':')[1]}"`, "accept": "audio/wav"});
  // this should be done for client that
  var MyBlobBuilder = function() {
    this.parts = [];
  }

  MyBlobBuilder.prototype.append = function(part) {
    this.parts.push(part);
    this.blob = undefined; // Invalidate the blob
  };

  MyBlobBuilder.prototype.getBlob = function() {
    if (!this.blob) {
      this.blob = new Blob(this.parts, { type: "audio/wav" });
    }
    return this.blob;
  };
  myBlobBuilder = new MyBlobBuilder();
  initWs('client1')
  // var promise = new Promise(function(resolve, reject) {
  //   // do a thing, possibly async, then…
};
  //   if (websocket.readyState == 1) {
  //     resolve("Stuff worked!");
  //   }
  //   else {
  //     reject(("It broke"));
  //   }
  // });

  // window.setTimeout(function(){
  // // console.log(ready)
  // // TODO wait until websocket ready
  //   console.log(websocket.readyState)
  //   console.log("websocket.readyState")
  //   confWebsocket(websocket)
  //   window.setTimeout(function(){
  //     websocket.send(messageObj)
  //   }, 2500) ;
  //   // taken from http://stackoverflow.com/questions/15970729/appending-blob-data
  //   window.setTimeout(function(){
  //     var bb = myBlobBuilder.getBlob();
  //     var url = URL.createObjectURL(bb);
  //     audio.src = url;
  //   }, 3500) ;
  //
  //  }, 5000) ;
// };
