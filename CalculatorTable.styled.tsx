import styled from "styled-components";

export const TableInput = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: white;
  background-color: royalblue;
  border-radius: 5px;
`;

export const OutputField = styled(TableInput)`
  text-align: right;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const StyledTd = styled.td`
  position: relative;
  border-spacing: 0px;
  border-collapse: collapse;
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export const StyledTable = styled.table`
  padding: 10px;
`;
