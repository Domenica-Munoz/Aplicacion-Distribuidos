function Datos() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari 
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5 
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var id = document.getElementById("pais").value;
    xmlhttp.onreadystatechange = function() {
      
        if (this.readyState == 4 && this.status == 200) {
            info = JSON.parse(this.responseText);
            var imagen = info[0].flag;
            document.getElementById("foto").innerHTML = "<img id='Tfoto' src='" + imagen + "'alt='foto pokemon'>";
           ///--------------------------------------------------------------///
           var name = " <h3>Name</h3>"+info[0].name;
           document.getElementById("Name").innerHTML = name;
           ///---------------------------------------------------------------///
           
            var tople = "<table id='tabla'><tr>";
            for (var i = 0; i < info[0].topLevelDomain.length; i++) {
                tople += "<th class='tg-46ru'>tople " + (i + 1) + "</th>";
            }
            tople += "</tr><tr>";
            for (var i = 0; i < info[0].topLevelDomain.length; i++) {
                tople += "<td class='tg-y698'>" + info[0].topLevelDomain[i] + "</td>";
            }
            tople += "</tr></table>";
            document.getElementById("tople").innerHTML = tople;
           ///---------------------------------------------------------------///
           
            var bloque = "<table id='tabla'><tr>";
            for (var i = 0; i < info[0].regionalBlocs[0].otherAcronyms.length; i++) {
                bloque += "<th class='tg-46ru'>Bloque " + (i + 1) + "</th>";
            }
            bloque += "</tr><tr>";
            for (var i = 0; i < info[0].regionalBlocs[0].otherAcronyms.length; i++) {
                bloque += "<td class='tg-y698'>" + info[0].regionalBlocs[0].otherAcronyms[i] + "</td>";
            }
            bloque += "</tr></table>";
            document.getElementById("Bloque").innerHTML = bloque;

        ///---------------------------------------------------------------------///
         var alpha2Code= info[0].alpha2Code;
         document.getElementById("Alpha2Code").innerHTML = alpha2Code;

         ///------------------------------------------------------------------///
         var alpha3Code =info[0].alpha3Code
         document.getElementById("Alpha3Code").innerHTML = alpha3Code;
         ///------------------------------------------------------------------///

            var call ="<table id='tabla'><tr>";
            for (var i = 0; i < info[0].callingCodes.length; i++) {
                call += "<th class='tg-46ru'>call " + (i + 1) + "</th>";
            }
            call += "</tr><tr>";
            for (var i = 0; i < info[0].callingCodes.length; i++) {
                call += "<td class='tg-y698'>" + info[0].callingCodes[i] + "</td>";
            }
            call += "</tr></table>";
            document.getElementById("call").innerHTML = call;
          ///-----------------------------------------------------------------///
          var spelling ="<table id='tabla'><tr>";
            for (var i = 0; i < info[0].altSpellings.length; i++) {
                spelling += "<th class='tg-46ru'>spelling " + (i + 1) + "</th>";
            }
            spelling += "</tr><tr>";
            for (var i = 0; i < info[0].altSpellings.length; i++) {
                spelling += "<td class='tg-y698'>" + info[0].altSpellings[i] + "</td>";
            }
            spelling += "</tr></table>";
            document.getElementById("spelling").innerHTML = spelling;
          ///----------------------------------------------------------------///
                var capital = info[0].capital;
                document.getElementById("Capital").innerHTML = capital;
         ///----------------------------------------------------------------///
          var demonym=info[0].demonym;
          document.getElementById("Demonym").innerHTML = demonym;
         ///----------------------------------------------------------------///
         var area=info[0].area;
         document.getElementById("Area").innerHTML = area;
         ///----------------------------------------------------------------///
         var gini=info[0].gini;
         document.getElementById("Gini").innerHTML = gini;
         ///----------------------------------------------------------------///
         var time ="<table id='tabla'><tr>";
         for (var i = 0; i < info[0].timezones.length; i++) {
            time += "<th class='tg-46ru'>time " + (i + 1) + "</th>";
         }
         time += "</tr><tr>";
         for (var i = 0; i < info[0].timezones.length; i++) {
             time+= "<td class='tg-y698'>" + info[0].timezones[i] + "</td>";
         }
         time += "</tr></table>";
         document.getElementById("time").innerHTML = time;
         ///---------------------------------------------------------------///
         var bord ="<table id='tabla'><tr>";
         for (var i = 0; i < info[0].borders.length; i++) {
            bord += "<th class='tg-46ru'>bord " + (i + 1) + "</th>";
         }
         bord += "</tr><tr>";
         for (var i = 0; i < info[0].borders.length; i++) {
             bord+= "<td class='tg-y698'>" + info[0].borders[i] + "</td>";
         }
         bord += "</tr></table>";
         document.getElementById("bord").innerHTML = bord;
         ///---------------------------------------------------------------///
         var native = info[0].nativeName;
         document.getElementById("Native").innerHTML=native;
         ///---------------------------------------------------------------///
         var numeric = info[0].numericCode;
         document.getElementById("Numeric").innerHTML=numeric;
         ///--------------------------------------------------------------///
         var bloque1 = "<table id='tabla'><tr>";
         for (var i = 0; i < info[0].regionalBlocs[0].otherNames.length; i++) {
             bloque1 += "<th class='tg-46ru'>Bloque1 " + (i + 1) + "</th>";
         }
         bloque1 += "</tr><tr>";
         for (var i = 0; i < info[0].regionalBlocs[0].otherNames.length; i++) {
             bloque1 += "<td class='tg-y698'>" + info[0].regionalBlocs[0].otherNames[i] + "</td>";
         }
         bloque1 += "</tr></table>";
         document.getElementById("Bloque1").innerHTML = bloque1;
         ///-------------------------------------------------------------///
         var lat ="<table id='tabla'><tr>";
         for (var i = 0; i < info[0].latlng.length; i++) {
            lat += "<th class='tg-46ru'>lat " + (i + 1) + "</th>";
         }
         lat += "</tr><tr>";
         for (var i = 0; i < info[0].latlng.length; i++) {
             lat+= "<td class='tg-y698'>" + info[0].latlng[i] + "</td>";
         }
         lat += "</tr></table>";
         document.getElementById("lat").innerHTML = lat;
         ///--------------------------------------------------------------------////
          var region = info[0].region;
          document.getElementById("Region").innerHTML = region;
          ///-----------------------------------------------------------------///
          var subregion = info[0].subregion
          document.getElementById("Subregion").innerHTML = subregion;
          ///----------------------------------------------------------------///
          var population = info[0].population
          document.getElementById("Population").innerHTML = population;
         ///----------------------------------------------------------------///
         var cioc = info[0].cioc;
         document.getElementById("Cioc").innerHTML=cioc;
         ///---------------------------------------------------------------///
         var iso639_1= info[0].languages[0].iso639_1;
         document.getElementById("leng").innerHTML=iso639_1;
         var iso639_2= info[0].languages[0].iso639_2;
         document.getElementById("leng1").innerHTML=iso639_1;
         var name= info[0].languages[0].name;
         document.getElementById("leng2").innerHTML=name;
         var nativeName= info[0].languages[0].nativeName;
         document.getElementById("leng3").nativeName;
        ///----------------------------------------------------------------///
        var de=info[0].translations.de;
        document.getElementById("Trans").innerHTML=de;
        var es=info[0].translations.es;
        document.getElementById("Trans1").innerHTML=es;
        var fr=info[0].translations.fr;
        document.getElementById("Trans2").innerHTML=fr;
        var ja=info[0].translations.ja;
        document.getElementById("Trans3").innerHTML=ja;
        var it=info[0].translations.it;
        document.getElementById("Trans4").innerHTML=it;
        var br=info[0].translations.br;
        document.getElementById("Trans5").innerHTML=br;
        var pt=info[0].translations.pt;
        document.getElementById("Trans6").innerHTML=pt;
        var nl=info[0].translations.nl;
        document.getElementById("Trans7").innerHTML=nl;
        var hr=info[0].translations.hr;
        document.getElementById("Trans8").innerHTML=hr;
        var fa=info[0].translations.fa;
        document.getElementById("Trans9").innerHTML=fa;
        
    }
    };
    xmlhttp.open("GET", "https://restcountries.eu/rest/v2/name/" + id, true);
    xmlhttp.send();
}