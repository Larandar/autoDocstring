import {readFileSync} from "fs";

export function getTemplate(docstringFormat: string): string {
    switch (docstringFormat) {
        case "google":
            return getTemplateFile("google.mustache");
        case "numpy":
            return getTemplateFile("numpy.mustache");
        case "pep257":
            return getTemplateFile("pep257.mustache");
        case "sphinx":
            return getTemplateFile("sphinx.mustache");
        default:
            return getTemplateFile("default.mustache");
    }
}

// TODO: handle error case
export function getCustomTemplate(templateFilePath: string): string {
    return readFileSync(templateFilePath, "utf8");
}

function getTemplateFile(fileName: string): string {
    const filePath = __dirname + "/templates/" + fileName;
    return readFileSync(filePath, "utf8");
}
