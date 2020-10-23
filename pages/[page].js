import { useRouter } from "next/router";
import MainLayout from "../Layout/MainLayout";
// import dynamic from "next/dynamic";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <MainLayout title={page}>
      <div>Hello I am {page} body</div>
    </MainLayout>
  );
}
