function dark(){
    btn = document.getElementById("mode");
    $(":root").css("--main-color", "#c071c06b");
    $("#mode").attr("onclick","light();");
    btn.innerHTML = 'blue'
    barcolor('#c071c0')
}
function light(){
    btn = document.getElementById("mode");
    $(":root").css("--main-color", "#7199c06b");
    $("#mode").attr("onclick","dark();");
    btn.innerHTML = 'purple'
    barcolor('#7199c0')
}
function orange(){
    $(":root").css("--main-color", "#c0a7716b");
    barcolor('#c0a771')
}
function red(){
    $(":root").css("--main-color", "#c071716b");
    barcolor('#c07171')
}
function green(){
    $(":root").css("--main-color", " #9ec0716b");
    barcolor('#9ec071')
}
function cyan(){
    $(":root").css("--main-color", " #71c0c06b");
    barcolor('#71c0c0')
}
function lime(){
    $(":root").css("--main-color", " #7ec0716b");
    barcolor('#7ec071')
}
function white(){
    $(":root").css("--main-color", " #6e65652f");
    barcolor('#6e6565')
    $('#p-alpha').attr('style','width:'+(42/225)*100);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
function barcolor(x){
    var r = hexToRgb(x).r
    var g = hexToRgb(x).g
    var b = hexToRgb(x).b
    $('#p-red').attr('style','width:'+(r/225)*100+'%')
    $('#p-green').attr('style','width:'+(g/225)*100+'%')
    $('#p-blue').attr('style','width:'+(b/225)*100+'%')
    $('#p-alpha').attr('style','width:'+(107/225)*100+'%')
}
