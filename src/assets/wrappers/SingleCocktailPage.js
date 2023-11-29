import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
      background: #49a6e9;
      color: #fff;
      border: transparent;
      border-radius: 0.25rem;
      display: inline-block;
      padding: 0.375rem 0.75rem;
      text-transform: capitalize;
      cursor: pointer;
      text-decoration: none;
      transition: 0.3s ease-in-out all;
    }
    .btn:hover {
      background: #1a6aa2;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }
  .img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.25rem;
  }
  .cocktail-info {
    padding-top: 2rem;
    text-align: left;
  }
  .cocktail p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .info-row {
    margin-right: 0.5rem;
    background: #8bcbf9;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #104e7a;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    .cocktail {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .cocktail-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
