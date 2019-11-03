var a = 0;
var b = 0;
var c = "";


function my_f(p){
	if (p === "+" || p === "-" || p === "/"){
		c = p;
	}

	else if (p === "=") {
		if (a !== 0 && b !== 0 && c !== ""){
			if ( c === "+"){
				alert(a + b);
			}
			else if (c === "-"){
				alert(a - b);
			}
			else{
				alert(a / b);
			}
		}
	}
	else{
		if(a === 0) {
			a = p;
		}
		else{
			b = p;
		}
	}


}