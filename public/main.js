
var $details = $('.details');

//need an array to srore all the data

$('#save-data').on('click', function () {
    //alert('clicked!');
    $.ajax({
        method: "GET",
        url: 'file',
        dataType: "json",
        success: function(data) {
          console.log(data);
          renderFunc(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      }); 
  });

  var renderFunc = function(data){
      $details.append(
          '<p> this it the Name: ' + '<span style="color:blue; font-weight:bold">' + data.name + '</span>' +
           ' and this is the ' + '<span style="color:blue; font-weight:bold">' + data.job + '</span></p>'
      )

  }

  $('#submit-form').on('click', function(){
    var nameInput = $(this).closest('.inputs').find('.name').val(); //.closest('.inputs')
    console.log(nameInput);
    var jobInput = $(this).closest('.inputs').find('.job').val(); //.closest('.inputs')
    console.log(jobInput);

    $.ajax({
        method: "POST",
        url: 'file',
        data: { name: nameInput, job: jobInput },
        dataType: "json",
        success: function(data) {
          console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });

      //there is also a shorthand way of doing this that takes 2 parameters:
      //the 'URL' and a 'data object' to send to the server:
      //$.post( "file", { name: "Hadas", task: "queen" } );

  });