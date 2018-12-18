(function(){
  var src = document.getElementById("mel225_gmap").src;
  var data = getData(src);

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

  console.log(data);
  return data;
}

}) (document);