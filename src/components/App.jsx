import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((notesEntry) => (
        <Note
          key={notesEntry.key}
          title={notesEntry.title}
          content={notesEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
