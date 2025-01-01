import { useSelector } from "react-redux";
import { Button, TextInput, Alert } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";

function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024;
    if (!file.type.startsWith("image/")) {
      setImageFileUploadError("Only images are allowed.");
      return;
    }
    if (file.size > maxSize) {
      setImageFileUploadError("File size should not exceed 5 MB.");
      return;
    }
    setImageFile(file);
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "trial_upload"); // Use your upload preset here
    console.log(formData);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dbld1potw/image/upload/`, // Replace with your Cloudinary cloud name
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total); // Calculate progress percentage
            setImageFileUploadProgress(percent); // Update progress state
          },
        }
      );

      setImageFileUrl(response.data.secure_url); // Get the image URL from Cloudinary response
      setImageFileUploading(false);
      setImageFileUploadProgress(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      setImageFileUploading(false);
    }
  };
  console.log(imageFileUrl);
  return (
    <div className="max-w-lg mx-auto w-full h-full flex flex-col justify-between gap-3 p-6">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={4}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${
                    imageFileUploadProgress / 100
                  })`,
                },
                text: {
                  fontSize: "13px",
                  fill: "#fff",
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-4 border-[lightgray] ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              "opacity-60"
            }`}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          defaultValue="password"
        />
        <Button
          type="submit"
          gradientDuoTone="cyanToBlue"
          outline
          disabled={imageFileUploading}
        >
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-4">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfile;
