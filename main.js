$( document ).ready(function() {

    //Elements appear on scroll
    $(window).scroll(function(){
        $(".fade-in").each(function(){
        var bottomObject = $(this).offset().top + $(this).outerHeight();
        var bottomWindow = $(window).scrollTop() + $(window).height();
            if (bottomWindow * 1.2 > bottomObject){
            $(this).animate({"opacity":"1"}, 1000);
            }
        })
    })

    //Close navbar when clicked off
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    //Handle form submit
    $("#form").submit(function(event){
        var data = {
            name: $("#name").val(),
            number: $("#number").val(),
            email: $("#email").val(),
            enquiry: $("#enquiry").val()
        }
        $.ajax({
            url: "https://formspree.io/mlepqgdb",
            method: "POST",
            dataType: "json",
            data: data,
            success: function(){
                $("#form").addClass("hidden");
                $("#form-message").removeClass("hidden")
            },
            error: function(){
                alert("Error sending form, check connection & please try again")
            }
        })
        event.preventDefault();
    })
});