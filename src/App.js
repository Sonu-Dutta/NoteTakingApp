import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/NoteApp/Header";
import CreateNote from "./components/NoteApp/CreateNote";
import Note from "./components/NoteApp/Note";
import Footer from "./components/NoteApp/Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
      return [note, ...prev];
    });
  };
  const onDelete = (id) => {
    setAddItem((old) =>
      old.filter((curr, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <div className=" text-center d-flex flex-column  pb-4">
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container d-md-flex flex-md-row flex-wrap mb-5 justify-content-center">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
