import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <>
        <h2>Docs {params[0]}</h2>
        <h2>Docs {params[1]}</h2>
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        <h2>Docs {params[0]}</h2>
      </>
    );
  } 
    return <h1>Docs Home Pages</h1>;
  
}

export default Docs;
