import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import s from './Content.module.scss';
import Home from "./Home/Home";
import {SignUp} from "./SignUp/SignUp";
import {ErrorPage} from "./ErrorPage/ErrorPage";

export const Content = () => {
	return (
		<div className={s.contentWrapper}>
			<Routes>
				<Route path='/' element={<Navigate to='/home'/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path='/sign-up' element={<SignUp/>}/>
				<Route path='/error' element={<ErrorPage/>}/>
				<Route path='/*' element={<Navigate to='/error'/>}/>
			</Routes>
		</div>
	);
};