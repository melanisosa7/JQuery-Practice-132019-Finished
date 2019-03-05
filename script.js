/*
1.  
Write a JQuery click handler so that when you click the Answer 1 button, 
the answer to the joke is revealed and the background color changes to pink.
*/
$("#joke1").click(
    function(){
        $("#joke1answer").text("Mars Bar");  
        $("body").css("background-color","pink"); 
    });

/*2.  
Write a jquery click handler so that when you click the Answer 2 button, 
the answer to the joke is revealed and the background color changes to aqua.
*/

$("#joke2").click(
    function(){
        $("#joke2answer").text("Nice belt");  
        $("body").css("background-color","aqua"); 
    
});

/*
3.  Write a jquery click handler so that when you click the Answer 3 button,
the answer to the joke is revealed and the answer text is red in color.
*/

$("#joke3").click(
    function(){
        $("#joke3answer").text("A bagel"); 
        $("body").css("color","red"); 
    }
);

/*4.  Write a jquery click handler so that when you click the Answer 4 button, the answer to the joke is revealed and an image of a cat appears.  You will need to use the .attr action.  Write your code below:
*/

$("#joke4").click(
    function(){
        $("#joke4answer").text("Feed me night Miow"); 
        $("#cat-image").attr("src","http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"); 
    });



/*5.  Write a jquery click handler so that when you click the Answer 5 button, the answer to the joke is revealed and a picture of a math book appears.  Write our code below:
*/
$("#joke5").click(
    function(){
        $("#joke5answer").text("Because it has many problems"); 
        $("#math-image").attr("src","https://vignette.wikia.nocookie.net/battlefordreamislandfanfiction/images/6/61/Math_book_New_Pose.png/revision/latest?cb=20170616190438"); 
    });



/*6.  Write your own joke in HTML (with a question, button, and place for answer).  Then, create the jQuery click handler to reveal the answer when the button is clicked.  Have the button perform a .css or .attr action as well.
*/

$("#joke6").click(
    function(){
        $("#joke6answer").text("His sleigh is flown by raindeer"); 
        $("#santa").attr("src","https://i.ytimg.com/vi/y6iR3rnarOo/maxresdefault.jpg"); 
});

