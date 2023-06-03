import React from "react";
import { useAuth } from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <section className="py-12 px-6">
      <div>
        <h2 className="text-3xl font-cinzel font-bold text-neutral">
          Hi, Welcome Back {user.displayName && `, ${user.displayName}`}!
        </h2>

        <div>
          <div>
            <></>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
