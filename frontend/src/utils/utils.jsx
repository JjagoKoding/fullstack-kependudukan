import {
  DesaKelurahanIcon,
  HomeIcon,
  KecamatanIcon,
  KelahiranIcon,
  KeluargaIcon,
  KematianIcon,
  KotaKabupatenIcon,
  PekerjaanIcon,
  PendidikanIcon,
  PendudukIcon,
  ProvinsiIcon,
  RTIcon,
  RWIcon,
} from "./icons";

export const SidebarMenu = [
  {
    type: "sub-header",
    content: "HOME",
  },
  {
    type: "sub-menu",
    label: "Home",
    path: "/admin/home",
    icon: <HomeIcon />,
  },
  {
    type: "sub-header",
    content: "KEPENDUDUKAN",
  },
  {
    type: "sub-menu",
    label: "Penduduk",
    path: "/admin/penduduk",
    icon: <PendudukIcon />,
  },
  {
    type: "sub-menu",
    label: "Keluarga",
    path: "/admin/keluarga",
    icon: <KeluargaIcon />,
  },
  {
    type: "sub-menu",
    label: "Kematian",
    path: "/admin/kematian",
    icon: <KematianIcon />,
  },
  {
    type: "sub-menu",
    label: "Kelahiran",
    path: "/admin/kelahiran",
    icon: <KelahiranIcon />,
  },
  {
    type: "sub-header",
    content: "WILAYAH",
  },
  {
    type: "sub-menu",
    label: "Provinsi",
    path: "/admin/provinsi",
    icon: <ProvinsiIcon />,
  },
  {
    type: "sub-menu",
    label: "Kota & Kabupaten",
    path: "/admin/kota-kabupaten",
    icon: <KotaKabupatenIcon />,
  },
  {
    type: "sub-menu",
    label: "Kecamatan",
    path: "/admin/kecamatan",
    icon: <KecamatanIcon />,
  },
  {
    type: "sub-menu",
    label: "Desa & Kelurahan",
    path: "/admin/desa-kelurahan",
    icon: <DesaKelurahanIcon />,
  },
  {
    type: "sub-menu",
    label: "RW",
    path: "/admin/rw",
    icon: <RWIcon />,
  },
  {
    type: "sub-menu",
    label: "RT",
    path: "/admin/rt",
    icon: <RTIcon />,
  },
  {
    type: "sub-header",
    content: "RIWAYAT",
  },
  {
    type: "sub-menu",
    label: "Pendidikan",
    path: "/admin/pendidikan",
    icon: <PendidikanIcon />,
  },
  {
    type: "sub-menu",
    label: "Pekerjaan",
    path: "/admin/pekerjaan",
    icon: <PekerjaanIcon />,
  },
];

export const ColumnProvinsi = [
  {
    title: "#",
  },
  {
    title: "Nama Provinsi",
  },
];

export const ColumnKotaKabupaten = [
  {
    title: "#",
  },
  {
    title: "Kota & Kabupaten",
  },
  {
    title: "Provinsi",
  },
];

export const ColumnKecamatan = [
  {
    title: "#",
  },
  {
    title: "Nama Kecamatan",
  },
  {
    title: "Kota & Kabupaten",
  },
  {
    title: "Provinsi",
  },
];

export const ColumnDesaKelurahan = [
  {
    title: "#",
  },
  {
    title: "Kode Pos",
  },
  {
    title: "Desa & Kelurahan",
  },
  {
    title: "Kecamatan",
  },
  {
    title: "Kota & Kabupaten",
  },
  {
    title: "Provinsi",
  },
];

export const ColumnPendidikan = [
  {
    title: "#",
  },
  {
    title: "Keterangan",
  },
];

export const ColumnPekerjaan = [
  {
    title: "#",
  },
  {
    title: "Keterangan",
  },
];

export const ColumnRW = [
  {
    title: "#",
  },
  {
    title: "RW",
  },
];

export const ColumnRT = [
  {
    title: "#",
  },
  {
    title: "RT",
  },
];

export const ColumnPenduduk = [
  {
    title: "#",
  },
  {
    title: "NIK",
  },
  {
    title: "Nama",
  },
  {
    title: "Gender",
  },
  {
    title: "Alamat",
  },
];

export const ColumnKeluarga = [
  {
    title: "#",
  },
  {
    title: "No KK",
  },
  {
    title: "Alamat",
  },
  {
    title: "RT/RW",
  },
  {
    title: "Wilayah",
  },
];

export const ColumnDetailKeluarga = [
  {
    title: "#",
  },
  {
    title: "NIK",
  },
  {
    title: "Nama",
  },
  {
    title: "Gender",
  },
  {
    title: "Status Hubungan",
  },
  {
    title: "Ayah",
  },
  {
    title: "Ibu",
  },
];

export const ColumnKematian = [
  {
    title: "#",
  },
  {
    title: "NIK",
  },
  {
    title: "Nama",
  },
  {
    title: "Gender",
  },
  {
    title: "Agama",
  },
  {
    title: "Tanggal Meninggal",
  },
  {
    title: "Alasan",
  },
];

export const ColumnKelahiran= [
  {
    title: "#",
  },
  {
    title: "Nama",
  },
  {
    title: "Tanggal Lahir",
  },
  {
    title: "Tempat",
  },
  {
    title: "Ayah",
  },
  {
    title: "Ibu",
  },
];