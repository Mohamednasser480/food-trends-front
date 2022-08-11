import { Typography, Button } from '../../UI';
import hhhh from '../../../assets/userprofile.jpg';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Form/Input';
import { useForm } from 'react-hook-form';
import { selectUserData } from '../../../store/slices/auth';
import { useSelector } from 'react-redux';

const VendorProfile = () => {
  const { name, email, mobile, storeName } = useSelector(selectUserData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const updatePasswordRegister = {
    oldPassword: { ...register('oldPassword') },
    newPassword: { ...register('newPassword') },
    confirmPassword: {
      ...register('confirmPassword', {
        validate: (value) => {
          if (watch('newPassword') !== value) {
            return 'Your passwords do no match';
          }
        },
      }),
    },
  };

  return (
    <div className=" flex flex-col bg-[#f8f9fa] ">
      <div className="my-5 flex max-w-screen-xl flex-col items-start justify-center gap-x-6 p-2 sm:p-10 lg:flex-row">
        <div className="mt-5 flex w-full flex-col rounded-xl bg-white p-5 shadow-xl lg:w-1/2">
          <Typography component="h3" className="p-4 text-primary">
            account details
          </Typography>
          <img
            src={hhhh}
            alt="Profile"
            className="mt-3 h-32 w-32 self-center rounded-full bg-red-400"
          />
          <Typography component="subtitle2" className="self-center">
            {name}
          </Typography>
          <Typography component="subtitle2">{storeName}</Typography>
          <Typography component="subtitle2">contact info</Typography>
          <Typography component="body2">{mobile}</Typography>
          <Typography component="body2">{email}</Typography>
          {/* <Typography component="body2">address</Typography> */}
          <Button variant="secondary" className="my-2 self-center">
            Edit profile
          </Button>
        </div>
        <div className="mt-5 flex h-full w-full flex-col rounded-xl bg-white p-5 shadow-xl lg:w-1/4">
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
        <div className="mt-5 flex w-full flex-col rounded-xl bg-white p-5 shadow-xl lg:w-1/4">
          <Typography component="h4" className="text-primary">
            change password
          </Typography>
          <Form onSubmit={handleSubmit((d) => console.log(d))}>
            <Input
              register={updatePasswordRegister.oldPassword}
              errors={errors}
              type="text"
              placeholder="Type here"
              label="Old Password"
              id="oldPassword"
            />
            <Input
              register={updatePasswordRegister.newPassword}
              errors={errors}
              type="text"
              placeholder="Type here"
              label="New Password"
              id="newPassword"
            />
            <Input
              register={updatePasswordRegister.confirmPassword}
              errors={errors}
              type="text"
              placeholder="Type here"
              label="confirm Password"
              id="confirmPassword"
            />

            <Button variant="secondary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default VendorProfile;
