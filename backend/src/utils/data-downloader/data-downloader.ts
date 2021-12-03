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
        const googleApikey = <string>process.env.GOOGLE_API_KEY
        try {
            const {data} = await axios.get("https://www.googleapis.com/books/v1/volumes?q=a&key=" + googleApikey)

            for(let volumeInfo of data) {
                //  volumeInfo.authors[], volumeInfo.description, volumeInfo.categories[], volumeInfo.imageLinks.thumbnail, volumeInfo.industryIdentifiers[], volumeInfo.publisher, volumeInfo.title
                const {authors, description, categories, imagesLinks, industyIdentifers, publisher, title}  = volumeInfo
                const book: Book = {
                    bookId: null,
                    bookAuthor: authors,
                    bookDescription: description,
                    bookGenre: categories,
                    bookImage: imagesLinks,
                    bookIsbn: industyIdentifers,
                    bookPublisher: publisher,
                    bookTitle: title

          /*  for(let result of data) {
                //  volumeInfo.authors[], volumeInfo.description, volumeInfo.categories[], volumeInfo.imageLinks.thumbnail, volumeInfo.industryIdentifiers[], volumeInfo.publisher, volumeInfo.title
                const {bookAuthor, bookDescription, bookGenre, bookImage, bookIsbn, bookPublisher, bookTitle}  = result
                const book: Book = {
                    bookId: null,
                    bookAuthor,
                    bookDescription,
                    bookGenre,
                    bookImage,
                    bookIsbn,
                    bookPublisher,
                    bookTitle*/
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
