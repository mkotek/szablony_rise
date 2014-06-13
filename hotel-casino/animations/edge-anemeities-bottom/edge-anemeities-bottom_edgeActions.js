/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'energy-pie-75_arriving-flight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         /////// timeline trigger ///
         // get elements
                 var elementTxt = sym.$("Counter");
         
         // get timeline symbol duration
                var dur = sym.getDuration();
         
         // create a tween {from} {to} somevalue using jquery animate
         $({someValue: 0}).animate({someValue: 75}, {
               // match the animate duration property to the length of the timeline animation
                   duration: dur,
               // called on every step
                      step: function() { 
                            // update the element's text;
                                  elementTxt.text(Math.ceil(this.someValue));
                      }
         });
         //////////// end timeline trigger /////////////

      });
      //Edge binding end

   })("energy-pie-75_arriving-flight");
   //Edge symbol end:'energy-pie-75_arriving-flight'

   //=========================================================
   
   //Edge symbol: 'pie-chart-domestic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         /////// timeline trigger ///
         // get elements
                 var elementTxt = sym.$("Counter");
         
         // get timeline symbol duration
                var dur = sym.getDuration();
         
         // create a tween {from} {to} somevalue using jquery animate
         $({someValue: 0}).animate({someValue: 42}, {
               // match the animate duration property to the length of the timeline animation
                   duration: dur,
               // called on every step
                      step: function() { 
                            // update the element's text;
                                  elementTxt.text(Math.ceil(this.someValue));
                      }
         });
         //////////// end timeline trigger /////////////

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here

      });
      //Edge binding end

   })("pie-chart-domestic");
   //Edge symbol end:'pie-chart-domestic'

   //=========================================================
   
   //Edge symbol: 'energy-pie-100'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         /////// timeline trigger ///
         // get elements
                 var elementTxt = sym.$("Counter");
         
         // get timeline symbol duration
                var dur = sym.getDuration();
         
         // create a tween {from} {to} somevalue using jquery animate
         $({someValue: 0}).animate({someValue: 93}, {
               // match the animate duration property to the length of the timeline animation
                   duration: dur,
               // called on every step
                      step: function() { 
                            // update the element's text;
                                  elementTxt.text(Math.ceil(this.someValue));
                      }
         });
         //////////// end timeline trigger /////////////

      });
      //Edge binding end

   })("energy-pie-100");
   //Edge symbol end:'energy-pie-100'

   //=========================================================
   
   //Edge symbol: 'energy-pie-75_taxi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         /////// timeline trigger ///
         // get elements
                 var elementTxt = sym.$("Counter");
         
         // get timeline symbol duration
                var dur = sym.getDuration();
         
         // create a tween {from} {to} somevalue using jquery animate
         $({someValue: 0}).animate({someValue: 6.8}, {
               // match the animate duration property to the length of the timeline animation
                   duration: dur,
               // called on every step
                      step: function() { 
                            // update the element's text;
                                  elementTxt.text(Math.ceil(this.someValue));
                      }
         });
         //////////// end timeline trigger /////////////

      });
      //Edge binding end

   })("energy-pie-75_taxi");
   //Edge symbol end:'energy-pie-75_taxi'

   //=========================================================
   
   //Edge symbol: 'mc-fast-facts'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4092, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4092, function(sym, e) {
         // insert code here
         /////// timeline trigger ///
         // get elements
                 var elementTxt = sym.$("Counter");
         
         // get timeline symbol duration
                var dur = sym.getDuration();
         
         // create a tween {from} {to} somevalue using jquery animate
         $({someValue: 0}).animate({someValue: 100}, {
               // match the animate duration property to the length of the timeline animation
                   duration: dur,
               // called on every step
                      step: function() { 
                            // update the element's text;
                                  elementTxt.text(Math.ceil(this.someValue) + '%');
                      }
         });
         //////////// end timeline trigger /////////////

      });
      //Edge binding end

   })("mc-fast-facts");
   //Edge symbol end:'mc-fast-facts'

   //=========================================================
   
   //Edge symbol: 'anim_people'
   (function(symbolName) {   
   
   })("anim_people");
   //Edge symbol end:'anim_people'

})(jQuery, AdobeEdge, "EDGE-122173174");