import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api.js";
import FriendCard from "../components/FriendCard.jsx";
import NoFriendsFound from "../components/NoFriendsFound.jsx";
import { UsersIcon } from "lucide-react";

const FriendsPage = () => {
  const {
    data: friends = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Your Friends</h1>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center">Failed to load friends. Please try again.</div>
        ) : friends.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <UsersIcon className="h-5 w-5 text-primary" />
              Language Partners
              <span className="badge badge-primary ml-2">{friends.length}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {friends.map((friend) => (
                <FriendCard key={friend._id} friend={friend} />
              ))}
            </div>
          </section>
        ) : (
          <NoFriendsFound />
        )}
      </div>
    </div>
  );
};

export default FriendsPage;