declare module "*/SplashScreen" {
  const SplashScreen: (props: { onStart: () => void }) => JSX.Element;
  export default SplashScreen;
}

declare module "*/Dashboard" {
  const Dashboard: () => JSX.Element;
  export default Dashboard;
}
