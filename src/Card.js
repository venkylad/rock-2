import { Folder, File } from "./icons/icons";

const Card = ({ item }) => {
  return (
    <div className="d-flex justify-content-between border border-secondary rounded-3 m-2 p-2">
      <div>
        <Folder />
      </div>
      <div>
        <h5>{item.name}</h5>
        {item.files.length} files, {item.sizeInMb}mb
      </div>
      <div>
        <File />
      </div>
    </div>
  );
};

export default Card;
