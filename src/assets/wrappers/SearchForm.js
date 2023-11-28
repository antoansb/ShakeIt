import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 6rem;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    max-width: 600px;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: #49a6e9;
    color: #fff;
    border: transparent;
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
`;

export default Wrapper;
