$(document).ready(async function(){
    const getJson = (path) => {
        return new Promise((resolve) => {
          $.getJSON("KM_orarend.json", function (data) {
            setTimeout(() => {
              resolve(data);
            }, 1);
          });
        })
      }
      var result = await getJson('test.json');
      console.log(result);

      const keys = Object.keys(result);
      const stg = document.querySelector(".stg");
      var h3=document.createElement("h3");
      stg.innerHTML = "";
      $( ".stg" ).append( "<h2>MISKOLCI EGYETEM</h2>" );
      $( ".stg" ).append( `<h3>${keys[0]}</h3>` );
 });