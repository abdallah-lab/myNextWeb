import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  return <div>Hello I am {page} Page</div>;
}
