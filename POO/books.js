// @ts-check

import yup from 'yup';

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];

// BEGIN (write your solution here)
const getInvalidBooks = (books) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive().optional(),
        link: yup.string().url().min(1),
        genre: yup.string().optional().oneOf(genres)
    })
    const outcome = books.map((book) => {
        try {
            schema.validateSync(book);

        } catch {
            return book
        }
        return null
    })

    return outcome.filter(item => item !== null);

}
// END
const books = [
    { name: 'libro', author: 'autor' },
    { author: 'autor 2' },
];

console.log(getInvalidBooks(books));

// ---------------------------ALTERNATRIVA---------------------------

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     author: yup.string().required(),
//     pagesCount: yup.number().positive().optional(),
//     link: yup.string().url().min(1),
//     genre: yup.string().optional().oneOf(genres),
// });

// const getInvalidBooks = (books) => {
//     // Usamos filter directamente: si lanza error, es inválido (true) y se queda
//     return books.filter((book) => {
//         try {
//             schema.validateSync(book);
//             return false; // Es válido, lo filtramos (fuera de la lista de inválidos)
//         } catch {
//             return true;  // Es inválido, se queda en la lista de resultados
//         }
//     });
// };

// export default getInvalidBooks;