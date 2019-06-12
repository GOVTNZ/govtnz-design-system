(function($) {
    $(function() {
        if ($("textarea.wysiwyg").length) {
            $("textarea.wysiwyg").each(function() {
                var $t = $(this);
                $t.tinymce({
                    theme: "advanced",
                    theme_advanced_toolbar_location: "top",
                    theme_advanced_buttons1: $t.attr("data-buttons"),
                    theme_advanced_buttons2: "",
                    theme_advanced_buttons3: "",
                    theme_advanced_blockformats: $t.attr("data-blockformats"),
                    content_css: $t.attr("data-css")
                        ? $("base").attr("href") + $t.attr("data-css")
                        : null
                });
            });
        }

        if ($("select.chosen").length) {
            $("select.chosen").chosen({
                disable_search_threshold: $(this).attr("data-search-threshold")
            });
        }

        if ($("textarea[maxlength]").length) {
            $("textarea[maxlength]")
                .parent()
                .append("<p class='notes charsRemaining'>&nbsp;</p>");
            $("textarea[maxlength]").keyup(function() {
                var charText = $(this).attr("characters-remaining-text");
                if (!charText) charText = " characters remaining";
                var max = parseInt($(this).attr("maxlength"));
                if ($(this).val().length > max) {
                    $(this).val(
                        $(this)
                            .val()
                            .substr(0, $(this).attr("maxlength"))
                    );
                }
                $(this)
                    .parent()
                    .find(".charsRemaining")
                    .html(max - $(this).val().length + " " + charText);
            });
        }

        if ($(".field.g-buttongroup").length) {
            $(".field.g-buttongroup .btn")
                .click(function(e) {
                    e.preventDefault();
                    var $holder = $(this).closest(".field.g-buttonGroup");
                    $holder.find(".active").removeClass("active");
                    $(this).addClass("active");
                    $holder
                        .find(":hidden")
                        .val($(this).data("value"))
                        .trigger("change");
                })
                .filter(".active")
                .click();
        }
    });
})(jQuery);
