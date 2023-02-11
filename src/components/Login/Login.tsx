import { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setStateForms } from '../../redux/slice';
import { CardType, InitialStateType } from '../../types/types';
import styles from './Login.module.css';
import LoginCards from './LoginCard/LoginCards';

const Login: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const stateForms = useAppSelector((state: InitialStateType) => state.stateForms);

  const [card, setCard] = useState({
    _id: '',
    firstName: '',
    surname: '',
    birthday: '',
    race: '',
    person: 'Warrior',
    gender: 'Female',
    img: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted, isValid, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<CardType>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'img' && e.target.files) {
      value = URL.createObjectURL(e.target.files[0]);
    }

    if (name === 'gender') {
      value = value === '1' ? 'Female' : 'Male';
    }
    setCard({ ...card, [name]: value });
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const name = e.target.name;

    setCard({ ...card, [name]: e.target.value });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  });

  const onSubmit = () => {
    const newCard: CardType = {
      _id: new Date().getTime().toString(),
      firstName: card.firstName,
      surname: card.surname,
      birthday: card.birthday,
      race: card.race,
      person: card.person,
      gender: card.gender,
      img: card.img,
    };

    const copyCards = Object.assign([], stateForms);
    copyCards.push(newCard);
    dispatch(setStateForms(copyCards));
    setCard({
      _id: '',
      firstName: '',
      surname: '',
      birthday: '',
      race: '',
      person: 'Warrior',
      gender: 'Female',
      img: '',
    });
  };

  return (
    <main className={styles.login__container}>
      <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.login__input}
          type="text"
          placeholder="Your name"
          autoComplete="off"
          {...register('firstName', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Please use only English letters.',
            },
            minLength: {
              value: 3,
              message: 'The name must be at least 2 letters',
            },
            onChange: onChange,
          })}
        />
        <span className={styles.login__error}>{errors.firstName?.message}</span>

        <input
          className={styles.login__input}
          type="text"
          placeholder="Your surname"
          autoComplete="off"
          {...register('surname', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Please use only English letters.',
            },
            minLength: {
              value: 7,
              message: 'The surname must be at least 6 letters.',
            },
            onChange: onChange,
          })}
        />
        <span className={styles.login__error}>{errors.surname?.message}</span>

        <label className={styles.login__label_date}>
          Your birthday:
          <span className={styles.login__date_button}>{watch('birthday')}</span>
          <input
            className={styles.login__date}
            type="date"
            data-testid="birthday"
            {...register('birthday', {
              required: 'This field is required',
              validate: {
                value: (value) =>
                  new Date(value.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3')) < new Date() ||
                  'Have you not been born yet?',
              },
              onChange: onChange,
            })}
          />
        </label>
        <span className={styles.login__error}>{errors.birthday?.message}</span>

        <label className={styles.login__label}>
          Your race:
          <select
            className={styles.login__select}
            data-testid="race"
            {...register('race', { required: 'This field is required', onChange: onChangeSelect })}
          >
            <option value="" hidden>
              Select your race
            </option>
            <option className={styles.login__select_option} value="human">
              Human
            </option>
            <option className={styles.login__select_option} value="elf">
              Elf
            </option>
            <option className={styles.login__select_option} value="dwarf">
              Dwarf
            </option>
            <option className={styles.login__select_option} value="hobbit">
              Hobbit
            </option>
          </select>
        </label>
        <span className={styles.login__error}>{errors.race?.message}</span>

        <fieldset className={styles.login__fieldset}>
          <legend className={styles.login__legend}>Who are you?</legend>
          <label className={styles.login__label}>
            Warrior
            <input
              className={styles.login__input_radio}
              type="radio"
              name="person"
              value="Warrior"
              defaultChecked
              onChange={onChange}
            />
            <span className={styles.login__radio_span}></span>
          </label>
          <label className={styles.login__label}>
            Wizard
            <input
              className={styles.login__input_radio}
              type="radio"
              name="person"
              value="Wizard"
              onChange={onChange}
            />
            <span className={styles.login__radio_span}></span>
          </label>
          <label className={styles.login__label}>
            Paladin
            <input
              className={styles.login__input_radio}
              type="radio"
              name="person"
              value="Paladin"
              onChange={onChange}
            />
            <span className={styles.login__radio_span}></span>
          </label>
        </fieldset>
        <span className={styles.login__error}>{errors.person?.message}</span>

        <div className={styles.login__range}>
          <label className={styles.login__range_label}>Your gender status:</label>
          <div className={styles.login__range_wrapper}>
            <input
              className={styles.login__range_input}
              type="range"
              min="0"
              max="1"
              step="1"
              list="tickmarks"
              name="gender"
              onChange={onChange}
            />
            <datalist className={styles.login__range_datalist} id="tickmarks">
              <option className={styles.login__range_option} value="0" label="Male" />
              <option className={styles.login__range_option} value="1" label="Female" />
            </datalist>
          </div>
        </div>
        <span className={styles.login__error}>{errors.gender?.message}</span>

        <label className={styles.login__label_file}>
          Your avatar
          <input
            className={styles.login__file_input}
            type="file"
            data-testid="img"
            accept="image/*"
            {...register('img', { required: 'This field is required', onChange: onChange })}
          />
          <img className={styles.login__file_img} src={card.img} />
        </label>
        <span className={styles.login__error}>{errors.img?.message}</span>
        <button
          className={styles.login__button}
          type="submit"
          disabled={(!isDirty && !isSubmitted) || (isSubmitted && !isValid)}
        >
          Submit
        </button>
      </form>
      <ul className={styles.cards__list}>
        {stateForms.map((el: CardType) => (
          <LoginCards key={el._id} card={el} />
        ))}
      </ul>
    </main>
  );
};

export default Login;
