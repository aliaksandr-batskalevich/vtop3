import React from 'react';
import s from './Home.module.scss';
import {withAuthRedirect} from "../../commons/HOCs/withAuthRedirect";

const Home = () => {



	return (
		<div className={s.homeWrapper}>
			Home
		</div>
	);
};

export default withAuthRedirect(Home);