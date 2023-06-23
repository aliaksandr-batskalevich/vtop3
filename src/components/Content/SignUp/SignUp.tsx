import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import s from './SignUp.module.scss';
import {useSelector} from "react-redux";
import {getIsAuth, getIsNationalityInit, getNationalities} from "../../../bll/auth.selector";
import {useFormik} from "formik";
import {useAppDispatch} from "../../../utils/hooks";
import {getAllNationalities} from "../../../bll/auth.reducer";
import {v1} from "uuid";

type FormikValuesType = {
	firstName: string
	lastName: string
	nationality: string
	email: string
	dateOfBirth: string
	gender: string
	password: string
	confirmPassword: string
};

const initialValues: FormikValuesType = {
	firstName: '',
	lastName: '',
	nationality: '',
	email: '',
	dateOfBirth: '',
	gender: '',
	password: '',
	confirmPassword: '',
};

const onSubmit = (values: FormikValuesType) => {
	alert(JSON.stringify(values));
};

const validate = (values: FormikValuesType) => {

};

export const SignUp = () => {

	const isAuth = useSelector(getIsAuth);
	const isNationalityInit = useSelector(getIsNationalityInit);
	const nationalities = useSelector(getNationalities);

	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
	});

	const nationalityOptionsToRender = nationalities.map(n => <option key={v1()} value={n}>{n}</option>);

	useEffect(() => {
		if (!isNationalityInit) {
			const pr = dispatch(getAllNationalities());
		}
	}, []);

	return (isAuth
			? <Navigate to='/'/>
			: <div className={s.signUpWrapper}>
				<div className={s.textWrapper}>
					<h3>New user?</h3>
					<p>Use the form below to create your account.</p>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<div className={s.firstNameWrapper}>
						<label htmlFor="firstName">First name</label>
						<input
							id='firstName'
							{...formik.getFieldProps('firstName')}
						/>
					</div>
					<div className={s.lastNameWrapper}>
						<label htmlFor="lastName">Last name</label>
						<input
							id='lastName'
							{...formik.getFieldProps('lastName')}
						/>
					</div>
					<div className={s.nationalityWrapper}>
						<label htmlFor="nationality">Nationality</label>
						<select
							disabled={!isNationalityInit}
							id="nationality"
							{...formik.getFieldProps('nationality')}
						>
							<option value="" selected disabled hidden>{isNationalityInit ? 'Set your nationality' : 'Loading...'}</option>
							{nationalityOptionsToRender}
						</select>
					</div>
					<button type='submit'>Complete signup</button>
				</form>
			</div>
	);
};