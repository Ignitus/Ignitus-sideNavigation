import React from 'react';

interface EmojiProps {
  emoji: string;
  label: string;
}

export const Emoji: React.FC<EmojiProps> = ({ emoji, label }) => (
  <span role="img" aria-label={label} style={{ marginLeft: '1rem' }}>
    {emoji}
  </span>
);
