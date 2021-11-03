$(document).ready(function() {

    // Build an unordered list of section headers;
    // this will be used to toggle between sections
    var sectionToggles = $('<ul id="sectionToggles"></ul>');

    $("#principles h3").each(function() {
        var listItem = $('<li></li>');
        $(listItem).text( $(this).text() );
        $(sectionToggles).append(listItem);
    });

    $("#principles h2").after(sectionToggles);

    // Setup the toggle controls
    $("#principles .principle").each(function(index, elem) {

        // Get the corresponding section toggle by index position
        var sectionToggle = $("#sectionToggles li")[index];

        // Change section on click
        $(sectionToggle).on("click", function() {

            // Highlight the targeted toggle
            $("#sectionToggles li").removeClass("selected");
            $(sectionToggle).addClass("selected");

            // Show the corresponding section
            $("#principles .principle").removeClass("selected");
            $(elem).addClass("selected");

            // Update the "next" section link
            if (index + 1 == $("#principles .principle").length ) {
                $("p#next").hide();
            } else {
                var nextSectionToggle = $("#sectionToggles li")[index + 1];
                $("p#next").text('Next: ' + $(nextSectionToggle).text() );
                $("p#next").attr("data_key", index + 1);
                $("p#next").show();
            }
        });
    });

    // Display first section
    $("#sectionToggles :first").addClass("selected");
    $("#principles .principle :first").addClass("selected");

    // Create link to next section and bind index position for click handler
    var nextSection = $("#sectionToggles li")[1];
    var nextControl = $('<p id="next" data_key="1">Next</p>');

    $(nextControl).text( 'Next: ' + $(nextSection).text() );

    // Display the "next" section by index position
    $(nextControl).on("click", function() {

        var index = parseInt( $(this).attr("data_key"), 10 );

        // Update the section toggle
        var nextSectionToggle = $("#sectionToggles li")[index];
        var nextSection = $("#principles .principle")[index];

        // Highlight the "next" toggle
        $("#sectionToggles li").removeClass("selected");
        $(nextSectionToggle).addClass("selected");

        // Show the corresponding section
        $("#principles .principle").removeClass("selected");
        $(nextSection).addClass("selected");

        // Update the "next" section link
        if (index + 1 == $("#principles .principle").length ) {
            $(this).hide();
        } else {
            var nextSectionToggle = $("#sectionToggles li")[index + 1];
            $(this).text('Next: ' + $(nextSectionToggle).text() );
            $(this).attr("data_key", index + 1);
        }
    });

    $("#principles .principle :last").after(nextControl);

});