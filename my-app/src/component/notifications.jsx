import "../style/teachersHome.css";

const HomeNotification = () => {
  return (
    <section className="notification__panel">
      <h1>Notifications</h1>
      <div className="notification">
        <time>Today</time>
        <p>AlphaRehobot Schools Requested to connect with you</p>
        <time>2hours ago</time>
      </div>
    </section>
  );
};

export default HomeNotification;
