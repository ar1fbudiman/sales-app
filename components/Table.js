/* eslint-disable react/jsx-key */
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { useTable, useResizeColumns, useFlexLayout } from "react-table";
import { FixedSizeList } from "react-window";

export default function Tables({ data, columns }) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data, defaultColumn }, useResizeColumns, useFlexLayout);

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <Tr
          {...row.getRowProps({
            style,
          })}
        >
          {row.cells.map((cell) => {
            return (
              <Td noOfLines={1} {...cell.getCellProps()}>
                {cell.render("Cell")}
              </Td>
            );
          })}
        </Tr>
      );
    },
    [prepareRow, rows]
  );
  // Render the UI for your table
  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div {...column.getResizerProps()} className={`resizer`} />
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          <FixedSizeList height={400} itemCount={rows.length} itemSize={35}>
            {RenderRow}
          </FixedSizeList>
        </Tbody>
      </Table>
    </>
  );
}
