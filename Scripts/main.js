exports.activate = function() {}
exports.deactivate = function() {}

var get_unique = function(lines) {
    // Thanks to https://stackoverflow.com/a/11911532
    var u = {}, a = [];
    for (var i = 0, l = lines.length; i < l; i++) {
        if (!u.hasOwnProperty(lines[i])) {
            a.push(lines[i]);
            u[lines[i]] = 1
        }
    }
    return a;
};

nova.commands.register("remove-duplicate-lines.unique", (editor) => {
    const ranges = editor.selectedRanges;
    for (const r of ranges) {
        const text = editor.getTextInRange(r);
        const lines = text.split('\n');
        const uniqueLines = get_unique(lines);
        editor.edit((e) => {
            e.replace(range, uniqueLines.join('\n'));
        })
    }
});
