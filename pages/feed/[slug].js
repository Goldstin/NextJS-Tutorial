export const Feed = ({ pageNumber, articles }) => {
    return (<>Hello World!</>);
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNUmber || pageNumber < 1 || pageNumber > 5){
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }
};

export default Feed;