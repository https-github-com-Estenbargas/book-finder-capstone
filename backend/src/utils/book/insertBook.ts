import {Book} from "../interfaces/Book"
import {connect} from "../database.utils";


export async function insertBook(book: Book) : Promise<string> {
    try {
        const mySQLConnection = await connect()
        const mySqlQuery = "INSERT INTO book(bookId, bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle) VALUES(UUID_TO_BIN(UUID()), :bookAuthor, :bookDescription, :bookGenre, :bookImage, :bookIsbn, :bookPublisher, :bookTitle)";
        await mySQLConnection.execute(mySqlQuery, book)
        return "Book Successfully Inserted"
    }catch (error) {
        throw error
    }
}