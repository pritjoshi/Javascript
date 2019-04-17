//date
var today = new Date();
var element = document.getElementById("date").innerHTML = today.toDateString();

var hour = today.getHours();
var greet;
if (hour >= 18) {
    greet = " Good Evening";
} else if (hour >= 12) {
    greet = " Good Afternoon";
} else {
    greet = " Good Morning";
}

document.getElementById("greets").innerHTML = greet;
/*
var a=0;
var imagefile=["s8cover.jpg","1+3cover.jpg",'i7cover.jpg','micover.jpg','nokia6cover1.jpg','xperia.jpg'];
setInterval(imageslider,2000);

function imageslider(){
	document.getElementById("slide").src="phone/"+ imagefile[a];
	a++;
	if (a>5)
	{
		a=0;
	}
	
}

var b=0;
var c="Galaxy S8 Infinity Display";
var d="One + Three";
var e="Iphone 7 Plus";
var f=" Xaomi Mi Mix";
var g=" Nokia 6";
var h="Sony Xperia ";
setInterval(textslider,2000);
var texts=[c,d,e,f,g,h];
function textslider(){
	
	document.getElementById("text").innerHTML= texts[b];
	b++;
	if (b>5)
	{
		b=0;
	}
	
}
*/

//slider
var z = 0;
var phone1 = {
    name: "Sony Xperia",
    imgfile: "xperia.jpg"
};

var phone2 = {
    name: "Galaxy S8 Infinity Display",
    imgfile: "s8 s8+.png"
};
var phone3 = {
    name: "OnePlus 5T",
    imgfile: "oneplus5t.jpg"
};
var phone4 = {
    name: "Iphone 7 Plus",
    imgfile: "i7cover.jpg"
};
var phone5 = {
    name: "Nokia 6",
    imgfile: "nokia6.jpg"
};
var phone6 = {
    name: "Xaomi MI Mix",
    imgfile: "micover.jpg"
};

var phones = [phone1, phone2, phone3, phone4, phone5, phone6];

setInterval(slider, 2000);

function slider() {
    try {
        document.getElementById("slide").src = "phone/" + phones[z].imgfile;
        document.getElementById("text").innerHTML = phones[z].name;
        z++;
        if (z > 5) {
            z = 0;
        }

    } catch (Error) {

    }

}
