const Info = ({ select }) => {
  return (
    <div className="col-12 col-md-4 p-4  border border-secondary rounded-1">
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center border border-secondary rounded-1 py-4 px-2 mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-file-earmark-excel"
            viewBox="0 0 16 16"
            color="green"
          >
            <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
        </div>

        <div className="col-5 border border-secondary rounded-1 p-4">
          <strong>{select?.name}</strong>
          <br />
          {select?.collectionName}
          <br />
          Size: {select?.sizeInMb} MB
          <br />
          No of files: {select?.files?.length}
          <br />
          Rows: {select?.rows}
        </div>
      </div>
      <div className="my-2">
        <strong>Data Files</strong>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <strong>File Name</strong>
            <strong>Send Date</strong>
          </li>
          {select?.files?.map((item) => (
            <li className="list-group-item d-flex justify-content-between">
              <span>{item?.fileName}</span>
              <span>{item?.sendDate}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
