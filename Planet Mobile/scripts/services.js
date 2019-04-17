//services

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText)
        $.each(json, function (k, v) {
            var x = "<div class='gallery'>" +
                "<a target='_blank' href='" + v.SRC + "'>" +
                "<img src='" + v.SRC + "' alt='" + v.ALT + "' width='300' height='200'></a>" +
                "<div class='desc'><a href='" + v.LINK + "' target='_blank'>" + v.HTML + "</a></div></div>";
            $("#boxes").append(x);

        })
    }
};
xhttp.open("GET", "scripts/services.json", true);
xhttp.send();
