import styled from "styled-components";

export const StyledPaginatedItems = styled.div`
  width: 100%;
  background: #fffae9;
  .pagination_block {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media(max-width:430px){
      flex-direction: column;
      padding: 5px;
    }
  }
  ul {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    display: flex;
    list-style: none;
    @media(max-width:430px){
      flex-wrap: wrap;
      font-size: 22px;
      line-height: 26px;
    }
  }
  .pagination_block p {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #666666;
    padding-top: 18px;
    @media(max-width:430px){
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      padding-top: 0;
    }
  }
  li {
    padding: 18px;
    @media(max-width:430px){
      padding: 15px;
    }
  }
  .page-link:hover {
    text-decoration: underline;
  }
  .page-link-next:hover,
  .page-link-prev:hover,
  .page-link:hover,
  .break-link:hover {
    cursor: pointer;
    font-weight: 500;
    color: #ff9942;
  }
  .page-item.active {
    color: #ff5c00;
    font-weight: 700;
  }
  .disable {
    color: rgba(0, 0, 0, 0.3);
  }
`;
