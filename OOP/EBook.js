import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("File format must be a non-empty string");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
        );
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}