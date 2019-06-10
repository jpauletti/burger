$("#add-burger").on("click", function(event) {
    event.preventDefault();

    // grab new burger
    var newBurger = {
        burger: $("#burger-name").val().trim()
    }

    // post request
    $.post("/api/burgers", newBurger, function(data) {
        // reload page
        location.reload();
    })
})
