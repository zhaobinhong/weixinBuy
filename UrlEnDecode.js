/*function urlEncode(str) {
	var ret = "";
	var strSpecial = "!\"#$%&’()*+,/:;<=>?[]^`{|}~%";
	var tt = "";
	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		var c = str2asc(chr);
		tt += chr + ":" + c + "n";
		if (parseInt("0x" + c) > 0x7f) {
			ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
		} else {
			if (chr == " ")
				ret += "+";
			else if (strSpecial.indexOf(chr) != -1)
				ret += "%" + c.toString(16);
			else
				ret += chr;
		}
	}

	return ret;
}

function urlDecode(str) {
	
	var ret = "";
	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		if (chr == "+") {
			ret += " ";
		} else if (chr == "%") {
			var asc = str.substring(i + 1, i + 3);
			if (parseInt("0x" + asc) > 0x7f) {
				ret += asc2str(parseInt("0x" + asc
						+ str.substring(i + 4, i + 6)));
				i += 5;
			} else {
				ret += asc2str(parseInt("0x" + asc));
				i += 2;
			}
		} else {
			ret += chr;
		}
	}

	return ret;
}*/

function str2asc(str){ 
return str.charCodeAt(0).toString(16); 
} 
function asc2str(str){ 
return String.fromCharCode(str); 
} 

var symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@";
var loAZ = "abcdefghijklmnopqrstuvwxyz";
symbols+= loAZ.toUpperCase();
symbols+= "[\\]^_`";
symbols+= loAZ;
symbols+= "{|}~";


function toAscii(valueStr)
{
	valueStr = valueStr.toLowerCase();
    var hex = "0123456789abcdef";
	var text = "";
	var i=0;

	for( i=0; i<valueStr.length; i=i+2 )
	{
		var char1 = valueStr.charAt(i);
		if ( char1 == ':' )
		{
			i++;
			char1 = valueStr.charAt(i);
		}
		var char2 = valueStr.charAt(i+1);
		var num1 = hex.indexOf(char1);
		var num2 = hex.indexOf(char2);
		var value = num1 << 4;
		value = value | num2;

		var valueInt = parseInt(value);
		var symbolIndex = valueInt - 32;
		var ch = '?';
		if ( symbolIndex >= 0 && value <= 126 )
		{
			ch = symbols.charAt(symbolIndex)
		}
		text += ch;
		console.log(test);
	}

	return text;
}

function toHex(valueStr)
{
	var hexChars = "0123456789abcdef";
	var text = "";
	for( i=0; i<valueStr.length; i++ )
	{
		var oneChar = valueStr.charAt(i);
		var asciiValue = symbols.indexOf(oneChar) + 32;
		var index1 = asciiValue % 16;
		var index2 = (asciiValue - index1)/16;
		if ( text != "" ) text += ":";
		text += hexChars.charAt(index2);
		text += hexChars.charAt(index1);
	}
	return text;
}

function UrlEncode(str) {
	var ret = "";
	var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
	var tt = "";

	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		var c = str2asc(chr);
		tt += chr + ":" + c + "n";
		if (parseInt("0x" + c) > 0x7f) {
			ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
		} else {
			if (chr == " ")
				ret += "+";
			else if (strSpecial.indexOf(chr) != -1)
				ret += "%" + c.toString(16);
			else
				ret += chr;
		}
	}
	return ret;
}


/*function asc2str(strstr) {
	var str2asc = chr(ascasc);
	return str2asc;
}*/
function UrlDecode(str) {
	var ret = "";
	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		if (chr == "+") {
			ret += " ";
		} else if (chr == "%") {
			var asc = str.substring(i + 1, i + 3);
			if (parseInt("0x" + asc) > 0x7f) {
				ret += asc2str(parseInt("0x" + asc
						+ str.substring(i + 4, i + 6)));
				i += 5;
			} else {
				ret += asc2str(parseInt("0x" + asc));
				i += 2;
			}
		} else {
			ret += chr;
		}
	}
	return ret;
}
