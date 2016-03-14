////////////////////////////////
// Client page's script       //
////////////////////////////////

(function() {

  $(document).on('ready', function() {

    console.log('ready freddy');

    // cache our selectors
    var $request = $('#request');
    var $response = $('.response');

    // initiate our method with the first select value
    $request.attr('method', $('#verb').children()[0].value);

    ///////////////
    // HANDLERS  //
    ///////////////

    $('#verb').change(function() {
      // when we make a selection
      $(this).children( "select option:selected" ).each(function() {
        $request.attr('method', $(this).attr('value'));
      });
    });

    $('#send').click(function(e) {

      e.preventDefault();

      var url = $request.attr('url');
      var method = $request.attr('method');
      var postVar = $request.children('#postVar').val() || undefined;

      // console.log(url, method, postVar);

      $.ajax({
        data: {postVar: postVar},
        url: url,
        method: method
      }).fail(function(err) {
        // on errors
        console.error(err);
        $response.html(err.responseText);
      }).success(function(data, status, res){
        // on success
        console.info(res);
        $response.html(res.responseText);
      }).always(function(){
        $request.children('#postVar').val(null);
      });

    }); // $('#send')

  });
})(); //(function()
