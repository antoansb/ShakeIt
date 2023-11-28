import styled from 'styled-components';

const Wrapper = styled.article`
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;

  .dark-theme {
    background: #060608;
  }

  img {
    height: 15rem;
    width: 100%;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    display: block;
    object-fit: cover;
  }
  .footer {
    padding: 1.5rem;
    h2 {
      font-weight: 700;
    }
    h2,
    h4 {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 1rem;
      color: #64748b;
    }
    .btn {
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
    }
  }
  .footer:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export default Wrapper;
