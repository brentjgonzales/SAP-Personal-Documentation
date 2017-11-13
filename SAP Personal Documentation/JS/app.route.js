app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/Main.html",
		controller: "Main"
    })
	.when("/DataDictionary", {
        templateUrl : "template/DataDictionary.html"
	})
    .when("/DatabaseTables", {
        templateUrl: "template/DatabaseTables.html"
    })
    .when("/CreateProgram", {
        templateUrl: "template/CreateProgram.html"
    })
    .when("/ABAPSyntax", {
        templateUrl: "template/ABAPSyntax.html"
    });
});