import './App.css';
import Header from './Header';
import Card from './Cards';

const cursos = [
    {
        title: 'HTML beginner',
        teacher: 'Ayub',
        img: 'https://www.000webhost.com/blog/wp-content/uploads/sites/15/2019/02/html-for-beginners.png',
        price: 20,
    },
    {
        title: 'JS beginner',
        teacher: 'Isma',
        img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        price: 10,
    },
    {
        title: 'React desde cero',
        teacher: 'Isac',
        img: 'https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?size=626&ext=jpg',
        price: 40,
    },
    {
        title: 'React desde cero',
        teacher: 'Isac',
        img: 'https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?size=626&ext=jpg',
        price: 50,
    },
];

function App() {
    return (
        <>
            <Header title="Probando react" />
            <main>
                {cursos.map((curso, key) => (
                    <Card
                        key={key}
                        title={curso.title}
                        teacher={curso.teacher}
                        img={curso.img}
                        price={curso.price}
                    />
                ))}
            </main>
        </>
    );
}

export default App;
