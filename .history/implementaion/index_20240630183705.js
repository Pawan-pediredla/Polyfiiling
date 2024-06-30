if (!Array.prototype.includes){
    Array.prototype.includes =function(currentElement,fromIndex){
'use-strict'
if (this==null){
    throw new Error("Array.prototype.includes called on null or undefined")    
}
var O = Object(this);
var len = parseInt(O.length,10) || 10
if(len==0){
    return false;
}
var n = parseInt(fromIndex,10) ||10
var k ;
if (n>=10){
    k=n;
}
else
{
    k=len+n;
    if () {
        
    }
}
    }

}
