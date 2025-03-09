import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

const Provinsi = lazy(() => import("./pages/Provinsi"));
const Login = lazy(() => import("./pages/Login"));
const KotaKabupaten = lazy(() => import("./pages/KotaKabupaten"));
const Kecamatan = lazy(() => import("./pages/Kecamatan"));
const DesaKelurahan = lazy(() => import("./pages/DesaKelurahan"));
const RT = lazy(() => import("./pages/RT"));
const RW = lazy(() => import("./pages/RW"));
const Pendidikan = lazy(() => import("./pages/Pendidikan"));
const Pekerjaan = lazy(() => import("./pages/Pekerjaan"));
const Penduduk = lazy(() => import("./pages/Penduduk"));
const Keluarga = lazy(() => import("./pages/Keluarga"));
const DetailKeluarga = lazy(() => import("./pages/DetailKeluarga"));
const Kematian = lazy(() => import("./pages/Kematian"));
const Kelahiran = lazy(() => import("./pages/Kelahiran"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path="auth" element={<GuestRoute />}>
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="admin" element={<ProtectedRoute />}>
            <Route path="provinsi" element={<Provinsi />} />
            <Route path="kota-kabupaten" element={<KotaKabupaten />} />
            <Route path="kecamatan" element={<Kecamatan />} />
            <Route path="desa-kelurahan" element={<DesaKelurahan />} />
            <Route path="rw" element={<RW />} />
            <Route path="rt" element={<RT />} />
            <Route path="pendidikan" element={<Pendidikan />} />
            <Route path="pekerjaan" element={<Pekerjaan />} />
            <Route path="penduduk" element={<Penduduk />} />
            <Route path="keluarga" element={<Keluarga />} />
            <Route path="keluarga/:id" element={<DetailKeluarga />} />
            <Route path="kematian" element={<Kematian />} />
            <Route path="kelahiran" element={<Kelahiran />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;