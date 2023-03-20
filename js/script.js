 function run(){
           let htmlcode = document.querySelector("#html-code").value;
           let cssCode = "<style>"+ document.querySelector("#css-code").value+ "</style>";
           let jsCode = document.querySelector("#js-code").value;
           let output = document.querySelector("#output");
        //    console.log(htmlcode ,cssCode , jsCode ,  output ); 

        output.contentDocument.body.innerHTML= htmlcode+cssCode;
        output.contentWindow.eval(jsCode);
        }
      document.querySelector(".editor #html-code").addEventListener("keyup" ,run);
      document.querySelector(".editor #css-code").addEventListener("keyup" ,run);
      document.querySelector(".editor #js-code").addEventListener("keyup" ,run);


    