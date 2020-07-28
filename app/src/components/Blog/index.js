/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */

// Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data
import categories from 'src/datas/categories';
import posts from 'src/datas/posts';

/*
 * Code
 */
class Blog extends React.Component {
  /*
   * State
   */
  state = {
    selectedCategory: 'Accueil',
  }
  /*
   * Actions
   */
  handleClick = category => () => {
    // Version avec une fonction, utile lorsque le state courant nous importe
    // this.setState(state => ({
    //   count: state.count + 1,
    // }));
    this.setState({
      selectedCategory: category,
    });
  }
  // version JS
  // function handleClick = function(category) {
  //   return function() {
  //     this.setState({machin: category})
  //   }
  // }

  /*
   * rendu
   */
  render() {
    const { selectedCategory } = this.state;

    const selectedPosts = selectedCategory === 'Accueil' ? posts : posts.filter(post => post.category === selectedCategory);

    return (
      <div id="blog">
        <Header
          categories={categories}
          onCategoryClick={this.handleClick}
        />
        <Posts posts={selectedPosts} />
        <Footer />
      </div>
    );
  }
}

/*
 * Stateless Component
 */
// const Blog = () => {
//   const selectedCategory = 'React';
//
//   const selectedPosts = posts.filter(post => post.category === selectedCategory);
//
//   return (
//     <div id="blog">
//       <Header categories={categories} />
//       <Posts posts={selectedPosts} />
//       <Footer />
//     </div>
//   );
// };


/*
 * Export
 */
export default Blog;
