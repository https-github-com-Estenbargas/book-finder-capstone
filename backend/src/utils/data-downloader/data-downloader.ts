import axios from "axios"
import {Book} from "../interfaces/Book"
import {insertBook} from "../book/insertBook";

function DataDownloader(): Promise<any> {
    async function main() {
        try {
                await downloadBooks()
        }catch (error) {
            console.log(error)
        }
    }
    return main()


    async function downloadBooks() {
        const key = <string>process.env.GOOGLE_API_KEY
        try {
            const {data} = await axios.get("https://www.googleapis.com/books/v1/volumes?q=a&key=" + key)

            for(let result of data) {
                const {bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle}  = result
                const book: Book = {
                    bookId: null,
                    bookAuthor,
                    bookDescription,
                    bookGenre,
                    bookImage,
                    bookIsbn,
                    bookPublisher,
                    bookTitle
                }
                console.log(await insertBook(book))
            }

        } catch (error) {
            throw error
        }

    }
}
DataDownloader().then(finished => {
    console.log("finished")
}).catch(error => {
    console.log(error)
})
