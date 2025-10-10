import React from 'react';

export default function RulesAtAGlance({ rules, showSource = true, sourcePath = './rules.json' }) {
  const exclusiveGroups = Array.isArray(rules?.exclusiveGroups) ? rules.exclusiveGroups : [];

  // Known groups with friendly phrasing
  const stylesGroup = exclusiveGroups.find((g) => g?.name === 'styles');
  const encGroup = exclusiveGroups.find((g) => g?.name === 'encapsulation');

  const stylesList = Array.isArray(stylesGroup?.members) && stylesGroup.members.length
    ? stylesGroup.members
    : ['styleUrl', 'styleUrls', 'styles'];
  const encMembers = Array.isArray(encGroup?.members) && encGroup.members.length
    ? encGroup.members
    : ['shadow', 'scoped'];

  const modes = Array.isArray(rules?.modes) ? rules.modes : [];
  const modeList = modes.map((m) => m?.name).filter(Boolean);

  const hasOptions = rules && rules.options && typeof rules.options === 'object';
  const optionKeys = hasOptions ? Object.keys(rules.options) : [];

  const pretty = JSON.stringify(rules ?? {}, null, 2);

  // Any other exclusive groups get a generic "pick one" message.
  const otherExclusiveGroups = exclusiveGroups.filter(
    (g) => g && g.name !== 'styles' && g.name !== 'encapsulation' && Array.isArray(g.members) && g.members.length > 1
  );

  return (
    <div>
      <ul>
        {stylesList.length > 0 && (
          <li>
            Styles: pick one. Use either <code>{stylesList.join(' | ')}</code> (not more than one).
          </li>
        )}
        {encMembers.length >= 2 && (
          <li>
            Encapsulation: don't turn on <code>{encMembers[0]}</code> and <code>{encMembers[1]}</code> at the same time.
          </li>
        )}
        {otherExclusiveGroups.map((g) => (
          <li key={g.name}>
            {g.name}: pick one. Use either{' '}
            <code>{g.members.join(' | ')}</code> (not more than one).
          </li>
        ))}
        {modeList.length > 0 && (
          <li>
            Render mode: choose {
              modeList.map((m, i) => (
                <span key={m}>
                  <code>{m}</code>
                  {i < modeList.length - 1 ? ', ' : ''}
                </span>
              ))
            }.
          </li>
        )}
        {!modeList.length && optionKeys.length > 0 && (
          <li>
            Options: this decorator varies by {optionKeys.map((k, i) => (
              <span key={k}>
                <code>{k}</code>
                {i < optionKeys.length - 1 ? ', ' : ''}
              </span>
            ))}.
          </li>
        )}
      </ul>
      {showSource && (
        <details>
          <summary style={{ cursor: 'pointer', userSelect: 'none' }}>View rules.json (source)</summary>
          <div style={{ marginTop: 8 }}>
            <small>Source: <code>{sourcePath}</code></small>
            <pre style={{ background: '#f7f7f7', padding: 12, border: '1px solid #eee', borderRadius: 4, overflowX: 'auto' }}>
              <code>{pretty}</code>
            </pre>
          </div>
        </details>
      )}
    </div>
  );
}
