import React, { useState } from 'react';

export default function GeneratedComponentsTable({ rows = [], previewCount = 3 }) {
  const [expanded, setExpanded] = useState(false);
  const total = rows.length;
  const rowsToRender = expanded ? rows : rows.slice(0, previewCount);

  const renderTable = (rowsSubset) => (
    <div style={{ maxWidth: '100%', width: '100%', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Type</th>
            <th>reflect</th>
            <th>mutable</th>
            <th>Tested By</th>
          </tr>
        </thead>
        <tbody>
          {rowsSubset.map((r) => (
            <tr key={r.index}>
              <td>{r.type}</td>
              <td>{r.reflect}</td>
              <td>{r.mutable}</td>
              <td>
                {r.caseNumbers && r.caseNumbers.length
                  ? (
                      r.caseNumbers.length === 1
                        ? `#${r.caseNumbers[0]}`
                        : r.caseNumbers.join(' & ')
                    )
                  : <em>—</em>}
              </td>
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
