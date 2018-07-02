import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (model, key = '') => {
	const errors = {};

	if (!Validator.isEmail(model.email)) {
		errors.email = 'НЕ верный формат почты';
	}
	if (isEmpty(model.password)) {
		errors.password = 'Поле пароль не заполнено';
	}
	if (!isEmpty(model.password) && !Validator.isLength(model.password, { min: 6, max: undefined })) {
		errors.password = 'Длина пароля должна быть не менее 6 символов';
	}
	if (key === 'reg') {
		if (isEmpty(model.repassword)) {
			errors.repassword = 'Поле re-password не заполнено';
		}
		if (model.password !== model.repassword) {
			errors.different = 'Пароли не совпадают';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

