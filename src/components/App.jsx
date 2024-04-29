import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm){
  return 
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
     {emojipedia.map((entry) => {
      return (
        <Entry
          id={entry.id}
          emoji={entry.emoji}
          name={entry.name}
          meaning={entry.meaning}
        />
      );
     })}
      </dl>
    </div>
  );
}

export default App;
