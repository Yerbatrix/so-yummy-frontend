import styled from 'styled-components';

// Mobile (domyślne style)
export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const SelectorLabel = styled.label`
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;  /* Mniejsza czcionka dla mobilnych */
`;

export const Selector = styled.select`
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;  /* Mniejsza szerokość dla mobilnych */
  background-color: #D9D9D9;
  box-sizing: border-box;
  
  /* Usunięcie obramowania po rozwinięciu selektora */
  &:focus {
    border-color: transparent;
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

// Tablet
export const TabletSelectorContainer = styled(SelectorContainer)`
  @media (min-width: 768px) {
    justify-content: flex-start;  /* Możesz dostosować wyrównanie dla tabletów */
  }
`;

export const TabletSelectorLabel = styled(SelectorLabel)`
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TabletSelector = styled(Selector)`
  @media (min-width: 768px) {
    width: 180px;  /* Szerokość dla tabletów */
    font-size: 20px;
  }
`;

// Desktop
export const DesktopSelectorContainer = styled(SelectorContainer)`
  @media (min-width: 1024px) {
    justify-content: flex-start;  /* Możesz dostosować wyrównanie dla desktopów */
  }
`;

export const DesktopSelectorLabel = styled(SelectorLabel)`
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const DesktopSelector = styled(Selector)`
  @media (min-width: 1024px) {
    width: 198px;  /* Szerokość dla desktopów */
    font-size: 18px;
  }
`;
