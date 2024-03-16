
    const $result = $("#result");

    function append(input) {
        $result.val($result.val() + input);
    }

    function cleardisplay() {
        $result.val("");
    }

    function sqrt() {
        $result.val(Math.sqrt($result.val()));
    }

    function deletelast() {
        $result.val($result.val().slice(0, -1));
    }

    function calculate() {
        try {
            $result.val(eval($result.val()));
        } catch (error) {
            $result.val("Error");
        }
    }

    $(window).on("keydown", function(event) {
        let keyname = event.key;
        switch (keyname) {
            case "End":
                cleardisplay();
                break;
            case "Delete":
            case "Backspace":
                deletelast();
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "+":
            case "-":
            case "*":
            case "/":
            case ".":
                append(keyname);
                break;
            case "Enter":
                calculate();
                break;
        }
    });
