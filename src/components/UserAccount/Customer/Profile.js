import { Typography, Button } from '../../UI';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Form/Input';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../store/slices/auth';

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const { name, image, email, mobile, address } = useSelector(selectUserData);

  console.log(address);
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
    <div className="flex flex-col bg-[#f8f9fa] p-10">
      <div className="flex justify-end">
        <Button variant="secondary" className="m-1">
          Logout
        </Button>
      </div>

      {/** middle row that holds all data */}
      <div className="flex max-w-screen-xl items-start justify-center gap-x-6">
        <div className="mt-5 flex  h-full w-1/4 flex-col rounded-xl bg-white p-5 shadow-xl">
          <Typography component="h4" className="text-primary">
            saved address
          </Typography>

          {address ? (
            <div>
              <Typography component="body2" className="h-16">
                Line 1
              </Typography>
              <Typography component="body2" className="h-16">
                Line 2
              </Typography>
              <Typography component="body2" className="h-16">
                City{' '}
              </Typography>
              <Typography component="body2" className="h-16">
                Governate
              </Typography>

              <Button variant="user-account" className="my-3 self-center">
                Edit Address
              </Button>
            </div>
          ) : (
            <>
              <Typography component="body2" className="h-16">
                you do not have a saved address
              </Typography>
              <Button variant="user-account" className="my-3 self-center">
                add address
              </Button>
            </>
          )}
        </div>
        <div className="mt-5 flex w-1/2 flex-col rounded-xl bg-white p-5 shadow-xl">
          <Typography component="h4" className="text-primary">
            account details
          </Typography>

          <img src={image} alt="Profile" className="h-32 w-32 self-center rounded-full" />

          <Typography component="subtitle2" className="text-center">
            {name}
          </Typography>
          <Typography component="subtitle2">contact info</Typography>
          <div className="flex items-center">
            <Typography component="subtitle2" className="mr-3">
              Mobile Number:
            </Typography>
            <Typography component="subtitle2" className="font-light text-red-500">
              {mobile}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography component="subtitle2" className="mr-3">
              email:
            </Typography>
            <Typography component="subtitle2" className="font-light text-red-500">
              {email}
            </Typography>
          </div>

          <Typography component="subtitle2">Payment info</Typography>
          <Button variant="secondary" className="my-3 w-2/5 self-center">
            Edit profile
          </Button>
        </div>

        <div className="mt-5 flex w-1/4 flex-col rounded-xl bg-white p-5 shadow-xl">
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

            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Profile;
