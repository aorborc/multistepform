ZOHO.CREATOR.init().then(function(data) {
  console.log(data);
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

ZOHO.CREATOR.init().then(function(data) {});
