/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local import
 */


/*
 * Code
 */
const Post = ({ title, category, excerpt }) => (
  <div className="post">
    <h1 className="post-title">{title}</h1>
    <div className="post-category">{category}</div>
    <div className="post-excerpt">{excerpt}</div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Post;
