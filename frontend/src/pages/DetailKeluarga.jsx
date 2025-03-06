import Layout from "../layouts/Layout";
import Table from "../components/Table/Table";
import { ColumnDetailKeluarga } from "../utils/utils";
import { useState, useEffect } from "react";
import Modal from "../components/Modal/Modal";
import PageHeader from "../components/PageHeader/PageHeader";
import Field from "../components/Field/Field";
import Toast from "../components/Toast/Toast";
import { getDetail } from "../services/DetailKeluargaRequest";
import { useParams } from "react-router-dom";

const DetailKeluarga = () => {
  const [detailKeluarga, setDetailKeluarga] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [selectedRt, setSelectedRt] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const { id } = useParams();
  const [NOKK, setNOKK] = useState("");
  const [NIK, setNIK] = useState("");
  const [statusHubungan, setStatusHubungan] = useState("");
  const [ayah, setAyah] = useState("");
  const [ibu, setIbu] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await getDetail(id);
      setDetailKeluarga(data.data);
    };
    loadData();
  }, [refresh]);

  //   const handleSearch = async (search) => {
  //     const data = await getRt(search);
  //     setRt(data.data);
  //   };

  const handleCreateModalOpen = () => {
    setError([]);
    setNOKK("");
    setNIK("");
    setStatusHubungan("");
    setAyah("");
    setIbu("");
    setCreateModalOpen(true);
  };

  //   const handleCreate = async () => {
  //     const res = await storeRt({
  //       rt: input,
  //     });
  //     if (res.status == 422) {
  //       setError(res.data);
  //     } else if (res.status == 200) {
  //       setCreateModalOpen(false);
  //       setRefresh((prev) => !prev);
  //     }
  //   };

  //   useEffect(() => {
  //     if (selectedRt) {
  //       setInput(selectedRt.rt || "");
  //     }
  //   }, [selectedRt]);

  //   const handleEdit = async (id) => {
  //     setSelectedRt([]);
  //     setError([]);
  //     setLoading(true);
  //     setTimeout(async () => {
  //       const data = await showRt(id);
  //       setSelectedRt(data.data);
  //       setEditModalOpen(true);
  //       setLoading(false);
  //     }, 450);
  //   };

  //   const handleUpdate = async () => {
  //     const res = await updateRt({ rt: input }, selectedRt.id_rt);
  //     if (res.status == 422) {
  //       setError(res.data);
  //     } else if (res.status == 200) {
  //       setEditModalOpen(false);
  //       setRefresh((prev) => !prev);
  //     }
  //   };

  //   const handleDeleteModal = async (id) => {
  //     setLoading(true);
  //     setTimeout(async () => {
  //       setSelectedRt([]);
  //       const data = await showRt(id);
  //       setSelectedRt(data.data);
  //       setDeleteModalOpen(true);
  //       setLoading(false);
  //     }, 450);
  //   };

  //   const handleDelete = async () => {
  //     await deleteRt(selectedRt.id_rt);
  //     setDeleteModalOpen(false);
  //     setRefresh((prev) => !prev);
  //   };

  return (
    <Layout>
      <PageHeader
        hasGroup={true}
        breadcrumbsLink={`Keluarga`}
        breadcrumbsPath={`Detail Keluarga ${
          detailKeluarga[0]?.nama ? "Pak " + detailKeluarga[0].nama : ""
        }`}
        heading={`Detail Keluarga ${
          detailKeluarga[0]?.nama ? "Pak " + detailKeluarga[0].nama : ""
        }`}
        navigateTo={`/admin/keluarga`}
        // handleEvent={handleCreateModalOpen}
        // handleSearch={(e) => handleSearch(e.target.value)}
      />
      <Layout.Main>
        <Table>
          <Table.Head cols={ColumnDetailKeluarga} />
          <Table.Body>
            {detailKeluarga.map((val, i) => (
              <tr key={val.NIK}>
                <td data-label="#" className="number-cell">
                  {(i += 1)}
                </td>
                <td data-label="NIK">{val.NIK}</td>
                <td data-label="Nama">{val.nama}</td>
                <td data-label="Gender">{val.gender}</td>
                <td data-label="Status Hubungan">{val.status_hubungan}</td>
                <td data-label="Ayah">{val.ayah}</td>
                <td data-label="Ibu">{val.ibu}</td>
                <td data-label="Actions" className="action-group">
                  <div className="selengkapnya" style={{ cursor: "pointer" }}>
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-user-screen"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" />
                      <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                    </svg>
                  </div>
                  <div
                    className="edit"
                    //   onClick={() => handleEdit(val.id_rt)}
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-edit"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                      <path d="M16 5l3 3" />
                    </svg>
                  </div>
                  <div
                    className="delete"
                    // onClick={() => handleDeleteModal(val.id_rt)}
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </Table.Body>
        </Table>
        {/* <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setCreateModalOpen(false)}
          setSubmit={handleCreate}
          modalTitle={`Create Rt`}
          modalDesc={`For create rt data.`}
        >
          <Field
            placeHolder={`Masukkan rt ...`}
            type={`text`}
            data={`create_rt`}
            contentLabel={`Rt`}
            setValue={input}
            setOnChange={(e) => setInput(e.target.value)}
            setError={error.rt}
          />
        </Modal>
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          setSubmit={handleUpdate}
          modalTitle={`Edit Rt`}
          modalDesc={`For edit rt data.`}
        >
          <Field
            placeHolder={`Masukkan rt ...`}
            type={`text`}
            data={`update_rt`}
            contentLabel={`Rt`}
            setValue={input}
            setOnChange={(e) => setInput(e.target.value)}
            setError={error.rt}
          />
        </Modal>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          setSubmit={handleDelete}
          modalTitle={`Delete Rt`}
          modalDesc={`Anda yakin ingin menghapus ${
            selectedRt.rt ? selectedRt.rt : ""
          }.`}
        /> */}
      </Layout.Main>
      {loading && (
        <Layout.Toast>
          <Toast type="loading" content="Loading ..." />
        </Layout.Toast>
      )}
    </Layout>
  );
};

export default DetailKeluarga;
