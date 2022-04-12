import { useState } from "react";
import "./App.css";

function App() {
  const [allPhoto, setAllPhoto] = useState([]);
  let allFileList = [];

  const fileSelectedHandler = (e) => {
    let files = e.target.files;
    let filesArray = [].slice.call(files);
    allFileList.push(...filesArray);
    setAllPhoto((prevImage) => prevImage.concat(allFileList));
  };

  const handleDelete = (item) => {
    setAllPhoto(
      allPhoto.filter((element) => element.lastModified !== item.lastModified)
    );
  };

  return (
    <div className="App">
      <input
        type="file"
        multiple
        className="choose-file"
        onChange={(e) => fileSelectedHandler(e)}
      />
      {allPhoto.reverse().map((each, i) => {
        return (
          <div className="items">
            <div key={each.lastModified} className="file">
              {each.name}
            </div>
            <button
              style={{
                border: "none",
                color: "red",
                background: "none",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(each)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
