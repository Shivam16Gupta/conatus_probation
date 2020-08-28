// document.getElementById('button').onclick=function(){
    // var _input= document.getElementById('input').value;
    // window.open(_input);
    
// }


document.getElementById('button').onclick=function(){
    var _input= String(document.getElementById('input').value);
    _input=_input.concat(",");
    var j=0;
    for(let i=0;i<_input.length;i++)
    {   var ab="a";
        if(_input[i]==",")
        {   
            ab = _input.slice(0,i);
            _input=_input.slice(i+1,_input.length);
            window.open(ab);
            i=-1;
        }
        
    }
    
    
}
    
    