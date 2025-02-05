import React from 'react';
import s from './SideBar.module.scss';
import {useLocation} from "react-router-dom";
import {getPageTitle} from "../../utils/functions";



export const SideBar = () => {

	const location = useLocation();
	const pageTitle = getPageTitle(location.pathname);

	return (
		<div className={s.sideBarWrapper}>
			{pageTitle}
		</div>
	);
};