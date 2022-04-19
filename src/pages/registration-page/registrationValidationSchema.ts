import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import * as yup from "yup";
import {passwordRegex} from "../../constants/regularExpressions";


async function checkUserDataForUniqueness(fieldForCheck: string, valueField: string | undefined) {
    const requestDataVerification = await query(collection(getFirestore(), "/Users"), where(fieldForCheck, "==", valueField));
    const docsWithMatchData = await getDocs(requestDataVerification);

    let isDataAlreadyRegistered = false;
    docsWithMatchData.forEach(doc => {
        isDataAlreadyRegistered = doc.data()[fieldForCheck] === valueField;
        if (isDataAlreadyRegistered) {
            isDataAlreadyRegistered = true;
            return;
        }
    });

    return !isDataAlreadyRegistered;
}

const schemaValidation = yup.object({
    email: yup.string()
        .required("Обязательное поле")
        .email("Введите корректный e-mail")
        .test("email", "Данный E-mail уже зарегистрирован", async (enteredEmail) => await checkUserDataForUniqueness("email", enteredEmail)),
    nickname: yup.string()
        .required("Обязательное поле")
        .min(3, "Никнейм должен быть больше 3 символов")
        .max(25, "Никнейм должен быть меньше 25 символов")
        .test("nickname", "Данный никнейм уже зарегистрирован", async (enteredNickname) => await checkUserDataForUniqueness("nickname", enteredNickname)),
    password: yup.string()
        .required("Обязательно поле")
        .matches(passwordRegex, "Пароль от 6 до 20 символов, должен содержит по крайней мере одну цифру, одну заглавную и одну строчную букву"),
    confirmPassword: yup.string()
        .required("Обязательно поле")
        .oneOf([yup.ref("password")], "Пароли не совпадают")
}).required();

export default schemaValidation;