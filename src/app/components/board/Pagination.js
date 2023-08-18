import styled from "styled-components";

const Pagination = ({ total, pageLimit, page, setPage }) => {
  const numPages = Math.ceil(total / pageLimit);

  return (
    <div className="flex item-center justify-center">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </div>
  );
};

const Button = styled.button`
  padding: 10px;
  border: none;
  color: #a6a6a6;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    cursor: revert;
  }

  &[aria-current] {
    color: black;
    font-weight: 600;
    cursor: revert;
  }
`;

export default Pagination;
