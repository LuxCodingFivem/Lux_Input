window.addEventListener('message', function(event) {
    var item = event.data;
    var status = item.status;
    var type = item.type;
    
    ShowInput(status);
    function ShowInput(bool) {
        if (bool) {
            if(type == "number") {
                document.getElementById("inputfield-div").innerHTML = '<input id="inputfield" style="height: 20px; width: 90%; outline: none;" type="number">';
            }
            else if(type == "password") {
                document.getElementById("inputfield-div").innerHTML = '<input id="inputfield" style="height: 20px; width: 90%; outline: none;" type="password">';
            }
            else if(type == "input") {
                document.getElementById("inputfield-div").innerHTML = '<input id="inputfield" style="height: 20px; width: 90%; outline: none;" type="text">';
            }

            if(item.lang == "en") {
                document.getElementById("cancel").innerHTML = "Cancel";
            }
            else if(item.lang == "de") {
                document.getElementById("cancel").innerHTML = "Abbrechen";
            }
            document.getElementById("top").innerHTML = '<p style="color: #fff; font-size: 25px; font-family: '+"SignPrinterHouseScript"+', sans-serif; margin: 0; max-width: 100%;">'+ item.text +'</p>';
            $('body').show();
        } else {
            $('body').hide();
        }
    }

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
        return;
        }
            switch (event.key) {
            case "Escape":
                ShowInput(false);
                $.post('https://Lux_Input/exit', JSON.stringify({}), function(response) {});
            break;
            default:
            return;
        }
        event.preventDefault();
    }, true);

});


function send() {
    var input = document.getElementById("inputfield").value;
    $.post('https://Lux_Input/send', JSON.stringify({input: input}), function(response) {});
    input = "";
}

function close_ui() {
    $.post('https://Lux_Input/exit', JSON.stringify({}), function(response) {});
}
