$(document).ready(function(){

    var interfaceRegex = "I[A-Z][a-zA-Z0-1]+";

    var icons = $("div.directory .icona");
    icons.each(function( index ) {
        var icon = $(this).find(".icon");
        var nameLink = $(this).next("a");
        if(nameLink != null)
        {
            var name = nameLink.text();
            var interfaceMatch = name.match(interfaceRegex);
            if(interfaceMatch)
            {
                icon.html("I");
            }
        }


        var textContent = icon.text();
        if (textContent === 'C') {
            icon.addClass('icon-class');
        } else if (textContent === 'N') {
            icon.addClass('icon-namespace');
        } else if (textContent === "I")
        {
            icon.addClass('icon-interface');
        }
    });


    var referenceRegex = /\s(\w+\s)+Reference$/;
    $('.headertitle .title').each(function() {
        var textContent = $(this).text();

        // Check if the text matches the referenceRegex
        var match = textContent.match(referenceRegex);

        if (match) {
            // Get the matched suffix
            var matchedSuffix = match[0];

            // Remove the matched suffix to get the full TYPE_NAME
            var typeName = textContent.slice(0, -matchedSuffix.length).trim();
            
            // Find the last dot, which separates the namespace from the type name
            var lastDotIndex = typeName.lastIndexOf('.');
            
            if (lastDotIndex !== -1) {
                // Separate the namespace and the type name
                var namespace = typeName.slice(0, lastDotIndex);
                var type = typeName.slice(lastDotIndex + 1);
                
                // Wrap the namespace in a span with class "package"
                var wrappedNamespace = '<span class="package">' + namespace + '</span>';
                
                // Set the new HTML content
                $(this).html(wrappedNamespace + type + matchedSuffix);
            }
        }
    });

});