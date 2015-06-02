

function inputBlank() {
    var x = document.forms["myForm"]["i"].value;
    if (x == null || x == "") {
        alert("Input could not be blank.");
		return false;
    }

	if (isNaN(x)){
		alert("Input should be a number.");
		return false;
	}
	
	else{
		 document.getElementById("in").value = x*2;
	}
}

function calculate() {
    var i1 = document.forms["myForm1"]["i1"].value;
    var i2 = document.forms["myForm1"]["i2"].value;
	var i3 = document.forms["myForm1"]["i3"].value;
	var i4 = document.forms["myForm1"]["i4"].value;
	var d = document.forms["myForm1"]["d"].value;
	var is = [i1, i2, i3, i4, d]
	
	for (i = 0; i < is.length; i++) {
		var test = is[i];
		
		if (test == null || test == "") {
			alert("Input could not be blank.");
			return false;
		}

		if (isNaN(test)){
			alert("Input should be a number.");
			return false;
		}
		
		var reminder = is[i]/d;
		if(reminder>0){
			alert("Not all of these numbers divided by Division value get a reminder of 0.");
			return false;
		}
	}
	
	alert("Each number divided by Division value gets a reminder of 0.");
	return false;


	
 
}