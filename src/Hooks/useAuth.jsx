export default function useAuth() {
  const auth = localStorage.getItem("auth_dashboard");
  //   const auth = useSelector((state) => state?.auth);
  //   if (auth?.access_token && auth?.user) {
  if (auth?.access_token) {
    return true;
  } else {
    return false;
  }
}
