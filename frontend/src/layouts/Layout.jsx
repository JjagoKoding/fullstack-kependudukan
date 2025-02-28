import { useState, useEffect } from "react";
import AppBar from "../components/AppBar/AppBar";
import Sidebar from "../components/Sidebar/Sidebar";
import PageHeader from "../components/PageHeader/PageHeader";

export default function Layout({ children, hasGroup }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [petugas, setPetugas] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePetugas = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setPetugas(data);
    setLoading(false);
  };

  useEffect(() => {
    handlePetugas();
  }, []);

  return (
    <>
      {!loading ? (
        <>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <AppBar toggleSidebar={toggleSidebar} auth={petugas} />
        <main>
          <PageHeader hasGroup={hasGroup} />
          <section className="main-section">{children}</section>
        </main>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
}
