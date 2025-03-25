import Label from "./label"
import Input from "./Inputs"

const InputForm = (props) => {
    const { label, nama, type, placeholder } = props;
    return(
        <div className="mb-6">
            <Label htmlFor={nama}>{label}</Label>
            <Input name={nama} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;