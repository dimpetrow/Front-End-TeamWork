function TableBuilder()
{
    var htmlResult = [];
    htmlResult.push("<table>");

    function TableBuilder()
    {
    }

    function AppendRow(row)
    {
        htmlResult.push("<tr>");
        row.result.forEach(element => {
            htmlResult.push("<td>");
            htmlResult.push(element);
            htmlResult.push("</td>");
        });
        htmlResult.push("</tr>");
    }

    function BuildHtml()
    {
        htmlResult.push("</table>");
        return htmlResult.join("");
    }

    return{
        BuildHtml: BuildHtml,
        AppendRow: AppendRow
    }
}

function TableRow()
{    
    var colums = [];
    var instance = TableRow;

    function AppendCol(str)
    {
        colums.push(str); 
        return {
            result: colums,
            AppendCol: AppendCol
        };
    }

    return {
        result: colums,
        AppendCol: AppendCol
    };
}