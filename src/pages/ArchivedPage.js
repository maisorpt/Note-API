import React from "react";
import Note from "../components/Note";
import NoteSearch from "../components/NoteSearch";
import {getArchivedNotes} from "../utils/api"
import { searchNotes } from "../utils";
import {useSearchParams} from 'react-router-dom';

function ArchivedPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [ keyword, setKeyword] = React.useState(() => {
    return searchParams.get('query') || ''
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getArchivedNotes().then(({data}) => {
      setNotes(data);
      setIsLoading(false);
    })
  }, []);

 function onSearch (keyword) {
    setKeyword(keyword);
    setSearchParams({query : keyword});
  }

  const filteredNotes = searchNotes(keyword, notes);

      return (
      <>
        <NoteSearch onSearch={onSearch}  defaultKeyword={keyword}/>
        {isLoading ? ( // tambahkan kondisi isLoading untuk menampilkan indikasi loading
        <p>Loading...</p>
      ) : (
        <Note notes={filteredNotes} keyword={keyword}></Note>
      )}
      </>
    );
}

export default ArchivedPage;