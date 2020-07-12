window.clipboardCopy = {
    copyEmail: function(text) {
        navigator.clipboard.writeText(text).then(function () {
            alert("Email copied to clipboard!");
        })
            .catch(function (error) {
                alert(error);
            })
    }
};
