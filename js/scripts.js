$(document).ready(function(){


// ///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
 		$("#upbutton").fadeIn()

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 3)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut()
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 

  $("#introbox").click(function(event){

    event.preventDefault();
    $("#introbox").fadeOut(function(){
      $("#number1, #number2, #number3, #qmark1, #buttons").fadeIn();
    }); 
       

  });

  $("#qmark1").click(function(event){

    event.preventDefault();
    $("#introbox").fadeIn()
    $("#ingredcopybox").fadeOut()
    $("#chanping").fadeOut()
    $("#qmark1").fadeOut()


  });




  $("#number1").click(function(event) {       //NUMBER1

    event.preventDefault();

    $("#ingredcopybox").fadeToggle();
    $("#introbox").fadeOut(); 
    if ($('#qmark1').css('display') === 'none') {
    $("#qmark1").fadeIn()
      }

  });


  $("#close1").click(function(event) {

    event.preventDefault();

      $("#ingredcopybox").fadeOut();

  });

  $("#qmark").click(function(event){

    event.preventDefault();
     $("#description").toggleClass("animate")

  });



  $("#number2").click(function(event) {     //NUMBER2

    event.preventDefault();

    $("#chanping").fadeToggle();
    $("#introbox").fadeOut(); 

    if ($('#qmark1').css('display') === 'none') {
    $("#qmark1").fadeIn()
      }      
    });


  $("#close2").click(function(event) {

    event.preventDefault();

    $("#chanping").fadeOut();

  });


///images loop functions

var lightboximages = [  
  {     
        position: "0px",
        copy: "Ingredients are delivered from mainland China and processed in the back of the shop using a large cutter, topping up the contents of the jars when they get low"
  }, {  
        position: "-300px",
        copy: "There are as many as 13,000 ingredients listed in modern Chinese medicine, the vast majority derived from plants, trees and fungi"
  }, {  
        position: "-600px",
        copy: "Insects and other animal parts are still prescribed in various Chinese medicine remedies, but more controversial animal ingredients are decreasing in use"
  }, {  
        position: "-900px",
        copy: "Medicine shop workers assemble the remedy according to a Chinese herbal doctor's instructions - with as many as 30 ingredients constituting a single prescription (see below)"
  }
  ];

var boxCurrent = 0;

function rightclick() {

  boxCurrent += 1

  $("#cuttingsslide").animate({"left": lightboximages[boxCurrent].position}, 500)
  $("#cuttingcopy").html(lightboximages[boxCurrent].copy)

  if (boxCurrent==(lightboximages.length - 1)) {

    $("#right").fadeOut()
  }


}

function leftclick() {


  boxCurrent -= 1

  $("#cuttingsslide").animate({"left": lightboximages[boxCurrent].position}, 500)
  $("#cuttingcopy").html(lightboximages[boxCurrent].copy)

  if (boxCurrent==(lightboximages.length - 4)) {

    $("#left").fadeOut()
  }

}

$("#keepexploring").click(function(event) {

  event.preventDefault();
  $("#internalwrapper").animate({"bottom": "627px"}, 1000)

});

$("#backup").click(function(event) {

  event.preventDefault();
  $("#internalwrapper").animate({"bottom": "0px"}, 1000)

});

$("#leaveshop").click(function(event) {

  event.preventDefault();
  $("#internalwrapper").animate({"bottom": "1254px"}, 1000)

});

$("#backtoshop").click(function(event) {

  event.preventDefault();
  $("#internalwrapper").animate({"bottom": "627px"}, 1000)

});
//end of images loop



  $("#right").click(function(event) {

    event.preventDefault();
    rightclick()
    $("#left").fadeIn()



        });

  $("#left").click(function(event) {

    event.preventDefault();
    leftclick()
    $("#right").fadeIn()



        });

// end of click functions on arrows

  $("#number3").click(function(event){

    event.preventDefault();
    $("#cutting").fadeToggle();

  });


  $("#close3").click(function(event){

    event.preventDefault();
    $("#cutting").fadeOut();

  });


var shelfboximages = [  "0", "-940", "-1880"];

var shelfCurrent = 1

function rightshelfclick() {

  shelfCurrent += 1

  $("#shelfholder").animate({"left": shelfboximages[shelfCurrent]}, 1500)

  if (shelfCurrent==(lightboximages.length -2)) {

    $("#rightshelf").fadeOut()
  }

  if (shelfCurrent==(lightboximages.length -3)) {

    $("#leftshelf").fadeIn()
  }



  
}

function leftshelfclick() {

  shelfCurrent -= 1

  $("#shelfholder").animate({"left": shelfboximages[shelfCurrent]}, 1500)

  if (shelfCurrent==(shelfboximages.length - 3)) {

    $("#leftshelf").fadeOut();
  }

  if (shelfCurrent==(lightboximages.length-3)) {

    $("#rightshelf").fadeIn()
  }
}


$("#rightshelf").click(function(event){

    event.preventDefault();
    rightshelfclick()


  });



$("#leftshelf").click(function(event){

    event.preventDefault();
    leftshelfclick()


  });

$("#jarcopy").click(function(event){

    event.preventDefault();
    $("#jarcopy").fadeOut(function(){
      $("#rightshelf, #leftshelf, #qmark4, #qmark7, #qmark8").fadeIn(function(){
          $("#readmorejars").css("display", "block")
          $("#readmorejars").animate({"top": "114px"}, 500)
                 
      })
    })

  });

$("#readmorejars").click(function(event){

    event.preventDefault();
    $("#readmorejars").css("display", "none")
    $("#jarcopy").fadeIn()
    $("#qmark4, #qmark7, #qmark8, #info4, #info7, #info8").fadeOut()



  });

$("#qmark3").click(function(event) {


  event.preventDefault();
  $("#info1").fadeToggle()

});

$("#qmark2").click(function(event) {

  
  event.preventDefault();
  $("#info2").fadeToggle()

});


$("#qmark4").click(function(event) {

  
  event.preventDefault();
  $("#info4").fadeToggle()

});


$("#qmark5").click(function(event) {

  
  event.preventDefault();
  $("#info5").fadeToggle()

});


$("#qmark6").click(function(event) {

  
  event.preventDefault();
  $("#info6").fadeToggle()

});


$("#qmark7").click(function(event) {

  
  event.preventDefault();
  $("#info7").fadeToggle()

});

$("#qmark8").click(function(event) {

  
  event.preventDefault();
  $("#info8").fadeToggle()

});

$("#qmark9").click(function(event) {

  
  event.preventDefault();
  $("#info9").fadeToggle()

});

$("#qmark10").click(function(event) {

  
  event.preventDefault();
  $("#info10").fadeToggle()

});

$("#qmark11").click(function(event) {

  
  event.preventDefault();
  $("#info11").fadeToggle()

});

$("#qmark12").click(function(event) {

  
  event.preventDefault();
  $("#info12").fadeToggle()

});

$("#close13").click(function(event) {

  
  event.preventDefault();
  $("#info11").fadeOut()

});

$("#close14").click(function(event) {

  
  event.preventDefault();
  $("#info12").fadeOut()

});

$("#close11").click(function(event) {

  
  event.preventDefault();
  $("#info9").fadeOut()

});

$("#close12").click(function(event) {

  
  event.preventDefault();
  $("#info10").fadeOut()

});

$("#close4").click(function(event) {

  
  event.preventDefault();
  $("#info4").fadeOut()

});

$("#close5").click(function(event) {

  
  event.preventDefault();
  $("#info1").fadeOut()

});

$("#close6").click(function(event) {

  
  event.preventDefault();
  $("#info2").fadeOut()

});

$("#close7").click(function(event) {

  
  event.preventDefault();
  $("#info5").fadeOut()

});

$("#close8").click(function(event) {

  
  event.preventDefault();
  $("#info6").fadeOut()

});

$("#close9").click(function(event) {

  
  event.preventDefault();
  $("#info8").fadeOut()

});

$("#close10").click(function(event) {

  
  event.preventDefault();
  $("#info7").fadeOut()

});
///// trails

var trailImages = [  "0", "-240", "-480"];

var trailCurrent = 1

function rightTrailClick() {

  trailCurrent += 1

  $("#panelholder").animate({"left": trailImages[trailCurrent]}, 500)

  if (trailCurrent==(trailImages.length-1)) {

    $("#trailright").fadeOut()
  }

  if (trailCurrent==(trailImages.length -2)) {

    $("#trailleft").fadeIn()
  }
  
}

function leftTrailClick() {

  trailCurrent -= 1

  $("#panelholder").animate({"left": trailImages[trailCurrent]}, 500)

  if (trailCurrent==(trailImages.length - 3)) {

    $("#trailleft").fadeOut();
  }

  if (trailCurrent==(trailImages.length-2)) {

    $("#trailright").fadeIn()
  }
}


$("#trailright").click(function(event){

    event.preventDefault();
    rightTrailClick()


  });



$("#trailleft").click(function(event){

    event.preventDefault();
    leftTrailClick()


  });











}); //ready

