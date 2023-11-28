import styled from 'styled-components';

const Wrapper = styled.div`
  .toggle-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .btn-toggle {
    background: transparent;
    border-color: transparent;
    width: 5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
  }

  .toggle-icon {
    font-size: 1.5rem;
    color: #0f172a;
  }
  .toggle-icon:hover {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    .toggle-container {
      top: 2rem;
    }
  }
`;

export default Wrapper;
