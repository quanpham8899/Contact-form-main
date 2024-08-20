const radio_general = document.getElementById('general-enquiry');
const radio_support = document.getElementById('support-request');
const query_left = document.getElementById('q_left');
const query_right = document.getElementById('q_right');
const term_checkbox = document.getElementById("term-checkbox");

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}

if (query_left != null && query_right != null) {
    query_left.addEventListener('click', function() {
        query_left.style.border = "2px solid hsl(169, 82%, 27%)";
        query_right.style.border = "1px solid rgba(0,0,0,.4)";
        radio_general.checked = true;
        radio_support.checked = false;
    });

    query_right.addEventListener('click', function(){
        query_right.style.border = "2px solid hsl(169, 82%, 27%)";
        query_left.style.border = "1px solid rgba(0,0,0,.4)";
        radio_support.checked = true;
        radio_general.checked = false;
    });
} else console.log("Missing element");

function OnSubmitCheck() {
    event.preventDefault();
    var _fName = document.getElementById("first_name");
    let _lName = document.getElementById("last_name");
    let _email = document.getElementById("_email");
    let _message = document.getElementById("_message");
    let _isValid = true;
    
    let _error_array = document.querySelectorAll(".error-label");
    if (_error_array != null) {
        _error_array.forEach((element, index) => {
            element.style.display = 'none';
        });
    }

    _fName.style.border = "1px solid rgba(0, 0, 0, .4)";
    _lName.style.border = "1px solid rgba(0, 0, 0, .4)";
    _email.style.border = "1px solid rgba(0, 0, 0, .4)";
    query_right.style.border = "1px solid rgba(0,0,0,.4)";
    query_left.style.border = "1px solid rgba(0,0,0,.4)";
    _message.style.border = "1px solid rgba(0,0,0,.4)";
    

    if (isNullOrEmptyOrWhitespace(_fName.value)) {
        _isValid = false;
        _error = document.getElementById("first-name-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
        _fName.style.border = "1px solid red";
    } else if (isNullOrEmptyOrWhitespace(_lName.value)) {
        _isValid = false;
        _error = document.getElementById("last-name-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
        _lName.style.border = "1px solid red";
    } else if (isNullOrEmptyOrWhitespace(_email.value) || !isValidEmail(_email.value)) {
        _isValid = false;
        _error = document.getElementById("email-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
        _email.style.border = "1px solid red";
    } else if (!radio_general.checked && !radio_support.checked) {
        _isValid = false;
        _error = document.getElementById("query-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
    } else if (isNullOrEmptyOrWhitespace(_message.value)) {
        _isValid = false;
        _error = document.getElementById("message-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
        _message.style.border = "1px solid red";
    } else if (term_checkbox == null || !term_checkbox.checked) {
        _isValid = false;
        _error = document.getElementById("term-error");
        if (_error != null) {
            _error.style.display = 'block';
        }
    }
    var _error;

    if (!_isValid) {
        event.preventDefault();
    } else {
        // Submit
        event.preventDefault();
        modal.style.display = 'block';
        span.addEventListener('click', function() {
            
        });
    }
}

function isNullOrEmptyOrWhitespace(str) {
    return str === null || str.trim() === '';
}

function isValidEmail(str) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(str);
}