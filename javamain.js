// Raw Data for inventory. You can add more lines following the model commented on top
// Use all letters for Variables, spell out numbers
// let carNum = {stockNum:"Stock Number", carPrice:"Price", carType:"Short Description", carPic:"image.jpg" carDisc:"LONG DESCRIPTION"};
var carZero = {stockNum:"LS1FASTBIRD", carPrice:"$11,990", carType:"1999 Pontiac Firebird TransAm", carPic:"transam.jpg", carDisc:"This car is loaded and ready to RACE! With engine and exhaust modifications, including NITROUS OXIDE- you'll leave the competition in the DUST! LS1 V8, 6 Speed Manual Transmission, Leather, Premium Wheels, Tinted Glass, Power Windows, Power Locks, Remote Vehicle Entry, Car Alarm, CD Player, T-Tops!"};
let carOne = {stockNum:"1FIRSTCAR", carPrice:"$5,990", carType:"2006 Chevy Cobalt SS", carPic:"cobalt.jpg", carDisc:"This Tuner is great to drive around town all weekend, and with it's aggresive looks, will turn heads everywhere you go! Great for a first car for your learning-to-drive teenager! 4 Cylinder, Automatic Transmission, Premium Wheels, Power Sunroof, Power Windows, Remote Start, CD/MP3"};
let carTwo = {stockNum:"2FAST2FURIOUS", carPrice:"$2,990", carType:"1999 Pontiac Sunfire", carPic:"sunfire.jpg", carDisc:"This Fast and Furious sport compact is a great buy with higher miles, but plenty of STYLE! 4 Cylinder, 5 Speed Manual Transmission, Sport Exhaust, Power Sunroof, LOUD STEREO, Neon Lights, Custom Interior"};
let carThree = {stockNum:"2DOORDONK", carPrice:"$4,990", carType:"1980 Chevy Impala", carPic:"impala.jpg", carDisc:"This blast from the past has GREAT potential. Make it your Weekend Warrior or drag car, or dress it up and cruise the strip! This blank canvas was Old Woman owned and well taken care of! V6 Engine, Automatic Transmission"};
let carFour = {stockNum:"4DOORSNOWAITING", carPrice:"$8,990", carType:"2008 Pontiac Grand Prix", carPic:"grandprix.jpg", carDisc:"Look sharp and haul the kids around! This award-winning sedan is LOADED with options to make life easier! V6, Automatic Transmission, Remote Start, Touchscreen Navigation Radio, USB/IPOD input, Tinted Windows, Power Sunroof, Power Windows, WARRANTY AVAILABLE!"};
let carFive = {stockNum:"LS2GROCERYGETTER", carPrice:"$15,990", carType:"2006 Chevy Trailblazer SS", carPic:"trailblazer.jpg", carDisc:"An SUV that holds the groceries, and wins races! This is the Corvette-powered Trailblazer SS that is becoming hard to find! LS2 V8! Automatic Transmission, Remote Vehicle Entry, Power Windows, Power Sunroof, 20 INCH WHEELS! Leather, Heated Seats, BOSE Stereo, Touch Screen Navigation, Sport Exhaust"};
// code to populate the Carousel. Add more lines accordingly
// be sure to add additional slides in carousel!!!
$("#zeroPriceCaro").text(carZero['carPrice']);
$("#zeroDiscCaro").text(carZero['carType']);
$("#zeroPicCaro").attr({"src" : carZero['carPic']});

$("#onePriceCaro").text(carOne['carPrice']);
$("#oneDiscCaro").text(carOne['carType']);
$("#onePicCaro").attr({"src" : carOne['carPic']});

$("#twoPriceCaro").text(carTwo['carPrice']);
$("#twoDiscCaro").text(carTwo['carType']);
$("#twoPicCaro").attr({"src" : carTwo['carPic']});

$("#threePriceCaro").text(carThree['carPrice']);
$("#threeDiscCaro").text(carThree['carType']);
$("#threePicCaro").attr({"src" : carThree['carPic']});

$("#fourPriceCaro").text(carFour['carPrice']);
$("#fourDiscCaro").text(carFour['carType']);
$("#fourPicCaro").attr({"src" : carFour['carPic']});

$("#fivePriceCaro").text(carFive['carPrice']);
$("#fiveDiscCaro").text(carFive['carType']);
$("#fivePicCaro").attr({"src" : carFive['carPic']});
// code to define the display elements on the "inventory table" via HTML
$("#zeroPic").attr({"src" : carZero['carPic']});
$("#zeroType").text(carZero['carType']);
$("#zeroStock").text(carZero['stockNum']);
$("#zeroPrice").text(carZero['carPrice']);
$("#vehzero").text(carZero['carDisc']);
$("#onePic").attr({"src" : carOne['carPic']});
$("#oneType").text(carOne['carType']);
$("#oneStock").text(carOne['stockNum']);
$("#onePrice").text(carOne['carPrice']);
$("#vehone").text(carOne['carDisc']);
$("#twoPic").attr({"src" : carTwo['carPic']});
$("#twoType").text(carTwo['carType']);
$("#twoStock").text(carTwo['stockNum']);
$("#twoPrice").text(carTwo['carPrice']);
$("#vehtwo").text(carTwo['carDisc']);
$("#threePic").attr({"src" : carThree['carPic']});
$("#threeType").text(carThree['carType']);
$("#threeStock").text(carThree['stockNum']);
$("#threePrice").text(carThree['carPrice']);
$("#vehthree").text(carThree['carDisc']);
$("#fourPic").attr({"src" : carFour['carPic']});
$("#fourType").text(carFour['carType']);
$("#fourStock").text(carFour['stockNum']);
$("#fourPrice").text(carFour['carPrice']);
$("#vehfour").text(carFour['carDisc']);
$("#fivePic").attr({"src" : carFive['carPic']});
$("#fiveType").text(carFive['carType']);
$("#fiveStock").text(carFive['stockNum']);
$("#fivePrice").text(carFive['carPrice']);
$("#vehfive").text(carFive['carDisc']);

$("#searchBar").keyup(
  function() {
    var filtResults = 0;
    var userInput = $(this).val().toLowerCase();
      $('.vehicle').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1)
        if ($(this).text().toLowerCase().indexOf(userInput) == -1){
          filtResults++;
        };
        if (filtResults > 5){
         //this number has to be one less than your total amount of vehicles!
          $("#searchOutput").text("No Match Found!");
          // alert("No Matching Results");
        };
      });
    });
// start vehicle calculator code
$("#calculatorCalculate").click(function(){
  var taxable = 0;
  var totalPrice = 0;
  var feeCalc = 0;
  taxable = parseInt($("#inputPrice").val()) + parseInt($("#inputAcc").val());
  feeCalc = parseInt($("#inputPrice").val()) * 0.05;
  if(feeCalc > 500)
    feeCalc = 500;
  totalPrice = (taxable + feeCalc + (taxable * .08));
  $("#displayFees").text(feeCalc);
  $("#displayTax").text(taxable * .08);
  $("#totalVehiclePrice").text(totalPrice);
});
