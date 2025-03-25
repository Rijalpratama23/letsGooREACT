import InputForm from "../Elements/input/main.jsx";
import Button from "../Elements/Button"

const FormLogin = () => {
    return(
        <form action="" className="mb-11">
                <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" required/>

                <InputForm label="Password" type="password" placeholder="******" name="password" required/>

                <Button classname ="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin;