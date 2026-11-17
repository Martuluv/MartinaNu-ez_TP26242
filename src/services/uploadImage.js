const IMGBB_API_KEY = "628c40971f067de8a7763904c3896164";
const IMGBB_API_URL = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${IMGBB_API_URL}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
