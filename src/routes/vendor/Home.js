import { Typography, Button } from "../../components/UI";
import { Input } from "../../components/UI/Form";
import Form from "../../components/UI/Form";
import { useForm } from "react-hook-form";
import { selectUserData } from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import {
  imageProfileSelector,
  updateProfileImage,
} from "../../store/slices/vendor";

const Home = () => {
  const dispatch = useDispatch();
  const { name, email, mobile, storeName, image } = useSelector(selectUserData);
  const imageProfileStatus = useSelector(imageProfileSelector);
  const [profileImg, setProfileImg] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const saveImage = () => {
    const formData = new FormData();
    formData.append("image", profileImg.imgFile);
    dispatch(updateProfileImage(formData));
  };

  const onAddImage = (imgFile) => {
    setProfileImg({
      imgPrev: URL.createObjectURL(imgFile),
      imgFile: imgFile,
    });
  };

  return (
    <div className="flex h-full flex-col items-center gap-y-10 text-center">
      <div className="flex h-full w-full flex-col gap-y-2 rounded-xl bg-white p-5 shadow-md">
        <Typography component="h3" className="text-primary">
          account details
        </Typography>
        <div className="group relative mx-auto max-h-[11rem] max-w-[11rem] p-2">
          <img
            src={
              Object.keys(profileImg).length !== 0 ? profileImg.imgPrev : image
            }
            alt="Profile"
            className="h-32 w-32 self-center rounded-full"
          />

          <input
            id="dropzone-file"
            type="file"
            name="images"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              onAddImage(e.target.files[0]);
            }}
          />
          <label
            htmlFor="dropzone-file"
            className="absolute bottom-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-lime-700	 bg-error  text-white transition-all"
          >
            <BiPlus className="h-8 w-8" />
          </label>
        </div>
        <Typography component="subtitle2" className="self-center">
          {name}
        </Typography>
        <Typography component="subtitle2">{storeName}</Typography>
        <Typography component="subtitle2">contact info</Typography>
        <Typography component="body2">{mobile}</Typography>
        <Typography component="body2">{email}</Typography>
        {Object.keys(profileImg).length !== 0 ? (
          <Button
            variant="secondary"
            className="my-2 self-center"
            onClick={saveImage}
          >
            Save
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
