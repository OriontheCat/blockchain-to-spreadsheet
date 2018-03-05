var elements = document.getElementsByTagName('*');
var replace = {
    blockchain: 'multiple copies of a giant excel spreadsheet',
    cloud: 'butt'
};
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedTest;
            for(var key in replace) {
                replacedText = text.replace(new RegExp('/' + key + '/gi', "g"), replace[key]);
            }
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
