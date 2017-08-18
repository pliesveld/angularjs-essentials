
app.directive("alert", function() {
    return {
        template: 
            "<div class='alert'>" +
                "<span class='alert-topic'>Something went wrong!</span>" +
                "<span class='alert-description'>You must add the plate info and color of the car.</span>" +
            "</div>"
    };
});