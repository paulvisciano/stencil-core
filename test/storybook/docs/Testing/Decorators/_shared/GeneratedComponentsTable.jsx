import React, { useState } from 'react';

export default function GeneratedComponentsTable({ rows = [], previewCount = 3, columns }) {
  const [expanded, setExpanded] = useState(false);
  const total = rows.length;
  const rowsToRender = expanded ? rows : rows.slice(0, previewCount);

  const cols = Array.isArray(columns) && columns.length
    ? columns
    : [
        { key: 'type', label: 'Type', width: '30%' },
        { key: 'reflect', label: 'reflect', width: '20%' },
        { key: 'mutable', label: 'mutable', width: '20%' },
        { key: 'testedBy', label: 'Tested By', width: '30%' },
      ];

  const renderCell = (row, col) => {
    if (col.key === 'testedBy') {
      const cn = row.caseNumbers || [];
      if (!cn.length) return <em>—</em>;
      return cn.length === 1 ? `#${cn[0]}` : cn.join(' & ');
    }
    return row[col.key];
  };

  const renderTable = (rowsSubset) => (
    <div style={{ maxWidth: '100%', width: '100%', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          {cols.map((c, i) => (
            <col key={i} style={{ width: c.width || `${Math.floor(100 / cols.length)}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsSubset.map((r) => (
            <tr key={r.index}>
              {cols.map((c, i) => (
                <td key={i}>{renderCell(r, c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (!expanded) {
    return (
      <div style={{ position: 'relative' }}>
        {renderTable(rowsToRender)}
        {total > previewCount && (
          <>
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 40,
                height: 48,
                background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #fff 90%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: -8 }}>
              <button
                onClick={() => setExpanded(true)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #ddd',
                  background: '#f8f8f8',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 12,
                }}
                aria-label={`Show all ${total} components`}
              >
                Show all {total} components
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <button
          onClick={() => setExpanded(false)}
          style={{
            padding: '6px 12px',
            border: '1px solid #ddd',
            background: '#f8f8f8',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 12,
          }}
          aria-label="Collapse components table"
        >
          Collapse table
        </button>
      </div>
      {renderTable(rows)}
    </div>
  );
}
