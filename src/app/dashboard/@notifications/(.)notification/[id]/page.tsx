"use client";

import { useParams } from 'next/navigation';

const NotificationPage = () => {
  // インターセプトされた通知IDを取得
  const params = useParams();
  const id = params.id;
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">通知詳細</h2>
      <p>これはインターセプトされた通知ページです。</p>
      <p>通知ID: {id}</p>
      <p>通知IDに基づいて詳細情報を表示できます。</p>
    </div>
  );
};

export default NotificationPage;
