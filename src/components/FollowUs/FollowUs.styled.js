import styled from "styled-components";

export const LinksWrapper = styled.div`
  display: none;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const FollowUsTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #23262a;
  margin-bottom: 40px;
`;

export const FollowUsList = styled.ul`
  width: 163px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

export const FollowUsItem = styled.li`
  svg {
    color: #8baa36;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      color: #001833;
    }
  }
`;
