export const getDesaKelurahan = async (search) => {
  try {
    const response = await fetch(`/api/desa-kelurahan?search=${search}`);
    return await response.json();
  } catch (error) {
    console.error("Error saat ambil data:", error);
    throw error;
  }
};

export const getDaerah = async () => {
  try {
    const response = await fetch(`/api/kecamatan`);
    return await response.json();
  } catch (error) {
    console.error("Error saat ambil data:", error);
    throw error;
  }
};

export const storeDesaKelurahan = async (request) => {
  try {
    const response = await fetch("/api/desa-kelurahan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    return await response.json();
  } catch (error) {
    console.error("Error saat post data:", error);
    throw error;
  }
};

export const showDesaKelurahan = async (id) => {
  try {
    const response = await fetch(`/api/desa-kelurahan/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error saat ambil data:", error);
    throw error;
  }
};

  export const updateDesaKelurahan = async (request, id) => {
    try {
      const response = await fetch(`/api/desa-kelurahan/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      return await response.json();
    } catch (error) {
      console.error("Error saat update data:", error);
      throw error;
    }
  };

  export const deleteDesaKelurahan = async (id) => {
    try {
      const response = await fetch(`/api/desa-kelurahan/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Gagal fetch data");
      return await response.json();
    } catch (error) {
      console.error("Error saat delete data:", error);
      throw error;
    }
  };
