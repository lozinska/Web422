/*********************************************************************************
 *  WEB422 – Assignment 1  * 
 * I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   *  
 * No part of this assignment has been copied manually or electronically from any other source *  
 * (including web sites) or distributed to other students.  *   
 * Name: ______________________ Student ID: ______________ Date: ________________  *
 * *****************************************************************************/   
   
   
   $(document).ready(function(){

    console.log("jQuery Working");

    $( "#teams-menu" ).on( "click", function(event) {

        event.preventDefault();

        $.get("https://aqueous-ridge-27689.herokuapp.com/teams")

            .done(function(teams){

                $("#data").empty()

                    .append("<h3>Teams<h3>")

                    .append(JSON.stringify(teams));

            });   

    });

    $("#employees-menu").on("click",function(event){

        event.preventDefault();
  
    $.get("https://aqueous-ridge-27689.herokuapp.com/employees")
   .done(function(employees){
       $("#data").empty()
       .append("<h3>Employees</h3>")
       .append(JSON.stringify(employees))
   })
})

$("#projects-menu").on("click",function(event){
    event.preventDefault();
    $.get("https://aqueous-ridge-27689.herokuapp.com/projects")
    .done(function(projects){
        $("#data").empty()
       .append("<h3>Projects</h3>")
       .append(JSON.stringify(projects))
    })
})

$("#positions-menu").on("click",function(event){
    event.preventDefault();
    $.get("https://aqueous-ridge-27689.herokuapp.com/positions")
    .done(function(positions){
        $("#data").empty()
        .append("<h3>Positions</h3>")
        .append(JSON.stringify(positions))
    })
})
})