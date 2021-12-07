import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-3f21d-default-rtdb.europe-west1.firebasedatabase.app/'
})