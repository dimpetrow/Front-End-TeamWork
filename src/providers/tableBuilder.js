function TableBuilder() {
    var htmlResult = [];
    htmlResult.push('<table class="info">');

    function AppendRow(row) {
        htmlResult.push('<tr>');

        row.result.forEach(function(element) {
            htmlResult.push('<td class="bordered shadowed table-cell">');
            htmlResult.push(element);
            htmlResult.push('</td>');
        });

        htmlResult.push('</tr>');
    };

    function BuildHtml() {
        htmlResult.push('</table>');
        return htmlResult.join('');
    };

    return {
        BuildHtml: BuildHtml,
        AppendRow: AppendRow
    };
};

function TableRow() {
    var colums = [];

    function AppendCol(str) {
        colums.push(str);
        return {
            result: colums,
            AppendCol: AppendCol
        };
    };

    return {
        result: colums,
        AppendCol: AppendCol
    };
};
