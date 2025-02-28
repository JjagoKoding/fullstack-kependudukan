export const getProvinsi = async () => {
  try {
    const response = await fetch("/api/provinsi");
    if (!response.ok) throw new Error("Gagal fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error saat ambil data:", error);
    throw error;
  }
};
