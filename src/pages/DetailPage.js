import React, { useEffect } from "react";
import NoteDetail from "../components/NoteDetail";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/api";
import { getNote } from "../utils/api";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
    getNote(id).then(({ data }) => {
      setNote(data);
      setIsLoading(false);
    });
  }, [id]);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }

  async function onArchiveHandler(id) {
    if (note.archived) {
      await unarchiveNote(id);
      navigate("/");
    } else {
      await archiveNote(id);
      navigate("/archived");
    }
  }

  if (note === null) {
    return <p>Catatan tidak ada</p>;
  }

  return (
    <div className="note-item__container__content_detail">
      {isLoading ? ( // tambahkan kondisi isLoading untuk menampilkan indikasi loading
        <p>Loading...</p>
      ) : (
        <NoteDetail
        notes={note}
        onDelete={() => onDeleteHandler(id)}
        onArchive={() => onArchiveHandler(id)}
      />
      )}
    </div>
  );
}

export default DetailPage;
