# Shared-Doxygen
Custom doxygen setup using the [Doxygen Awesome](https://jothepro.github.io/doxygen-awesome-css/) CSS styling and additional extensions.

- [doxygen-mermaid](https://github.com/tahyx/doxygen-mermaid/tree/feature/md_mermaid_example) - [Mermaid](https://mermaid.js.org/) diagrams in MD files 

### Preconfigured Doxyfile
This package contains a Doxyfile that has all required properties preconfigured for the extensions to run properly.


```
# Doxygen Awesome settings:

GENERATE_TREEVIEW      = YES # optional. Also works without treeview
DISABLE_INDEX = NO
FULL_SIDEBAR = NO
HTML_EXTRA_STYLESHEET  = doxygen-awesome-css/doxygen-awesome.css
HTML_COLORSTYLE        = LIGHT # required with Doxygen >= 1.9.5

HTML_HEADER            = custom_doxygen/header.html
HTML_FOOTER            = custom_doxygen/footer.html

HTML_EXTRA_STYLESHEET  = custom_doxygen/doxygen-awesome.css

HTML_EXTRA_FILES       = custom_doxygen/doxygen-awesome-darkmode-toggle.js \
                         custom_doxygen/doxygen-awesome-fragment-copy-button.js \
                         custom_doxygen/doxygen-awesome-paragraph-link.js \
                         custom_doxygen/doxygen-awesome-interactive-toc.js \
                         custom_doxygen/doxygen-awesome-tabs.js
                         
HTML_COLORSTYLE        = LIGHT

# Extensions

FILTER_PATTERNS        = "*.md=bash ./custom_doxygen/doxygen_filter_mermaid.sh"

```

### Custom styling

Custom JavaScript `doxygen-sparrow.js` and css `doxygen-sparrow.css` to allow for some subtle adjustments to customise the theme and output a little bit further.
