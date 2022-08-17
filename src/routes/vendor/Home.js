import { Typography, Button } from "../../components/UI";
import { Input } from "../../components/UI/Form";
import Form from "../../components/UI/Form";
import { useForm } from "react-hook-form";
import { selectUserData } from "../../store/slices/auth";
import { useSelector } from "react-redux";

const Home = () => {
  const { name, email, mobile, storeName, image } = useSelector(selectUserData);
  const {
    register,
    handleSubmit,
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
    <div className="flex h-full flex-col items-center gap-y-10 text-center">
      <div className="flex h-full w-full flex-col gap-y-2 rounded-xl bg-white p-5 shadow-md">
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
        <Typography component="subtitle2">{storeName}</Typography>
        <Typography component="subtitle2">contact info</Typography>
        <Typography component="body2">{mobile}</Typography>
        <Typography component="body2">{email}</Typography>
        {/* <Typography component="body2">address</Typography> */}
        {/* <Button variant="secondary" className="my-2 self-center">
          Edit profile
        </Button> */}
      </div>
      {/* <div className="flex w-full gap-x-5">
        <div className="flex w-full flex-col rounded-xl bg-white p-5 shadow-md">
          <Typography component="h3" className="p-4 text-primary">
            Stats
          </Typography>

          <Typography component="h6" className="h-16">
            Total Average rate
          </Typography>
          <Typography component="h6" className="h-16">
            Monthly Transactions
          </Typography>

          <Button variant="secondary" className="my-3 self-center">
            See All Statistics
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
