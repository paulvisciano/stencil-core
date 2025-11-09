import React, { useState } from 'react';

export default function TestCasesTable({ rows = [], previewCount = 3 }) {
  const missingRows = [...rows.filter(r => !r.implemented)].sort((a, b) => a.id - b.id);
  const implementedRows = [...rows.filter(r => r.implemented)].sort((a, b) => a.id - b.id);
  const orderedRows = [...missingRows, ...implementedRows];
  const totalRows = orderedRows.length;

  const [expanded, setExpanded] = useState(false);
  const rowsToRender = expanded ? orderedRows : orderedRows.slice(0, previewCount);

  const renderStatus = (r) => {
    if (!r.implemented) return <em>—</em>;
    // Show test count if available
    if (r.testCount > 0) {
      return (
        <span style={{ color: '#16a34a', fontWeight: '600' }}>
          {r.testCount} {r.testCount === 1 ? 'test' : 'tests'}
        </span>
      );
    }
    return <span style={{ color: '#16a34a' }}>✔</span>;
  };

  const renderCaseRow = (r, idx) => (
    <tr key={r.id} style={idx % 2 === 1 ? { background: '#f9f9f9' } : undefined}>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>#{r.id}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{r.desc}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{r.types}</td>
      <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>{renderStatus(r)}</td>
    </tr>
  );

  const renderSectionedRows = (rows) => {
    const out = [];
    let lastSection = null;
    rows.forEach((r, i) => {
      const section = r.implemented ? 'implemented' : 'missing';
      if (section !== lastSection) {
        out.push(
          <tr key={`section-${section}-${i}`}>
            <td colSpan={4} style={{ padding: '8px', border: '1px solid #ddd', background: section === 'missing' ? '#fff4e5' : '#eef7ee', fontWeight: 600 }}>
              {section === 'missing' ? 'Not Implemented' : 'Implemented'}
            </td>
          </tr>
        );
        lastSection = section;
      }
      out.push(renderCaseRow(r, i));
    });
    return out;
  };

  return (
    <div style={{ maxWidth: '100%', width: '100%', background: '#fff', position: 'relative' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '45%' }} />
          <col style={{ width: '35%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Test Case #</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>Types Covered</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Status</th>
          </tr>
        </thead>
        <tbody>{renderSectionedRows(rowsToRender)}</tbody>
      </table>
      {!expanded && totalRows > previewCount && (
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
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
              aria-label={`Show all ${totalRows} test cases`}
            >
              Show all {totalRows} test cases
            </button>
          </div>
        </>
      )}
      {expanded && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
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
            aria-label="Collapse test cases table"
          >
            Collapse table
          </button>
        </div>
      )}
    </div>
  );
}
