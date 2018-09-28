/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
var currentChannel;
var currentLocation ={createdBy:"shack.slimmer.certainty",latitude:35.511176,longitude:33.873092};

function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    currentChannel=channelName;

    //Log the current channel name
    console.log("currentChannel",currentChannel);
    
    //Log the current location
    console.log("currentLocation",currentLocation);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;
    

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/'+channelName.createdBy+'"target="_blank"><strong>'+channelName.createdBy+'</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').toggleClass((channelName.starred)?"fas far":"far fas");

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
   // $('#channels li:contains(' + channelName.starred +''+ fas fa-star+')').toggleClass('fas far');
   $('#channels li:contains('+currentChannel.name+')span.far fa-star').toggleClass("far fas ");
}

/* #6 #liking a channel on #click */
function star() {
   $('#channel-star').toggleClass("fas far");
  
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

//constructor function to create new messages 
function Message(createdBy,latitude,longitude,createdOn,expiresOn,own,text){

/*this.createdBy='minus.plus.yummy'  ;  
this.latitude=currentLocation.latitude;
this.longitude=currentLocation.longitude;
this.createdOn=Date.now();
this.expiresOn=Date.now()+ 9e5;
this.own=true;*/
this.createdBy=createdBy;  
this.latitude=latitude;
this.longitude=longitude;
this.createdOn=createdOn;
this.expiresOn=expiresOn;
this.own=own;
this.text=text;

}

//create new message object form 
function sendMessage(){

    var writtenmessage=$("input[name=inputmessage]").val();
    var ownmessage=new Message(currentLocation.createdBy,currentLocation.latitude,currentLocation.longitude,Date.now(),Math.round(15,Date.now()+9e5),true,writtenmessage);
    console.log("newmessage",ownmessage);
   $("<div class='message own'>").html(createMessageElement(ownmessage)).appendTo("#messages");
}

//function, which takes a message object and returns a string representation of an HTML message element
function createMessageElement(objectmessage){

return '<h3><a href="http://w3w.co/'+objectmessage.createdBy+'"target="_blank"><strong>'+objectmessage.createdBy+'</strong></a>'+objectmessage.createdOn+'<em>'+objectmessage.expiresOn+'min. left</em></h3><p>'+ objectmessage.text +'</p><button>+5 min.</button>';

   
}