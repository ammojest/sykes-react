const DynamicPage = (props) => {
    return ( 
        <>
        <h1>This is a  dynamic page</h1>
        </>
     );
}

export default DynamicPage;

export async function getStaticProps(){

    const res = await fetch('http://localhost:8888/sykes-react/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery {
              pages {
                nodes {
                  }
                }
              }
            }
            `,
        })
    })
  
    const json = await res.json()
  
    return {
      props: {
          pages: json.data.pages,
      },
    }
  
  }



