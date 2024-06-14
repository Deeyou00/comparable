import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import comparables from './comparables.json';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 600,
    overflowX: 'auto',
  },
  stickyHeader: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#b2e4e5', // Custom header background color
    color: '#333', // Custom header text color
    zIndex: theme.zIndex.appBar + 1,
    padding: '4px', // Adjust header padding as needed
  },
  stickyColumn: {
    position: 'sticky',
    left: 0,
    backgroundColor: '#b2e4e5', // Custom sticky column background color
    color: '#333', // Custom sticky column text color
    zIndex: theme.zIndex.appBar,
    minWidth: 150, // Adjust this value as needed
    padding: '4px', // Adjust column padding as needed
  },
  secondStickyColumn: {
    position: 'sticky',
    left: 150, // This should match the minWidth of the first column
    backgroundColor: '#ccd45b', // Custom second sticky column background color
    color: '#333', // Custom second sticky column text color
    zIndex: theme.zIndex.appBar,
    minWidth: 200, // Adjust this value as needed
    padding: '4px', // Adjust column padding as needed
  },
  stickyCell: {
    position: 'sticky',
    left: 0,
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.appBar + 1,
  },
  rowName: {
    fontWeight: 'bold',
    backgroundColor: '#f9edd9', // Custom row name background color
    color: '#333', // Custom row name text color
    zIndex: theme.zIndex.appBar,
    padding: '4px', // Adjust row name padding as needed
  },
  headerCell: {
    zIndex: theme.zIndex.appBar + 2,
    padding: '4px', // Adjust header cell padding as needed
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f9edd9', // Custom color for odd rows
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#ffffff', // Custom color for even rows
    },
  },
  tableCell: {
    borderBottom: '1px solid #ddd', // Custom border color
    padding: '4px', // Adjust cell padding as needed
  },
}));

const AvmTable: React.FC = () => {
  const classes = useStyles();
  const { subjectFlat, comp } = comparables;

  const subjectFlatData = [
    { label: "Property Address", value: `${subjectFlat.EST_E_NAME} ${subjectFlat.ST_E_NAME} ${subjectFlat.ST_NO_FRM}` },
    { label: "PRN", value: subjectFlat.PRN },
    { label: "Memorial No.", value: subjectFlat.MEMORIAL_NO },
    { label: "Date of Transaction", value: subjectFlat.INST_DATE },
    { label: "Consideration", value: subjectFlat.CONSIDERTN },
    { label: "Gross Floor Area (s.f.)", value: subjectFlat.GROSS_PSF },
    { label: "Saleable Area (s.f.)", value: subjectFlat.TOTNFA },
    { label: "Garden/Yard Area", value: subjectFlat.GARDEN_YARD_AREA },
    { label: "Roof Area", value: subjectFlat.ROOF_AREA },
    { label: "Flat Roof Area", value: subjectFlat.FLAT_ROOF_AREA },
    { label: "Year of Completion", value: subjectFlat.OP_DATE },
    { label: "Property Type", value: subjectFlat.PROPERTY_TYPE },
    { label: "Level", value: subjectFlat.LEVEL },
    { label: "Orientation/View", value: subjectFlat.VIEW },
    { label: "Remarks", value: subjectFlat.REMARKS },
    { label: "Effective Area (sq.ft.)", value: subjectFlat.EFFECTIVE_AREA },
    { label: "Car Parking Space", value: subjectFlat.CAR_PARKING_SPACE },
    { label: "Effective Unit Rate ($/sq.ft.)", value: subjectFlat.EFFECTIVE_UNIT_RATE },
    { label: "Time", value: subjectFlat.TIME },
    { label: "Size/Quantum", value: subjectFlat.SIZE_QUANTUM },
    { label: "Location", value: subjectFlat.LOCATION },
    { label: "View", value: subjectFlat.VIEW },
    { label: "Age & Internal Condition", value: subjectFlat.AGE_INTERNAL_CONDITION },
    { label: "Level", value: subjectFlat.LEVEL },
    { label: "Privacy/Noise", value: subjectFlat.PRIVACY_NOISE },
    { label: "Facilities", value: subjectFlat.FACILITIES },
    { label: "Total Adjustment", value: subjectFlat.TOTAL_ADJUSTMENT },
    { label: "Adjusted Unit Rate ($/sq.ft.)", value: subjectFlat.ADJUSTED_UNIT_RATE },
    { label: "Selected Comps", value: subjectFlat.SELECTED_COMPS },
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={`${classes.stickyHeader} ${classes.stickyColumn} ${classes.headerCell}`}>Label</TableCell>
            <TableCell className={`${classes.stickyHeader} ${classes.secondStickyColumn} ${classes.headerCell}`}>Subject Property</TableCell>
            {comp.map((_, index) => (
              <TableCell key={index} className={classes.stickyHeader}>Comparable {index + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {subjectFlatData.map((item, rowIndex) => (
            <TableRow key={rowIndex} className={classes.tableRow}>
              <TableCell className={`${classes.rowName} ${classes.stickyColumn} ${classes.tableCell}`}>{item.label}</TableCell>
              <TableCell className={`${classes.secondStickyColumn} ${classes.tableCell}`}>{item.value}</TableCell>
              {comp.map((compItem, colIndex) => {
                const value = (() => {
                  switch (rowIndex) {
                    case 0: return `${compItem.EST_E_NAME} ${compItem.ST_E_NAME} ${compItem.ST_NO_FRM}`;
                    case 1: return compItem.PRN;
                    case 2: return compItem.MEMORIAL_NO;
                    case 3: return compItem.INST_DATE;
                    case 4: return compItem.CONSIDERTN;
                    case 5: return compItem.GROSS_PSF;
                    case 6: return compItem.TOTNFA;
                    case 7: return compItem.GARDEN_YARD_AREA;
                    case 8: return compItem.ROOF_AREA;
                    case 9: return compItem.FLAT_ROOF_AREA;
                    case 10: return compItem.OP_DATE;
                    case 11: return compItem.PROPERTY_TYPE;
                    case 12: return compItem.LEVEL;
                    case 13: return compItem.VIEW;
                    case 14: return compItem.REMARKS;
                    case 15: return compItem.EFFECTIVE_AREA;
                    case 16: return compItem.CAR_PARKING_SPACE;
                    case 17: return compItem.EFFECTIVE_UNIT_RATE;
                    case 18: return compItem.TIME;
                    case 19: return compItem.SIZE_QUANTUM;
                    case 20: return compItem.LOCATION;
                    case 21: return compItem.VIEW;
                    case 22: return compItem.AGE_INTERNAL_CONDITION;
                    case 23: return compItem.LEVEL;
                    case 24: return compItem.PRIVACY_NOISE;
                    case 25: return compItem.FACILITIES;
                    case 26: return compItem.TOTAL_ADJUSTMENT;
                    case 27: return compItem.ADJUSTED_UNIT_RATE;
                    case 28: return compItem.SELECTED_COMPS;
                    default: return '';
                  }
                })();
                return <TableCell key={colIndex} className={classes.tableCell}>{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AvmTable;
