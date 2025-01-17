$(function() {
    // '#hooks dl dt' to be removed when 1.7 doc is deleted
    const allItems = $('#hooks tr, #hookFilter ~ dl dt');

    const escapeRegExp = function(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const displayAll = function() {
        allItems.each(function() {
        const $item = $(this);

        if ($item.is(':hidden')) {
            $item.show();

            // to be removed when 1.7 doc is deleted
            $item.next('dd').show();
        }
        });
    };

    /* search must be bi-directional : 
        - we can type a regex pattern and match against the hook name, 
        - or our search query can be matched against a dynamic hook name
        This function is made for this scenario : 
        we replace the dynamic parts of the hookname with a regex pattern. 
    */
    const matchSearchWithDynamicHookName = function(search, hookName){
        const regex = new RegExp("\<(.*)\>", 'i');
        const regexedHookName = hookName.replace(regex, "(.*)");
        if(regexedHookName != hookName){
            const hookRegex = new RegExp(regexedHookName, 'i');
            return search.match(hookRegex);
        }
        return false;
    }

    const filterList = function(search) {

        /* will match hook names as functions in modules */
        if(search.substring(0, 4).toLowerCase() == "hook"){
            search = search.substring(4);
        }

        let count = 0;
        const regex = new RegExp(escapeRegExp(search), 'i');
        
        allItems.each(function() {
            const $item = $(this);
            // text is the hookname on 1.7, and all of the table row content on 8 (with location, type, ...)
            const text = $item.text();
            // we need to detect if we are on the 1.7 or 8 hook list - to be removed when 1.7 doc is deleted
            const hookName = $item.find('a.hookTitle').length > 0 ? $item.find('a.hookTitle').text() : text;
            const matchesSearch = Boolean(matchSearchWithDynamicHookName(search, hookName) || text.match(regex));
            $item.toggle(matchesSearch);

            // to be removed when 1.7 doc is deleted
            const $sibling = $item.next('dd');
            $sibling.toggle(matchesSearch);

            if (matchesSearch) {
                count += 1;
            }
        });

        $('#hookFilter .empty').toggleClass('show', count === 0);
    };

    $('#hookFilter input[type="text"]').on('input', function(e) {
        const searchText = $(this)
            .val()
            .replace(/^\s+|\s+$/, '');

        if (searchText.length > 0) {
            filterList(searchText);
        } else {
            $('#hookFilter .empty').removeClass('show');
            displayAll();
        }
    });
});
