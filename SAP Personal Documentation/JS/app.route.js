app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/Main.html",
		controller: "Main"
    })
	.when("/DataDictionary", {
        templateUrl : "template/DataDictionary.html"
	})
    .when("/CreatingADatabaseTable", {
        templateUrl: "template/CreatingADatabaseTable.html"
    });
    //.when("/red", {
    //    templateUrl : "red.htm"
    //})
    //.when("/green", {
    //    templateUrl : "green.htm"
    //})
    //.when("/blue", {
    //    templateUrl : "blue.htm"
    //});
});