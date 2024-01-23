
        document.getElementById("submit").addEventListener('click', function() {
            let val = document.getElementById("text_input").value
            JsBarcode("#barcode", val);
        })
       