import './App.css';
import Banner from './Banner';
import Form from './Form';
import CoursesGrid from './CoursesGrid';
import Course from './Course';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => (
                        <Banner title="Probando react" />
                    )}
                />
                <Route path="/Form" component={Form} />
                <Route
                    path="/Courses"
                    exact
                    component={CoursesGrid}
                />
                <Route path="/Courses/:id" exact component={Course} />
                <Route component={() => <h2>ERROR 404</h2>} />
            </Switch>
        </Router>
    );
}

export default App;
