
$(document).ready(function(){

	//getJSON() method is used to get JSON data 
    
     $.getJSON( "http://roadtrippers.herokuapp.com/api/v1/cities/", function( data ) {
     

     	$(data.cities).each(function(index,value){
     		
     		$("table").append("<tr>"+"<td>"+value.id+"</td>"+"<td>"+value.name+"</td>"+"<td>"+"<img src="+value.cover+">"+"</td>"+"<td>"+value.state+"</td>"+"</tr>");
     	});
  
        });});

