import docx4js from "docx4js"

function parseDocxFile() {
    const filePath = "posts.docx";

    // Load the docx file
    const docx = new docx.Document(filePath);

    // Get the text content of the docx file
    const text = docx.getBody().getText();

    console.log(text);
}
