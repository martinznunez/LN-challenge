import React from 'react';
import Link from 'next/link';
import { TagsListProps } from './types';
import styles from './tagsList.styles';

const TagsList: React.FC<TagsListProps> = ({ tags }) => {

  return (
    <div style={styles.container}>
      {tags.map((tag, index) => (
        <div key={tag.slug} style={styles.tagItem}>
          <Link  href={`/tema/${tag.slug}`} style={styles.link}  role='link'>
            {tag.text}
          </Link>
         
          {index < tags.length - 1 && <span style={styles.dot}>.</span>}
        </div>
      ))}
    </div>
  );
};

export default TagsList;
