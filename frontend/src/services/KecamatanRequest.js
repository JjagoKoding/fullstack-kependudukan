export const getKecamatan = async (search) => {
    try {
      const response = await fetch(`/api/kecamatan?search=${search}`);
      return await response.json();
    } catch (error) {
      console.error("Error saat ambil data:", error);
      throw error;
    }
  };

  export const getKotaKabupaten = async () => {
    try {
      const response = await fetch(`/api/kota-kabupaten`);
      return await response.json();
    } catch (error) {
      console.error("Error saat ambil data:", error);
      throw error;
    }
  };