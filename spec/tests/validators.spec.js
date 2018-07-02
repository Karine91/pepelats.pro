import validators from '../../src/system/validators';

const key = 'reg';
const model = [
	{
		email: 'mail@mail.ru',
		password: '123333',
		repassword: '123333'
	},
	{
		email: 'mail@mail.ru',
		password: '',
		repassword: '123333'
	},
	{
		email: '',
		password: '123333',
		repassword: '123333'
	},
	{
		email: 'sdfsdf',
		password: '123333',
		repassword: '123333'
	},
	{
		email: 'mail@mail.ru',
		password: '123',
		repassword: '568'
	}
];

describe('Проверка модуля validaors:', () => {
	it('Авторизация: Все поля верно заполнены', () => {
		expect(validators(model[0]).isValid).toBe(true);
		expect(validators(model[0]).errors).toEqual({});
	});

	it('Авторизация: НЕ заполнено поле пароль', () => {
		expect(validators(model[1]).isValid).toBe(false);
		expect(validators(model[1]).errors.password).toBe('Поле пароль не заполнено');
	});

	it('Авторизация: НЕ заполнено поле email', () => {
		expect(validators(model[2]).isValid).toBe(false);
		expect(validators(model[2]).errors.email).toBe('НЕ верный формат почты');
	});

	it('Авторизация: НЕ правильный email', () => {
		expect(validators(model[3]).isValid).toBe(false);
		expect(validators(model[3]).errors.email).toBe('НЕ верный формат почты');
	});

	it('Авторизация: Пароли не совпададют', () => {
		expect(validators(model[4], key).isValid).toBe(false);
		expect(validators(model[4], key).errors.different).toBe('Пароли не совпадают');
	});

	it('Авторизация: Длина пароля менее 6 символов', () => {
		expect(validators(model[4], key).isValid).toBe(false);
		expect(validators(model[4], key).errors.password).toBe('Длина пароля должна быть не менее 6 символов');
	});
});

