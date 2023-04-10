
agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {

    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000},
        {make: "Mers", model: "E220", price: 78000}
    ];
    
    var manual = false;
    
$scope.data;
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        enableColResize: true,
        rowDrag:true,
         onColumnResized: function(params) {
   if(params.finished && manual) {
            console.log('Post Resize Functionality');
            manual = false;
        }
         console.log(params)
        },
        onGridReady: function(event) {
         sizeToFit()
         
          // this.api.sizeColumnsToFit('ffd')
    //   var allColumnIds = [];
    //   columnDefs.forEach( function(columnDef) {
    //     allColumnIds.push(columnDef.field);
    // });
    // this.columnApi.autoSizeColumns(allColumnIds)
     
       },
    };
    
    
    function sizeToFit() {
    manual = false;
    $scope.gridOptions.api.sizeColumnsToFit();
}

})
.directive('myCustomer', function() {
    return {
        restrict:'E',
        scope: {
            customerInfo: '=info'
          },
      template: ''
    };
  });