"use client";

import { useRouter } from "next/navigation";

const NotificationsPage = () => {
  const router = useRouter();

  const handleInterceptNavigation = () => {
    router.push("/dashboard/notification/123");
  };

  return (
    <div>
      <h2>NotificationsPage</h2>
      <button 
        onClick={handleInterceptNavigation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        通知の詳細を表示 (intercept)
      </button>
    </div>
  );
};

export default NotificationsPage;