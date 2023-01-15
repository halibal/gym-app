import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExerciseDetail, Home } from '../pages';
import VisitorTemplate from '../template/visitor-template';

const CustomRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={
                        <VisitorTemplate>
                            <Home />
                        </VisitorTemplate>
                    }
                    />
                    <Route path='exercise/:id' element={
                        <VisitorTemplate>
                            <ExerciseDetail />
                        </VisitorTemplate>
                    }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes