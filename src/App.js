import { useEffect, useState } from "react";
import Card from "./Card";
import { files } from "./data";
import Info from "./Info";
import "./styles.css";

export default function App() {
  const [select, setSelect] = useState(null);

  useEffect(() => {
    setSelect(files[0].connection[0]);
  }, []);

  const handleSelect = (i, j) => {
    const collection = files?.filter((item) => item.id === i)[0];
    const folder = collection?.connection?.filter((item) => item.id === j)[0];
    setSelect(folder);
  };

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div className="row">
        <div className="col-12 col-md-8">
          {files.map((file, i) => (
            <div className="row my-4" key={i}>
              <h5>{file.collectionName}</h5>
              {file.connection.map((item, j) => (
                <div
                  role="button"
                  className="col-12 col-md-6 col-lg-4 cursor-pointer"
                  key={j}
                  onClick={() => handleSelect(file?.id, item?.id)}
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <Info select={select} />
      </div>
    </div>
  );
}
