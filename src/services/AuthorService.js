import React from "react"
import { Author } from "../entities/Author"


const fetchAuthors = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data.map(users => new Author(users)))
}

const fetchSingleAuthor = (authorId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then(res => res.json())
        .then(data => new Author(data))
}

export { fetchAuthors, fetchSingleAuthor };