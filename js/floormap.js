//Create the canvas object that the paths are drawn on
var rsr = Raphael('floormap'); 

// Set the viewbox so that SVGs can auto resize. More info: http://raphaeljs.com/reference.html#Paper.setViewBox
rsr.setViewBox(0, 0, 976, 548);

var floormaps = [];

var bathroom1 = rsr.rect(544, 154, 87.7, 71); 
bathroom1.attr({id: 'bathroom1',x: '544',y: '154','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
bathroom1.description = 'This is a bathroom.';
floormaps.push(bathroom1);

var bathroom2 = rsr.rect(384, 407, 64.7, 66.2); 
bathroom2.attr({id: 'bathroom2',x: '384',y: '407','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
bathroom2.description = 'This is a bathroom.';
floormaps.push(bathroom2);

var computer3 = rsr.circle(149, 196, 19); 
computer3.attr({id: 'computer3','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
computer3.description = 'This is a computer area.';
floormaps.push(computer3);

var computer2 = rsr.circle(73, 285, 19); 
computer2.attr({id: 'computer2','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
computer2.description = 'This is a computer area.';
floormaps.push(computer2);

var computer1 = rsr.circle(141, 473, 19); 
computer1.attr({id: 'computer1','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
computer1.description = 'This is a computer area.';
floormaps.push(computer1);

var studyroom_220i = rsr.rect(256.7, 407, 38, 29.3); 
studyroom_220i.attr({id: 'studyroom_220i',x: '256.7',y: '407','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220i.description = 'This is a study room.';
floormaps.push(studyroom_220i);

var studyroom_220f = rsr.rect(256.7, 494.8, 32.7, 36.6); 
studyroom_220f.attr({id: 'studyroom_220f',x: '256.7',y: '494.8','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220f.description = 'This is a study room.';
floormaps.push(studyroom_220f);

var studyroom_220g = rsr.rect(256.7, 464.3, 32.7, 30.4); 
studyroom_220g.attr({id: 'studyroom_220g',x: '256.7',y: '464.3','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'});
studyroom_220g.description = 'This is a study room.'; 
floormaps.push(studyroom_220g);

var studyroom_220e = rsr.rect(289.3, 499, 32, 32.3); 
studyroom_220e.attr({id: 'studyroom_220e',x: '289.3',y: '499','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220e.description = 'This is a study room.';
floormaps.push(studyroom_220e);

var studyroom_220d = rsr.rect(321.3, 499, 28, 32.3); 
studyroom_220d.attr({id: 'studyroom_220d',x: '321.3',y: '499','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220d.description = 'This is a study room.';
floormaps.push(studyroom_220d);

var studyroom_220c = rsr.rect(349.3, 499, 34.7, 32.3); 
studyroom_220c.attr({id: 'studyroom_220c',x: '349.3',y: '499','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220c.description = 'This is a study room.';
floormaps.push(studyroom_220c);

var studyroom_220h = rsr.path("M 256.7,436.3 294.7,436.3 294.7,453.7 289.3,453.7 289.3,464.3 256.7,464.3  z"); 
studyroom_220h.attr({id: 'studyroom_220h','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_220h.description = 'This is a study room.';
floormaps.push(studyroom_220h);

var studyroom_240a = rsr.path("M 227.3,313.7 260,307.7 260,343.7 234,343.7  z"); 
studyroom_240a.attr({id: 'studyroom_240a','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240a.description = 'This is a study room.';
floormaps.push(studyroom_240a);

var studyroom_240b = rsr.path("M 222.7,282.5 260,274 260,307.7 229.4,313.1  z"); 
studyroom_240b.attr({id: 'studyroom_240b','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240b.description = 'This is a study room.';
floormaps.push(studyroom_240b);

var studyroom_240c = rsr.path("M 260,245.5 260,274 227.3,281.4 220.5,254  z"); 
studyroom_240c.attr({id: 'studyroom_240c','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240c.description = 'This is a study room.';
floormaps.push(studyroom_240c);

var studyroom_240d = rsr.path("M 218,222.7 260,214 260,245.5 222.7,253.1  z"); 
studyroom_240d.attr({id: 'studyroom_240d','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240d.description = 'This is a study room.';
floormaps.push(studyroom_240d);

var studyroom_240e = rsr.path("M 213.3,194.7 260,183.7 260,214 218,222.7  z"); 
studyroom_240e.attr({id: 'studyroom_240e','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240e.description = 'This is a study room.';
floormaps.push(studyroom_240e);

var multipurpose_room_250 = rsr.path("M 161,285 192,289.7 203,346.7 192,401.3 189,401.3 179,404.7 161,408.3   119,378.3 119,314.7  z"); 
multipurpose_room_250.attr({id: 'multipurpose_room_250','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
multipurpose_room_250.description = 'This is a study room.';
floormaps.push(multipurpose_room_250);

var studyroom_240f = rsr.rect(13.7, 353.3, 27.7, 36.3); 
studyroom_240f.attr({id: 'studyroom_240f',x: '13.7',y: '353.3','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240f.description = 'This is a study room.';
floormaps.push(studyroom_240f);

var studyroom_240g = rsr.rect(13.7, 180.7, 27.7, 35.3); 
studyroom_240g.attr({id: 'studyroom_240g',x: '13.7',y: '180.7','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_240g.description = 'This is a study room.';
floormaps.push(studyroom_240g);

var studyroom_201e = rsr.rect(828, 4.5, 36.5, 49); 
studyroom_201e.attr({id: 'studyroom_201e',x: '828',y: '4.5','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_201e.description = 'This is a study room.';
floormaps.push(studyroom_201e);

var studyroom_201d = rsr.rect(828, 53.5, 36.5, 33); 
studyroom_201d.attr({id: 'studyroom_201d',x: '828',y: '53.5','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_201d.description = 'This is a study room.';
floormaps.push(studyroom_201d);

var studyroom_201c = rsr.rect(828, 86.5, 36.5, 40); 
studyroom_201c.attr({id: 'studyroom_201c',x: '828',y: '86.5','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_201c.description = 'This is a study room.';
floormaps.push(studyroom_201c);

var studyroom_201b = rsr.path("M 813,154 851,154 832,193 813,193  z"); 
studyroom_201b.attr({id: 'studyroom_201b','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_201b.description = 'This is a study room.';
floormaps.push(studyroom_201b);

var studyroom_201a = rsr.path("M 792.5,225 818,225 832,193 792.5,193  z"); 
studyroom_201a.attr({id: 'studyroom_201a','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
studyroom_201a.description = 'This is a study room.';
floormaps.push(studyroom_201a);

var teaching_214 = rsr.path("M 655,4.5 655,33 662,33 662,126.5 745,126.5 745,4.5  z"); 
teaching_214.attr({id: 'teaching_214','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'}); 
teaching_214.description = 'This is a teaching room.';
floormaps.push(teaching_214);

var teaching_203 = rsr.rect(745, 4.5, 83, 122); 
teaching_203.attr({id: 'teaching_203',x: '745',y: '4.5','stroke-width': '0','opacity': '0.5','fill': '#ED3E3E'});
teaching_203.description = 'This is a teaching room.'; 
floormaps.push(teaching_203);


rsr.forEach(function(e){

	e.mouseover(function(){
    	this.attr({ fill: "blue" });
    });

    e.mouseout(function(){
    	this.attr({ fill: "#ED3E3E" });
    });

    e.click(function(){
    	this.attr({ fill: "gold" });

		$.magnificPopup.open({
		    items: {
		      src: $('<div class="white-popup">' + this.description + '</div>'),
		    },
		    type: 'inline' // this is default type
		});
    });

})
