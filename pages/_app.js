import Layout from "@/components/layout/Layout";
import '../style/global.css';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
