// src/components/MarkdownSortableTable.js
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const parseMarkdownTable = (markdown) => {
  const lines = markdown.trim().split('\n');
  const headers = lines[0].split('|').map(header => header.trim()).filter(Boolean);
  const data = lines.slice(2).map(line => {
    const cells = line.split('|').map(cell => cell.trim()).filter(Boolean);
    return headers.reduce((acc, header, index) => {
      // Replace <sup> tags with HTML sup elements
      const cellContent = cells[index]?.replace(/<sup>(.*?)<\/sup>/g, '<sup>$1</sup>');
      acc[header.toLowerCase().replace(/ /g, '')] = cellContent;
      return acc;
    }, {});
  });
  return { headers, data };
};

const MarkdownSortableTable = ({ markdown }) => {
  const { headers, data } = useMemo(() => parseMarkdownTable(markdown), [markdown]);

  const columns = useMemo(() => headers.map(header => ({
    Header: header + '  ', // Add two spaces at the end of each header
    accessor: header.toLowerCase().replace(/ /g, ''),
  })), [headers]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{ cursor: 'pointer' }}
              >
                {column.render('Header').replace(/ {2}$/, column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : '  ')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  dangerouslySetInnerHTML={{ __html: cell.value }}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MarkdownSortableTable;