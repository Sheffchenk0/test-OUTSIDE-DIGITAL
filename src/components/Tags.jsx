import React from 'react';
import classNames from 'classnames';
import Tag from './Tag';

const Tags = ({ tags, setTag, activeTag }) => {
  return (
    <div className="tags">
      {tags.map((el, index) => {
        return (
          <Tag
            key={index}
            onClick={() => setTag(index)}
            className={classNames('tag', { active: activeTag === index })}>
            {el}
          </Tag>
        );
      })}
    </div>
  );
};

export default Tags;
