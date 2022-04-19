import {getAuth} from "firebase/auth";
import {doc, setDoc, getFirestore} from "firebase/firestore";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {UserActionTypes} from "../redux/actions/userActions";
import {useNavigate} from "react-router-dom";
import {DEVELOPMENT_POSTS} from "../constants/url";
import {IRegistrationUserData} from "../Interfaces/IRegistrationUserData";


const UseUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const login = () => {

    }

    const logout = () => {

    }

    const registerUser = async (newUserCredential: IRegistrationUserData) => {
        const resultNewUserCredential = {...newUserCredential};
        delete resultNewUserCredential["confirmPassword"];

        const userCredential = await createUserWithEmailAndPassword(getAuth(), resultNewUserCredential?.email, resultNewUserCredential?.password);
        if (userCredential.user) {
            await setDoc(doc(getFirestore(), "Users", userCredential.user.uid), resultNewUserCredential);
            dispatch({type: UserActionTypes.LOGIN_USER, userData: resultNewUserCredential});
            navigate({pathname: DEVELOPMENT_POSTS})
        }
    }

    const listenerAuthorizationState = () => {

    }

    return {login, logout, registerUser, listenerAuthorizationState};
};

export default UseUser;