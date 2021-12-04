import axios from "axios"
import {Book} from "../interfaces/Book"
require('dotenv').config();
import {insertBook} from "../book/insertBook";
import {finished} from "stream";

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
        const googleApiKey = process.env.GOOGLE_API_KEY

        try {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=t&projection=full&key=${googleApiKey}`)

             data.items.map(async (item: { volumeInfo: any; }) => {

               /* console.log(item.volumeInfo)*/
                //  volumeInfo.authors[], volumeInfo.description, volumeInfo.categories[], volumeInfo.imageLinks.thumbnail, volumeInfo.industryIdentifiers[], volumeInfo.publisher, volumeInfo.title
                /*const {authors, description, categories, imagesLinks, industyIdentifers, publisher, title}  = volumeInfo*/
                /*console.log(authors, description, categories, imagesLinks, industyIdentifers, publisher, title)*/
                let book: Book = {
                    bookId: null,
                    bookAuthor: item.volumeInfo.authors,
                    bookDescription: item.volumeInfo.publisher,
                    bookGenre: item.volumeInfo.categories,
                    bookImage: item.volumeInfo.imageLinks.thumbnail,
                    bookIsbn: item.volumeInfo.industryIdentifiers[0].identifier,
                    bookPublisher: item.volumeInfo.publisher,
                    bookTitle: item.volumeInfo.title
                }
                if(book.bookAuthor === undefined) {
                    book.bookAuthor = null
                }if (book.bookDescription === undefined) {
                    book.bookDescription = null
                }if (book.bookGenre === undefined) {
                    book.bookGenre = null
                }if (book.bookImage === undefined){
                    book.bookImage = null
                }if (book.bookIsbn === undefined){
                    book.bookIsbn = null
                }if (book.bookPublisher === undefined){
                    book.bookPublisher = null
                }if (book.bookTitle === undefined){
                    book.bookTitle = null
                }
                console.log(book)
                console.log(await insertBook(book))
            })

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
