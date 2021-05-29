import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from '../page/home/Home';
import Form from '../page/form/Form';
import CoursesGrid from '../page/courses/CoursesGrid';
import Course from '../components/molecules/Course';
import NotFound from './NotFound';

import { homePage, formPage, coursesPage, course } from './Paths';


export default function RouterConfig() {
    return (
            <Switch>
                <Route exact path={homePage} >
                    <Home />
                </Route>
                <Route path={formPage}>
                    <Form />
                </Route>
                <Route path={coursesPage} >
                    <CoursesGrid />
                </Route>
                <Route path={course}>
                    <Course />
                </Route>
                <Route > 
                    <NotFound />
                </Route>
            </Switch>
    );
}
