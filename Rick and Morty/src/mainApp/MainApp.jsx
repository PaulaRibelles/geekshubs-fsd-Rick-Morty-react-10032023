import React from "react";
import {Routes, Route} from 'react-router-dom'

import { BarraNav } from "../Components/BarraNav";
import { Home } from "../Layout/Home/Home";
import { Character } from "../Layout/Character/Character"


export const MainApp = () => {
    return (
        <>
        <BarraNav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/character' element={<Character/>}/>
        </Routes>
        </>
    )
};