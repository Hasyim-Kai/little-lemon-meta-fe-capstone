import { IToast } from "@commons/utils/helper";
import { useForm } from "react-hook-form";

export default function IndexVm() {
    const { register, handleSubmit, setValue, formState: { errors }, reset, } = useForm({
        values: {
            name: "",
            email: "",
            datetime: "",
            table: "",
        },
    });

    const onSubmit = () => {
        IToast(`Reservation has been Made`, `Please check your email for the reservation receipt`)
        reset()
    };

    return {
        register, handleSubmit, setValue, errors, onSubmit,

    }
}