var express = require('express')
var app = express()
var path= require('path');

var html_dir=path.resolve('../client/');

app.use(express.static(html_dir));

/*app.get('/', function (req, res) {
    res.render(html_dir+'\\index.html');
});*/


app.get('/resources/dashboard',function (req,res){
    res.json(
        [{"customerId":1,"customerName":"Test","resubmissionNote":"beste Wiedervorlage überhaupt","resubmissionDue":1423090800000}]
    );
});
app.get('/resources/customers/1',function (req,res){
    res.json(
        {"id":1,"companyName":"Test","description":"bester Kunder überhaupt","logoId":null,"imageUrl":null,"resubmissions":[{"customerId":1,"id":2,"note":"beste Wiedervorlage überhaupt","due":1423090800000,"active":true}]}
    );
});
app.get('/resources/customers/25/1',function (req,res){
    res.json(
        {"total":1,"customers":[{"id":1,"companyName":"Test","description":"bester Kunder überhaupt","logoId":null}]}
    );

});


var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})