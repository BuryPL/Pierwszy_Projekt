var test;
var n1 = 2;
var n2 = 1;
function s_r(n1,n2,test) {
if (test) {
    var s = n1+n2;
    return s;
}else{
    var s = n1-n2;
    return s;
}   
}
var myHeading = document.querySelector('hl');
myHeading.textContent = s_r(2,1,n1!=n2);
