import styled from 'styled-components';

const Wrapper = styled.nav`
  .dark-theme {
    background: #060608;
    .nav-link {
      color: #f1f5f9;
    }
    .active {
      color: #49a6e9;
    }
    svg {
      color: #f1f5f9;
    }
  }

  .nav-container {
    background: #fff;
  }
  .nav-center {
    position: relative;
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: #49a6e9;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    font-size: larger;
  }
  .nav-link {
    text-decoration: none;
    color: #0f172a;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: 0.3s ease-in-out all;
    letter-spacing: 1px;
  }
  .nav-link:hover {
    color: #49a6e9;
  }
  .active {
    color: #49a6e9;
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
export default Wrapper;
