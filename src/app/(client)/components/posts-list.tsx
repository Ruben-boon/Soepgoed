import styles from "./posts-list.module.scss";
import { fetchPosts } from "@/api/sanityApi";
import Card from "./card";

export interface PostsListProps {
  content: {
    heading: string;
  };
}

const PostsList: React.FC<PostsListProps> = async ({ content }) => {
  const posts = await fetchPosts(12, null);
  return (
    <div className={styles.postsList}>
      <div className={`${"container"} ${styles.postsListContainer}`}>
        <h2 className={styles.postsListTitle}>{content.heading}</h2>
        <div className={styles.postsListGroup}>
          {posts &&
            // @ts-ignore
            posts.map((post) => {
              return (
                <div className={styles.cardGroup} key={post._key}>
                  <Card content={post} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostsList;
