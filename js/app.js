var ViewModel = function() {
	this.name = ko.observable('pretty');
	this.count = ko.observable(0);
	this.level = ko.observable('new born');
	this.imageSrc = ko.observable('img/22252709_010df3379e_z.jpg');

	this.incrementCounter = function () {
		this.count(this.count() + 1);
		if(this.count() > 10 && this.count() <= 25) {
			this.level('infant');
		}else if (this.count() > 25) {
			this.level('teen');
		}
		
	}
	//console.log(this.name);
} 

ko.applyBindings(new ViewModel());