-- this is a comment in SQL (yes, the space is needed!)
DROP TABLE IF EXISTS userBook;
DROP TABLE IF EXISTS visited;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS book;

CREATE TABLE book (
                         bookId BINARY(16) NOT NULL,
                         bookAuthor VARCHAR(256),
                         bookDescription VARCHAR(1024),
                         bookGenre VARCHAR(32),
                         bookImage VARCHAR(128),
                         bookIsbn VARCHAR(128),
                         bookPublisher VARCHAR(128),
                         bookTitle varchar(256),
                         PRIMARY KEY(bookId)
);
CREATE TABLE user (
                       userId BINARY(16) NOT NULL,
                       userActivationToken CHAR(32),
                       userEmail VARCHAR(128) NOT NULL,
                       userHash CHAR(97) NOT NULL,
                       userImage VARCHAR(128),
                       userName VARCHAR(64) NOT NULL,
                       unique (userName),
                       unique (userEmail),
                       PRIMARY KEY(userId)
);
CREATE TABLE visited (
                       visitedId BINARY(16) NOT NULL,
                       visitedBookId BINARY(16) NOT NULL,
                       visitedUserId BINARY(16) NOT NULL,
                       INDEX(visitedBookId),
                       INDEX (visitedUserId),
                       FOREIGN KEY(visitedBookId) REFERENCES book(bookId),
                       FOREIGN KEY(visitedUserId) REFERENCES user(userId),
                       PRIMARY KEY (visitedId)
);
CREATE TABLE userBook (
                        userBookBookId BINARY(16) NOT NULL,
                        userBookUserId BINARY(16) NOT NULL,
                        userBookCollection TINYINT NOT NULL,
                        userBookFavorite TINYINT NOT NULL,
                        INDEX(userBookBookId),
                        INDEX(userBookUserId),
                        FOREIGN KEY(userBookBookId) REFERENCES book(bookId),
                        FOREIGN KEY(userBookUserId) REFERENCES user(userId),
                        PRIMARY KEY(userBookBookId, userBookUserId)
);