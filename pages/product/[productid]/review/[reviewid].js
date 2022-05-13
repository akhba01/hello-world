import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productid, reviewid } = router.query;

  return (
    <h1>
      Detail about review {reviewid} of product {productid}
    </h1>
  );
}

export default Review;
