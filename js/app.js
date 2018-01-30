
var Cat = function() {
	this.name = ko.observable('pretty');
	this.count = ko.observable(0);
	//this.level = ko.observable('new born');
	this.imageSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.nickNames = ko.observableArray( [
		{name : 'blah1'},
		{name :'blah2'},
		{name : 'blah3'}
		]);
	this.title = ko.computed (function () {
		var level;
		var clicks = this.count();
		if(clicks <= 10){
			level = "new born";
		}else if(clicks > 10 && clicks <= 25) {
			level = "infant";
		}else  {
			level = "teen";
		}
		return level;
		
	},this);
}

var ViewModel = function() {
	
	this.CurrentCat = ko.observable(new Cat());
	
	this.incrementCounter = function () {
		this.count(this.count() + 1);
	
	}
	//console.log(this.name);
} 

ko.applyBindings(new ViewModel());