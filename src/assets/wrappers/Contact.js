import styled from 'styled-components';

const Wrapper = styled.div`
  .form {
    width: 100%;
    max-width: 600px;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .form-label {
    display: block;
    text-align: left;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
  }
  .form-textarea {
    height: 7rem;
  }
  .btn {
    margin-top: 0.5rem;
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
  .btn-block {
    width: 100%;
  }
  .btn:hover {
    background: #1a6aa2;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export default Wrapper;
