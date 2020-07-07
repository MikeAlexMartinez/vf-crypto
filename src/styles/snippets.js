export const flexCentered = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const emptyStyling = (property) => `
  ${property}: 0px;

  @media screen and (min-width: 600px) {
    ${property}: 20px;
  }
  @media screen and (min-width: 768px) {
    ${property}: 80px;
  }
  @media screen and (min-width: 1024px) {
    ${property}: 200px;
  }
  @media screen and (min-width: 1450px) {
    ${property}: 300px;
  }
`;
