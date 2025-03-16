import { useEffect, useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import "./Settings.css";
import AppBar from "../../../components/AppBar/AppBar";
import Field from "../../../components/Field/Field";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState([]);
  const [auth, setAuth] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [avatarURL, setAvatarURL] = useState(null);
  const [active, setActive] = useState("Profile");
  const navigate = useNavigate();

  async function Authorization() {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    avatar(data.id_petugas);
    setAuth(data);
  }

  const avatar = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/avatar/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setAvatarURL(url);
  };

  useEffect(() => {
    Authorization();
  }, [active]);

  useEffect(() => {
    if (auth) {
      setNama(auth?.nama_petugas || "");
      setUsername(auth?.username || "");
    }
  }, [auth]);

  return (
    <section id="settings">
      <div
        className="tombol-balik"
        onClick={() => navigate("/admin/provinsi", { replace: true })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3rem"
          height="1.3rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </div>

      <PageHeader
        hasGroup={false}
        breadcrumbsLink={`Back to Home`}
        breadcrumbsPath={`Settings`}
        heading={`Settings`}
      />
      <hr className="garis" />
      <div className="container-profile">
        <nav className="profile-side">
          <div className="wrapper">
            <a
              className={`settings-link ${
                active === "Profile" ? "active" : null
              }`}
              onClick={() => setActive("Profile")}
            >
              <span>Profile</span>
            </a>
            <a
              className={`settings-link ${
                active === "Avatar" ? "active" : null
              }`}
              onClick={() => setActive("Avatar")}
            >
              <span>Avatar</span>
            </a>
          </div>
        </nav>
        <aside className="utama">
          {active === "Profile" && (
            <>
              <div className="headernya">
                <h2 className="headnya">Profile</h2>
                <p className="deskripsi">Atur bagian profile anda disini.</p>
              </div>
              <form>
                <div className="isian">
                  <div className="form-row">
                    <Field
                      placeHolder={`Masukkan nama ...`}
                      type={`text`}
                      data={`nama`}
                      contentLabel={`Nama`}
                      setValue={nama}
                      setOnChange={(e) => setnama(e.target.value)}
                      setError={error?.nama}
                    />
                  </div>
                  <div className="form-row">
                    <Field
                      placeHolder={`Masukkan username ...`}
                      type={`text`}
                      data={`username`}
                      contentLabel={`Username`}
                      setValue={username}
                      setOnChange={(e) => setUsername(e.target.value)}
                      setError={error?.username}
                    />
                  </div>
                  <div className="form-row">
                    <Field
                      placeHolder={`Masukkan password lama ...`}
                      type={`text`}
                      data={`old_password`}
                      contentLabel={`Old Password`}
                      setValue={oldPassword}
                      setOnChange={(e) => setOldPassword(e.target.value)}
                      setError={error?.password}
                    />
                    <Field
                      placeHolder={`Masukkan password baru ...`}
                      type={`text`}
                      data={`new_password`}
                      contentLabel={`New Password`}
                      setValue={newPassword}
                      setOnChange={(e) => setNewPassword(e.target.value)}
                      setError={error?.password}
                    />
                  </div>
                </div>
                <div className="form-footer">
                  <button className="button primary">Change</button>
                </div>
              </form>
            </>
          )}
          {active === "Avatar" && (
            <>
              <div className="headernya">
                <h2 className="headnya">Avatar</h2>
                <p className="deskripsi">Atur avatar anda disini.</p>
                <div className="isian">
                  <div className="avatar-wrapper">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <form className="formAvatar">
                      <input type="file" id="inpAvatar" formEncType="multipart/form-data" />
                      <label htmlFor="inpAvatar" className="button secondary">Choose Avatar</label>
                      <button type="submit" className="button primary">Change Avatar</button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Settings;
