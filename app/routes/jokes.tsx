import { Outlet } from 'remix';

export default function JokesRoute() {
  return (
    <div>
      JOKES
      <main>
        <Outlet />
      </main>
    </div>
  );
}
