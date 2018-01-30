
var Cat = function(data) {
	this.name = ko.observable(data.name);
	this.count = ko.observable(data.count);
	//this.level = ko.observable('new born');
	this.imageSrc = ko.observable(data.imageSrc);
	this.nickNames = ko.observableArray( data.nickNames );
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

var allCats = [
	{
		name : 'pretty',
		count : 0,
		imageSrc : 'img/22252709_010df3379e_z.jpg',
		nickNames : [
		{name : 'blah1'},
		{name :'blah2,'},
		{name : 'blah3'}
		]
	},
	{
		name : 'puzzy',
		count : 0,
		imageSrc : 'img/434164568_fea0ad4013_z.jpg',
		nickNames : [
		{name : 'blah10'},
		{name :'blah21'},
		{name : 'blah32'}
		]
	},
	{
		name : 'villi',
		count : 0,
		imageSrc : 'img/1413379559_412a540d29_z.jpg',
		nickNames : [
		{name : 'blah1'},
		{name :'blah2'},
		{name : 'blah3'}
		]
	},
	{
		name : 'banty',
		count : 0,
		imageSrc : 'img/4154543904_6e2428c421_z.jpg',
		nickNames : [
		{name : 'blah1'},
		{name :'blah2'},
		{name : 'blah3'}
		]
	},
	{
		name : 'rani',
		count : 0,
		imageSrc : 'img/9648464288_2516b35537_z.jpg',
		nickNames : [
		{name : 'blah1'},
		{name :'blah2'},
		{name : 'blah3'}
		]
	}
];
var ViewModel = function() {
	self = this;
	this.catList = ko.observableArray([]);

	allCats.forEach( function (catItem) {
		self.catList().push(new Cat(catItem));
		//console.log(catItem);
	});

	
	this.CurrentCat = ko.observable(this.catList()[0]);

	this.selectCat = function(selectedCat){
		self.CurrentCat(selectedCat);
		//console.dir(selectedCat);
	}
	this.incrementCounter = function () {
		this.count(this.count() + 1);
	
	}
	//console.log(this.name);
} 

ko.applyBindings(new ViewModel());