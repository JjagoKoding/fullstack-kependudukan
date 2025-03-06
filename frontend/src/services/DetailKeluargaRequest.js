export const getDetail = async (id, search = null) => {
    try {
      const response = await fetch(`/api/detail-keluarga?id=${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error saat ambil data:", error);
      throw error;
    }
  };
  
  export const storeDetail = async (request) => {
    try {
      const response = await fetch("/api/rt", {
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
  
  export const showDetail = async (id) => {
    try {
      const response = await fetch(`/api/rt/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error saat ambil data:", error);
      throw error;
    }
  };
  
  export const updateDetail = async (request, id) => {
    try {
      const response = await fetch(`/api/rt/${id}`, {
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
  
  export const deleteDetail = async (id) => {
    try {
      const response = await fetch(`/api/rt/${id}`, {
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
  