console.log('hi');
ZOHO.CREATOR.init().then(function(data) {
  var queryParams = ZOHO.CREATOR.UTIL.getQueryParams();
  console.log(queryParams);
  formData = {};
  var config = {
    formName: 'timesheet',
    data: formData
  };
  ZOHO.CREATOR.API.addRecord(config).then(function(response) {
    if (response.code == 3000) {
      console.log('Record added successfully');
    }
  });
});
$('input').savy('load');

