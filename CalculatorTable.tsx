import * as React from 'react';
import { TableInput, OutputField, StyledTd, StyledTable } from './CalculatorTable.styled';

export interface ICalculatorTableProps {
  handleOperator: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleNumber: (event: React.MouseEvent<HTMLInputElement>) => void;
  handleCompute: (event: React.MouseEvent<HTMLInputElement>) => void;
  text: string;
}

const CalculatorTable = ({ handleOperator, handleNumber, handleCompute, text }: ICalculatorTableProps) => {

  return (
    <StyledTable>
      <tr>
        <StyledTd colSpan={4} >
          <OutputField type="text" value={text} className="textview" readOnly={true} />
        </StyledTd>
      </tr>
      <tr>
        <StyledTd><TableInput type="button" value="+" onClick={handleOperator} /></StyledTd>
        <StyledTd><TableInput type="button" value="-" onClick={handleOperator} /></StyledTd>
        <StyledTd><TableInput type="button" value="*" onClick={handleOperator} /></StyledTd>
        <StyledTd><TableInput type="button" value="/" onClick={handleOperator} /></StyledTd>
      </tr>
      <tr>
        <StyledTd><TableInput type="button" value="7" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="8" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="9" onClick={handleNumber} /></StyledTd>
        <StyledTd rowSpan={3}>
          <TableInput type="button" value="=" onClick={handleCompute} />
        </StyledTd>
      </tr>
      <tr>
        <StyledTd><TableInput type="button" value="4" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="5" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="6" onClick={handleNumber} /></StyledTd>
      </tr>
      <tr>
        <StyledTd><TableInput type="button" value="1" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="2" onClick={handleNumber} /></StyledTd>
        <StyledTd><TableInput type="button" value="3" onClick={handleNumber} /></StyledTd>
      </tr>
    </StyledTable>
  );
}

export default CalculatorTable;