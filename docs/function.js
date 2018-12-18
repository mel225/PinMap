(function(){
  document.addEventListener("DOMContentLoaded", function(event){
    var src = document.getElementById("mel225_gmap").src;
    var data = getData(src);
    console.log(src, data);
    Object.keys(data).map((value) => {
      console.log("in map: " + value + ":" + data[value]);
      document.getElementById("input_" + value).value = data[value];
    });
  });
}) (document)

function getData(url){
  var begin = url.indexOf("=") + 1;
  var pb = url.slice(begin);

  var data = [];
  begin = pb.indexOf("!1d") + 3;
  var len = pb.slice(begin).indexOf("!");
  data["syukusyaku"] = pb.substr(begin,len);

  begin = pb.indexOf("!2d") + 3;
  len = pb.slice(begin).indexOf("!");
  data["keido"] = pb.substr(begin,len);

  begin = pb.indexOf("!3d") + 3;
  len = pb.slice(begin).indexOf("!");
  data["ido"] = pb.substr(begin,len);

  return data;
}

function submitGmap(){
  var isReadable = true;
  var data = [];
  [].map.call(["syukusyaku", "keido", "ido"], function(cap){
    var value = document.getElementById("input_" + cap).value;
    if(isNumber(value)){
      data[cap] = value
    }else{
      isReadble = false;
    }
  });

  if(!isReadable){
    alert("数値を入力してください。");
    return false;
  }

  document.getElementById("mel225_gmap").src = createGmapUrl(data);
  return true;
}

function createGmapUrl(data){
  var src = "https://www.google.com/maps/embed";
  var pb = "pb=!1m10!1m8!1m3";
  pb += "!1d" + data["syukusyaku"];
  pb += "!2d" + data["keido"];
  pb += "!3d" + data["ido"];
  pb += "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp";

  return src + "?" + pb;
}

function isNumber(x){ 
  if( typeof(x) != 'number' && typeof(x) != 'string' )
    return false;
  else 
    return (x == parseFloat(x) && isFinite(x));
}