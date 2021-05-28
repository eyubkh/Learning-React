import React from 'react';
const coursesDB = [
    {
      "id": 1,
      "title": "React desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price": 40,
      "teacher": "Beto Quiroga"
    },
    {
      "id": 2,
      "title": "Drupal desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/ca1912b1-6a3f-4a47-8731-a619a4335b50.png",
      "price": 30,
      "teacher": "Beto Quiroga"
    },
    {
      "id": 3,
      "title": "Go desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/bd8b449c-d796-440e-9b2d-d9c7cbd79862.png",
      "price": 50,
      "teacher": "Alexys Lozada"
    },
    {
      "id": 4,
      "title": "HTML desde cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
      "price": 10,
      "teacher": "Alvaro Felipe"
    }
]

export default function Course({match}) {
    console.log(match)
    const currentCourse = coursesDB.filter( item => item.id === parseInt(match.params.id));
    return currentCourse[0]
    ? (
        <>
        <h1>{currentCourse[0].title}</h1>
        <img src={currentCourse[0].image} alt={currentCourse[0].title} />
        <p>Teacher : {currentCourse[0].teacher}</p>
        </>
    )
    : <h1>Page not find</h1> 


};

