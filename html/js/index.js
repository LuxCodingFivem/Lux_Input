window.addEventListener('message', function(event) {
    var item = event.data;
    var status = item.status;
    var type = item.type;
    var lang = item.lang;
    
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

            document.getElementById("cancel").innerHTML = translation[lang].cancel;
            
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

var translation;
import_translation();
async function import_translation() {
    const response = await fetch("./json/translation.json");
    translation = await response.json();
}

function send() {
    var input = document.getElementById("inputfield").value;
    $.post('https://Lux_Input/send', JSON.stringify({input: input}), function(response) {});
    document.getElementById("inputfield").value = "";
}

function close_ui() {
    $.post('https://Lux_Input/exit', JSON.stringify({}), function(response) {});
}
