
export const uploadToCloudinary = async (file) => {
  const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset);
  // optional if your preset allows overriding folder:
  // formData.append("folder", "ads");

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
    method: "POST",
    body: formData,
  });
  console.log(res)

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Cloudinary upload failed: ${txt}`);
  }

  const data = await res.json();
  // data.secure_url = CDN URL to display
  // data.public_id  = needed later for deletion/transformations
  return { url: data.secure_url, publicId: data.public_id };
};

export const uploadManyToCloudinary = (files) =>
  Promise.all([...files].map(uploadToCloudinary));
