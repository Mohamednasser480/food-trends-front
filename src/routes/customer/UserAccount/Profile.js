import { Typography, Button } from "../../../components/UI";
import Form from "../../../components/UI/Form/Form";
import Input from "../../../components/UI/Form/Input";
import { useForm } from "react-hook-form";
import { selectUserData } from "../../../store/slices/auth";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const { name, email, image, mobile, address } = useSelector(selectUserData);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({});

  const updatePasswordRegister = {
    oldPassword: { ...register("oldPassword") },
    newPassword: { ...register("newPassword") },
    confirmPassword: {
      ...register("confirmPassword", {
        validate: (value) => {
          if (watch("newPassword") !== value) {
            return "Your passwords do no match";
          }
        },
      }),
    },
  };

  return (
    <div className="flex flex-col gap-y-2 p-5 text-center">
      <Typography component="h3" className="text-primary">
        account details
      </Typography>
      <img
        src={image}
        alt="Profile"
        className="h-32 w-32 self-center rounded-full"
      />
      <Typography component="subtitle2" className="self-center">
        {name}
      </Typography>
      <Typography component="subtitle2">contact info</Typography>
      <Typography component="body2">{mobile}</Typography>
      <Typography component="body2">{email}</Typography>
      {/* <Typography component="body2">address</Typography> */}
      {/* <Button variant="secondary" className="my-2 self-center">
          Edit profile
        </Button> */}
    </div>
  );
};

export default Profile;
