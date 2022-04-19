import React from 'react';
import styles from "../../styles/form.module.scss";
import useUser from "../../hooks/useUser";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import classNames from "classnames";
import schemaValidation from "./registrationValidationSchema";
import {IRegistrationUserData} from "../../Interfaces/IRegistrationUserData";


const RegistrationPage: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IRegistrationUserData>({
        resolver: yupResolver(schemaValidation),
    });

    const {registerUser} = useUser();

    return (
        <div className="centered-container">
            <div className={styles["form"]}>
                <h1 className={styles["form__title"]}>Регистрация</h1>
                <form onSubmit={handleSubmit(registerUser)} className={styles["form__body"]}>
                    <div className={styles["form__body__item"]}>
                        <label htmlFor="email" className={styles["form__body__item__label"]}>E-mail</label>
                        <input
                            id="email"
                            type="text"
                            className={
                                errors?.email?.message ?
                                    classNames(styles["form__body__item__input"], styles["form__body__item__input_error"])
                                    :
                                    styles["form__body__item__input"]
                            }
                            {...register("email")}
                        />
                        {errors?.email?.message &&
                            <p className={styles["form__body__item__input_error-description"]}>{errors?.email?.message}</p>}
                    </div>

                    <div className={styles["form__body__item"]}>
                        <label className={styles["form__body__item__label"]}>Никнейм</label>
                        <input
                            type="text"
                            className={
                                errors?.nickname?.message ?
                                    classNames(styles["form__body__item__input"], styles["form__body__item__input_error"])
                                    :
                                    styles["form__body__item__input"]
                            }
                            {...register("nickname")}
                        />
                        {errors?.nickname?.message &&
                            <p className={styles["form__body__item__input_error-description"]}>{errors?.nickname?.message}</p>}
                    </div>

                    <div className={styles["form__body__item"]}>
                        <label className={styles["form__body__item__label"]}>Пароль</label>
                        <input
                            type="password"
                            className={
                                errors?.password?.message ?
                                    classNames(styles["form__body__item__input"], styles["form__body__item__input_error"])
                                    :
                                    styles["form__body__item__input"]
                            }
                            {...register("password")}
                        />
                        {errors?.password?.message &&
                            <p className={styles["form__body__item__input_error-description"]}>{errors?.password?.message}</p>}
                    </div>

                    <div className={styles["form__body__item"]}>
                        <label className={styles["form__body__item__label"]}>Пароль еще раз</label>
                        <input
                            type="password"
                            className={
                                errors?.confirmPassword?.message ?
                                    classNames(styles["form__body__item__input"], styles["form__body__item__input_error"])
                                    :
                                    styles["form__body__item__input"]
                            }
                            {...register("confirmPassword")}
                        />
                        {errors?.confirmPassword?.message &&
                            <p className={styles["form__body__item__input_error-description"]}>{errors?.confirmPassword?.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className={styles["form__body__submit-btn"]}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;