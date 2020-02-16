$( document ).ready(function() {
  AOS.init();
  
  $.ajax("https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=152945cf366446688129bd121c63cd5c", {
    type: "GET",
    dataType: "json",
    success: function(data) {
      $('#loading').hide();
      for(var i = 0; i < data.articles.length; i++)
      {
        $('#emiga-app').append(`
          <div  data-aos="fade-down" class="col-12 border mt-1 mb-1 w-100" onclick="window.open('`+data.articles[i].url+`', '_blank')" style="cursor:pointer;">
            <div class="container pt-2 pb-2">

              <div class="d-flex justify-content-between pt-2 pb-2">
                <div></div>
                <div>
                  <h6 class="text-muted d-sm-none d-md-block">`+moment(data.articles[i].publishedAt).format("DD MMMM HH:mm, YYYY")+`</h6>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0">
                  <div style="background-image: url('`+data.articles[i].urlToImage+`') !important;" class="bg-dark img-fluid img-responsive"></div>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 bg-white p-3 border mt-1 mb-1">
                    <a href="`+data.articles[i].url+`" target="_blank">
                      <h4>`+data.articles[i].title+`</h4>
                    </a>
                  <h6 class="text-muted">`+data.articles[i].description+`</h6>
                    <p class="pt-2 pb-2">`+data.articles[i].content+`</p>
                </div>
              </div>

              <div class="d-flex justify-content-between pt-2 pb-2">
                <div>
                  <h6 class="text-muted d-sm-none d-md-block">by <b>`+data.articles[i].author+`</b> on `+data.articles[i].source.name+`</h6>
                </div>
              </div>

            </div>
          </div>
        `);
      }
    },
    error: function(req, status, err) {
      console.error("Something went wrong! Status: %s (%s)", status, err);
    }
  });


});
